import React, { useEffect} from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) =>  {
    useEffect(() => {
        console.log('[cockpit.js] useEffect ---> ');
        return (() => {
            console.log('[cockpit.js] cleanup task in useeffect ---> ');
        })
    }, [props.noPersons]);
    let btnClass = '';
    const assignedClasses = [];// ['red', 'bold'].join(' ');

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.noPersons <= 2) {
      assignedClasses.push( classes.red);

    }
    if (props.noPersons <= 1) {
      assignedClasses.push( classes.bold);
    }



    return (
        <div className={classes.Cockpit}>
            <h1>React Basics</h1>
            <p className={assignedClasses.join(' ')}> Test CSS styling </p>
            {/* <button 
                style={style}
                onClick={this.switchNameHandler.bind(this,"Tim")}> Switch Name </button> */}
            <button
                className={btnClass}
                onClick = {props.toggle}>Toggle Persons</button>
        </div>
    )
}

export default Cockpit;