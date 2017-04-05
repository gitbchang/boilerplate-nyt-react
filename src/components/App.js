import React, { Component } from 'react';
import Searchbar from './Search-bar';
import Resultsarea from './Results-area';
// import logo from '../logo.svg';
// import '../css/App.css';
// eslint-disable-next-line 
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  render() {
    return (
      <div className='wrapperAll'>
        <div className='container'>
          <Jumbotron>
              <h1>New York Times Article Scrubber</h1>
              <p>Search and Annotate articles of interest!</p>
          </Jumbotron>
        </div>

        <div className='container'>
          <Searchbar />
          <Resultsarea />
        </div>

        <Navbar fixedBottom={true}>
          <div className='container'>
            <h6 className='text-muted text-center'>Bchang 2016</h6>
          </div>
        </Navbar>
      </div>

      /*<div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/
    );
  }
}

export default App;
