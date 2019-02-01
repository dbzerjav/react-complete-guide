import React, { Component } from 'react';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';

class Person extends Component { 
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside ComponetWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] Inside ComponenetDidMount');
  }
    render() {
      console.log('[Person.js] Inside Render');
        return(
          <>
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />
          </>
        )
    }
}

export default withClass(Person, classes.Person);