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
        <div className="App-body">
          <p>Visit&nbsp; 
            <TrackedLink 
              href="http://cacheflow.ca"
              text="cacheflow.ca"
            />
            &nbsp;for my mission and CV.
          </p>
          <p>I write about:&nbsp;
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
          <p>Contact me via Twitter&nbsp; 
            <TrackedLink 
              href="https://twitter.com/@Royal_Arse"
              text="@Royal_Arse" 
            />
          </p>
        </div>
      </div>
    );
  }
}

export default App;
