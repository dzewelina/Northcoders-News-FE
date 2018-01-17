import React, { Component } from 'react';

import Topics from './Topics';
import Articles from './Articles';

import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="columns">
          <div className="column is-one-fifth" ></div>
          <div className="column" style={{ border: 'black 2px solid' }}>

            <h1>NC NEWS</h1>

            <Topics />

            <Articles />

          </div>
          <div className="column is-one-fifth"></div>
        </div>
      </div>
    );
  }
}

export default App;