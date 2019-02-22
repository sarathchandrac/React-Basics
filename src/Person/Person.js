import React from 'react';
import classes from './Person.css';

const Person = (props) => {
    // console.log('props ---> ', props);
    // console.log('allow us to access to all properites passed in components ---> ');
    return (
        <div className={classes.Person} >
            <p onClick={props.click}> I'm {props.name} </p>
            <p>{props.children}</p>
            <input
                defaultValue={props.name} 
                type="text" 
                onChange={props.changed}></input>
        </div>
    )
};

export default Person;