import React from 'react';
import avengers from './components/Avengers';
import ListOfNames from './components/ListOfNames';

import './App.css';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      avengers: avengers
    }
  }

  clickEvent = () => {
    alert (`Planet Saved!`)
  }

  render() {
  return (
    <div className="App">

      <ListOfNames 
      avengers = {this.state.avengers}
      clickEvent = {this.clickEvent}
      />
      
    </div>
  );
}
}

export default App;
