import React, { Component } from 'react';

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

            <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
              <ul>
                <li className="is-active"><a href="#" aria-current="page">All</a></li>
                <li><a href="#">Coding</a></li>        
                <li><a href="#">Football</a></li>
                <li><a href="#">Cooking</a></li>
              </ul>
            </nav>

            <Articles />

          </div>
          <div className="column is-one-fifth"></div>
        </div>
      </div>
    );
  }
}

export default App;