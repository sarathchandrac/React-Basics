import React, { Component } from 'react';
// import logo from './logo.svg';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorHandlers/ErrorBoundary';

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

    let persons = null;
    let btnClass = '';

    if ( this.state.showPersons ) {
      persons = (
        <div >
          {this.state.persons.map((person, index)=>{
            return (
              <ErrorBoundary
                key={person.id}>

                <Person 
                  name={person.name}
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) =>{
                    console.log("person ---> ", person);
                    this.nameChangedHandler(event, person.id)}}
                  >I Like {person.hobby}
                </Person>
              </ErrorBoundary>

            );

          })}
           
        </div>
      );
      btnClass = classes.Red;

    }
    const assignedClasses = [];// ['red', 'bold'].join(' ');
    if (this.state.persons.length <= 2) {
      assignedClasses.push( classes.red);

    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push( classes.bold);
    }


    // changed={this.nameChangedHandler}
    // console.log('state ---> ', this.state);
    return (
        <div className={classes.App}>
          <h1>React Basics</h1>
          <p className={assignedClasses.join(' ')}> Test CSS styling </p>
          {/* <button 
            style={style}
            onClick={this.switchNameHandler.bind(this,"Tim")}> Switch Name </button> */}
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}

        </div>

    );
  }
}

export default App;
