import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {
    // componentWillReceiveProps(props) {

    // }
    shouldComponentUpdate(nextPropss, nextState){
    console.log('[Person.js] shouldComponentUpdate');
    return true;
    }
    render() {
    console.log('[person.js] render ---> ');
    return (
            <div className={classes.Person} >
                <p onClick={this.props.click}> I'm {this.props.name} </p>
                <p>{this.props.children}</p>
                <input
                    defaultValue={this.props.name} 
                    type="text" 
                    onChange={this.props.changed}></input>
            </div>
        )
    }
}


export default Person;