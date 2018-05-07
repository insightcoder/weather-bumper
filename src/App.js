import React, { Component } from 'react';
import WeatherBumper from './WeatherBumper';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <WeatherBumper woeid="2424766"/>
        <WeatherBumper woeid="615702"/>
        <WeatherBumper woeid="455825"/>
        <WeatherBumper woeid="2490383"/>
        
      </div>
    );
  }
}

export default App;
