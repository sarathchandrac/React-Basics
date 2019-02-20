import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // state is managed inside a compoenent
  // state should be used with care
  // Change in state will re render the dom
  state = {
    persons: [
      { name: "Sarath", hobby: "Badminton"},
      { name: "Chandra", hobby: "Tennis"},
    ]
  }
  switchNameHandler = (newName) => {
    console.log("was clicked");
    this.setState({
      persons:[
        { name: newName, hobby: "Football"},
      { name: "Chandra", hobby: "Golf"},
      ]
    });
    // console.log('state changed to ---> ', this.state);

  }

  nameChangedHandler = (event) => {
    this.setState ({
      persons:[
        { name: "Sarath", hobby: "Football"},
      { name: event.target.value, hobby: "Golf"},
      ],
      otherState: 'Some other value',
      showPersons: false
    })
  }
  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons
    });


  }

  render() {
    const style = {
      backgroundColor : 'white',
      font            : 'inherit',
      border          : '1px solid blue',
      padding         : '8px',
      cursor          : 'pointer'
    }
    console.log('state ---> ', this.state);
    return (
      <div className="App">
        <h1>React Basics</h1>
        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this,"Tim")}> Switch Name </button>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>

        { this.state.showPersons === true ?
          <div >
              <Person
              click={this.switchNameHandler.bind(this,"Max")}
              name={this.state.persons[0].name} > I Like {this.state.persons[0].hobby} </Person>
              <Person 
                click={this.switchNameHandler.bind(this,"James")}
                changed={this.nameChangedHandler}
                name={this.state.persons[1].name}>I Like {this.state.persons[1].hobby}</Person>
          </div> 
          : null
        }
      </div>
    );
  }
}

export default App;
