import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';



// You can only definte properties in components that extend Component
// Where props are set and passed from outside a component.
// States are managed from inside from inside a component. 
// States are only available from class components, not functional components
class App extends Component {
  state = {
    persons: [
      { name:'Danielle', age:'23' },
      { name:'Jonny', age:'26' },
      { name:'Sammy', age:'7' },
    ]
  }

  switchNameHandler = (newName) =>{
    // console.log('I was clicked')
    // DONT DO THIS this.state.persons[0].name='cracka'
    this.setState({
      persons:[
        { name:'Danielle', age:'15' },
        { name:'Jonny', age:'12' },
        { name: newName, age:'7' },
      ]
    })
  }

  render() {
    return (
       <div className='App'>
          <h1>My first app!</h1>
          <button onClick={this.switchNameHandler.bind(this, 'Maxmillian')}>Switch Name</button>
          <Person
           name={this.state.persons[0].name} 
           age={this.state.persons[0].age} 
           click={this.switchNameHandler} />
          <Person
           name={this.state.persons[1].name} 
           age={this.state.persons[1].age} 
           click={this.switchNameHandler.bind(this, 'Moo')} />
          <Person
           name={this.state.persons[2].name} 
           age={this.state.persons[2].age} 
           click={this.switchNameHandler} />
       </div>
    );
  }
}

export default App;
