import React, { Component } from 'react';

import Article from './Article';

class ArticlesByTopic extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    const { topic } = this.props.match.params;
    this.fetchArticles(topic);
  }

  componentWillReceiveProps(newProps) {
    const oldTopic = this.props.match.params.topic;
    const newTopic = newProps.match.params.topic;

    if (newTopic !== oldTopic) this.fetchArticles(newTopic);
  }

  render() {
    return (
      <div className="articles">
        {this.state.articles.map((article, i) => (
          <Article
            article={article}
            key={i}
            votingFunction={this.votingFunction}
          />
        ))}
      </div>
    );
  }

  fetchArticles = (topic) => {
    return fetch(`https://northcoders-news-api.herokuapp.com/api/topics/${topic}/articles`)
      .then(buffer => buffer.json())
      .then(({ articles }) => this.setState({ articles }))
  }

  votingFunction = (articleId, vote) => {
    return fetch(`https://northcoders-news-api.herokuapp.com/api/articles/${articleId}?vote=${vote}`, { method: 'PUT' })
      .then(buffer => buffer.json())
      .then(newArticle => {
        const newArticles = this.state.articles.map(article => {
          if (article._id === newArticle._id) return newArticle;
          return article;
        })
        this.setState({ articles: newArticles })
      })
  }

}

export default ArticlesByTopic;