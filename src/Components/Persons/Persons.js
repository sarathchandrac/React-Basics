import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from './../../ErrorHandlers/ErrorBoundary';
import Person from './../../Components/Persons/Person/Person';


const Persons = (props) =>  props.persons.map((person, index)=>{
    console.log('person', person);
    
      return (
        <ErrorBoundary
          key={person.id}>

            <Person 
                name={person.name}
                click={() => props.clicked(index)}
                changed={(event) =>{
                console.log("person ---> ", person);
                props.changed(event, person.id)}}
                >I Like {person.hobby} </Person>


        </ErrorBoundary>

      );

    });

export default Persons;