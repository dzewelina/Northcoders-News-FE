import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Topics from './Topics';
import Articles from './Articles';
import ArticleBody from './ArticleBody';
import ArticlesByTopic from './ArticlesByTopic';

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

              <Route exact path='/' component={Articles} />

              <Route exact path='/articles/:article_id' component={ArticleBody} />

              <Route exact path='/topics/:topic' component={ArticlesByTopic} />

            </div>
            <div className="column is-one-fifth"></div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;