import React, { Component } from 'react';
import TrackedLink from './TrackedLink';
import './App.css';

class App extends Component {
  render() {
    const headshot = 'http://cacheflow.ca/img/db2014headshot.jpg';
    return (
      <div className="App">
        <div className="App-header">
          <img src={headshot} className="App-logo" alt="headshot" />
          <h3>Hello World, I'm Derek Braid</h3>
          <h3>I develop software with javascript, study biochemistry and behavioural finance.</h3>
        </div>
        <div className="App-body-content">
          <p>I write about:&nbsp;
          <TrackedLink
              href="https://github.com/DeBraid/medicine"
              text="medicine and plant-based nutrition"
            />
            ,&nbsp;
            <TrackedLink
              href="https://github.com/DeBraid/investing-notes"
              text="investing, taxes, and policy"
            />
            ,&nbsp;
            <TrackedLink
              href="https://github.com/DeBraid/bitcoin-notes"
              text="bitcoin and ethereum"
            />
            ,&nbsp;
            <TrackedLink
              href="https://github.com/DeBraid/tech-notes"
              text="software & computer science"
            />
            , and&nbsp;
            <TrackedLink
              href="https://twitter.com/Puck_Quant"
              text="hockey"
            />.
          </p>
          <p>Doing research on&nbsp;
            <TrackedLink
              href="https://github.com/DeBraid/ham-innov-essay"
              text="technology as catalyst"
            /> for regional economic development.  Book coming soon...</p>
        </div>
        <div className="App-body-content">
          <p>Contact me via:</p>
          <ul>
            <li>
              <TrackedLink
                href="https://twitter.com/@Royal_Arse"
                text="Twitter"
              />
            </li>
            <li>
              <TrackedLink
                href="https://www.linkedin.com/in/debraid/"
                text="LinkedIn"
              />
            </li>
            <li>
              <TrackedLink
                href="https://www.github.com/debraid"
                text="Github"
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
