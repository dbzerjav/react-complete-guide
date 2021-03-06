import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {id: 'uy6g55', name: 'Max', age: 28},
      {id: 'f5tyf8', name: 'Dan', age: 30},
      {id: 'hj8jg9', name: 'Rob', age: 34}
    ]
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id  
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice(); old way of makeing new arr copy from arr
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState( {persons: persons} );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( {showPersons: !doesShow} );
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid white',
      borderRadius: '8px',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person 
                    click={() => this.deletePersonHandler(index)}
                    name={person.name} 
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor:  'crimson',
        color: 'black'
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }



    return (
        <div className="App">
          <h1>Hi, im a react app! </h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button
            style={style} 
            onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
          {persons}
        </div>
    );
  }
} 

export default App;
