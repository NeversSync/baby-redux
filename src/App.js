import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GreetingContainer from './Greeting/GreetingContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to your greeting editor</h2>
        </div>
        <GreetingContainer/>
      </div>
    );
  }
}

export default App;
