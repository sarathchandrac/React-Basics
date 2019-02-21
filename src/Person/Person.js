import React from 'react';
import './Person.css';
import Radium from 'radium';

const Person = (props) => {
    // console.log('props ---> ', props);
    // console.log('allow us to access to all properites passed in components ---> ');
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}> I'm {props.name} </p>
            <p>{props.children}</p>
            <input
                defaultValue={props.name} 
                type="text" 
                onChange={props.changed}></input>
        </div>
    )
};

export default Radium(Person);