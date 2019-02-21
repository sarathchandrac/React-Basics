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
      { id: "1", name: "Sarath", hobby: "Badminton"},
      { id: "2", name: "Chandra", hobby: "Tennis"},
      { id: "3", name: "James", hobby: "Chess"}
    ]
  }
  switchNameHandler = (newName) => {
    console.log("was clicked");
    this.setState({
      persons:[
        { id:"1", name: "Sachin", hobby: "Cricket"},
        { id:"2", name: "Virat", hobby: "Basketball"},
        { id:"3", name: "Singh", hobby: "Football"}
      ]
    });
    // console.log('state changed to ---> ', this.state);

  }
  deletePersonHandler = (person_index) => {
    const persons = [...this.state.persons];
    console.log('index ---> ', person_index);
    persons.splice(person_index, 1);
    this.setState({
      persons: persons
    });

  }

  // nameChangedHandler = (event) => {
  //   this.setState ({
  //     persons:[
  //       { name: "Sarath", hobby: "Football"},
  //     { name: event.target.value, hobby: "Golf"},
  //     ],
  //     otherState: 'Some other value',
  //     showPersons: false
  //   })
  // }
  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons
    });


  }
  nameChangedHandler = (event, id) => {
    const person_index = this.state.persons.findIndex(p => p.id === id);
    console.log('index ---> ', id, person_index, this.state.persons);
    const person = {
      ...this.state.persons[person_index]
    }
    // alternative syntax
    // const person = Object.assign({}, this.state.persons[person_index]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[person_index] = person;

    this.setState({
      persons: persons

    });
  }

  render() {
    const style = {
      backgroundColor : 'green',
      color           : 'white',
      font            : 'inherit',
      border          : '1px solid blue',
      padding         : '8px',
      cursor          : 'pointer',
      ':hover'        : {
        backgroundColor:  'lightgreen',
        color          :  'black'
      }
    }
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div >
          {this.state.persons.map((person, index)=>{
            return (
              <Person 
                name={person.name}
                click={() => this.deletePersonHandler(index)}
                changed={(event) =>{
                  console.log("person ---> ", person);
                   this.nameChangedHandler(event, person.id)}}
                key={person.id} >I Like {person.hobby}</Person>

            );

          })}
           
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover']        = {
        backgroundColor:  'lightred',
        color          :  'black'
      }

    }
    const classes = [];// ['red', 'bold'].join(' ');
    if (this.state.persons.length <= 2) {
      classes.push('red');

    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');

    }


    // changed={this.nameChangedHandler}
    // console.log('state ---> ', this.state);
    return (
        <div className="App">
          <h1>React Basics</h1>
          <p className={classes.join(' ')}> Test CSS styling </p>
          {/* <button 
            style={style}
            onClick={this.switchNameHandler.bind(this,"Tim")}> Switch Name </button> */}
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}

        </div>

    );
  }
}

export default App;
