import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const headshot = 'http://cacheflow.ca/img/db2014headshot.jpg';
    return (
      <div className="App">
        <div className="App-header">
          <img src={headshot} className="App-logo" alt="headshot" />
          <h2>Hello World, I'm Derek Braid.</h2>
        </div>
        <p>My current homepage is found at <a href="http://cacheflow.ca">cacheflow.ca</a></p>
        <p>Contact me on Twitter <a href="https://twitter.com/@Royal_Arse">@Royal_Arse</a></p>
      </div>
    );
  }
}

export default App;
