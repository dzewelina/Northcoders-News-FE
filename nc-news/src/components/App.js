import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import SafeLink from './SafeLink';
import Topics from './Topics';
import Articles from './Articles';
import ArticleBody from './ArticleBody';
import ArticlesByTopic from './ArticlesByTopic';
import UserProfile from './UserProfile';

import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="columns">
            <div className="column is-one-fifth" ></div>
            <div className="column">

              <header>
                <SafeLink to={'/'}>NC NEWS</SafeLink>
              </header>

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