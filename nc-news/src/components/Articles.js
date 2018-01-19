import React, { Component } from 'react';

import Article from './Article';

import { fetchArticles, vote } from '../api';

class Articles extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    fetchArticles()
      .then(({ articles }) => this.setState({ articles }));
  }

  render() {
    return (
      <div className="articles">
        {this.state.articles.map((article, i) => (
          <Article
            article={article}
            key={i}
            voting={this.voteArticle}
          />
        ))}
      </div>
    );
  }

  voteArticle = (type, id, voteOption) => {
    const data = this.state.articles;
    vote(type, id, voteOption, data)
      .then(newArticles => this.setState({ articles: newArticles }))
  }

}

export default Articles;