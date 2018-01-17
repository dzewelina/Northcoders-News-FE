import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Articles from './Articles';

class AppContent extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    this.fetchArticles();
  }

  render() {
    return (
      <Switch>
        <Route
          exact path='/'
          render={() => (
            <Articles articles={this.state.articles} />
          )}
        />
      </Switch>
    );
  }

  fetchArticles = () => {
    return fetch(`https://northcoders-news-api.herokuapp.com/api/articles`)
      .then(buffer => buffer.json())
      .then(({ articles }) => this.setState({ articles }))
  }
}

export default AppContent;