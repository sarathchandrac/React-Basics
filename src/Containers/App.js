import React, { Component } from 'react';
// import logo from './logo.svg';
import classes from './App.css';
import Cockpit from '../Components/Cockpit/Cockpit';
import Persons from './../Components/Persons/Persons';

class App extends Component {
  // state is managed inside a compoenent
  // state should be used with care
  // Change in state will re render the dom
  constructor(props) {
    super(props);
    console.log('[App.js]: 1 constructor');
  }
  state = {
    persons: [
      { id: "1", name: "Sarath", hobby: "Badminton"},
      { id: "2", name: "Chandra", hobby: "Tennis"},
      { id: "3", name: "James", hobby: "Chess"}
    ],
    otherState: 'Some other value',
    showCockpit: true,
    showPersons: false
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("[App.js]: 2 get derived state from props", nextProps);
    return prevState;
  }
 
  
  //obsolate hook for component
  // componentWillMount() {
  //   console.log("[App.js]: 4 Component will mount before component did mount -------> ");

  // }

  componentDidMount() {
    console.log("[App.js]: 5 Component Did mount -------> ");

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js]: 5 shouldComponentUpdate -------> ");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js]: 6 componentDidUpdate -------> ");

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
    console.log('clicked...')
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
    console.log("[App.js]: 3 render method ----> ");

    if ( this.state.showPersons ) {
      persons = (
        <div >
          <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}
          ></Persons>
          

           
        </div>
      );

    }


    // changed={this.nameChangedHandler}
    // console.log('state ---> ', this.state);
    return (
        <div className={classes.App}>
          <button
            onClick={() => {
              this.setState( { showCockpit: !this.state.showCockpit })
            }}
          >Remove Cockpit</button>
          {this.state.showCockpit ?  <Cockpit 
              showPersons = {this.state.showPersons}
              noPersons = {this.state.persons.length}
              toggle = {this.togglePersonsHandler} />
               : null }

            {persons}

        </div>

    );
  }
}

export default App;
