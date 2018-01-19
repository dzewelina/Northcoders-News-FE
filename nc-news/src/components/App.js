import React, { Component } from 'react';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';

import Topics from './Topics';
import Articles from './Articles';
import ArticleBody from './ArticleBody';
import ArticlesByTopic from './ArticlesByTopic';
import UserProfile from './UserProfile';

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

              <h1>
                <NavLink to={'/'}>NC NEWS</NavLink>
              </h1>

              <Topics />

              <Route exact path='/' component={Articles} />

              <Route exact path='/articles/:article_id' component={ArticleBody} />

              <Route exact path='/topics/:topic' component={ArticlesByTopic} />

              <Route exact path='/users/:username' component={UserProfile} />

            </div>
            <div className="column is-one-fifth"></div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;