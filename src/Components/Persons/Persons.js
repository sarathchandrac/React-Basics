import React, {Component} from 'react';
import ErrorBoundary from './../../ErrorHandlers/ErrorBoundary';
import Person from './../../Components/Persons/Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
  }
  //cleanup tasks
  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }
  
  
  
  render() {
    console.log('[persons.js] render ---> ');
    return this.props.persons.map((person, index)=>{
      return (
        <ErrorBoundary
          key={person.id}>
            <Person 
                name={person.name}
                click={() => this.props.clicked(index)}
                changed={(event) =>{
                console.log("person ---> ", person);
                this.props.changed(event, person.id)}}
                >I Like {person.hobby} </Person>
        </ErrorBoundary>
      );
    });
  }
}


export default Persons;