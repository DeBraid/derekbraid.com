import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const headshot = 'http://cacheflow.ca/img/db2014headshot.jpg';
    return (
      <div className="App">
        <div className="App-header">
          <img src={headshot} className="App-logo" alt="headshot" />
          <h2>Hello World</h2>
          <h2>I'm Derek Braid a software developer from Toronto</h2>
        </div>
        <p>Visit <a href="http://cacheflow.ca">cacheflow.ca</a> for my mission and CV.</p>
        <p>I write about:&nbsp;
          <a href="https://github.com/DeBraid/investing-notes">
            investing, taxes, and policy
          </a>,&nbsp;
          <a href="https://github.com/DeBraid/bitcoin-notes" target="_blank">
            bitcoin and ethereum
          </a>,&nbsp;
          <a href="https://github.com/DeBraid/tech-notes" target="_blank">
            software and compsci
          </a>, and&nbsp;
          <a href="https://twitter.com/Puck_Quant" target="_blank">
            hockey
          </a>.
        </p>
        <p>Contact me on Twitter <a href="https://twitter.com/@Royal_Arse">@Royal_Arse</a></p>
      </div>
    );
  }
}

export default App;
