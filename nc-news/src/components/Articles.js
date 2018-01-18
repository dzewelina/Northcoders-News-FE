import React, { Component } from 'react';

import Article from './Article';

class Articles extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    this.fetchArticles();
  }

  render() {
    return (
      <div className="articles">
        {this.state.articles.map((article, i) => (
          <Article article={article} key={i} />
        ))}
      </div>
    );
  }

  fetchArticles = () => {
    return fetch(`https://northcoders-news-api.herokuapp.com/api/articles`)
      .then(buffer => buffer.json())
      .then(({ articles }) => this.setState({ articles }))
  }

}

export default Articles;