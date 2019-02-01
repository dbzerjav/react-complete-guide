import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside ComponetWillMount');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside ComponenetDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside ComponentWillRecieveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside shouldComponentUpdate', nextProps, nextState);
    return true;
  }
  
  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] inside componentDidUpdate');

  }

  render () {
    console.log('[Persons.js] Inside Render');
    return this.props.persons.map( ( person, index ) => {
      return <Person
          click={() => this.props.clicked( index )}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={( event ) => this.props.changed( event, person.id )} />
    });
  }
}
export default Persons;