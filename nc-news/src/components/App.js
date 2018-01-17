import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Topics from './Topics';
import AppContent from './AppContent';

import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="columns">
            <div className="column is-one-fifth" ></div>
            <div className="column" style={{ border: 'black 2px solid' }}>

              <h1>NC NEWS</h1>

              <Topics />

              <AppContent />

            </div>
            <div className="column is-one-fifth"></div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;