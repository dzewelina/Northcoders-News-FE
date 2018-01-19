import React, { Component } from 'react';

import Article from './Article';

import { fetchArticles, vote } from '../api';

class ArticlesByTopic extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    const { topic } = this.props.match.params;
    this.fetchArticlesByTopic('topics', topic);
  }

  componentWillReceiveProps(newProps) {
    const oldTopic = this.props.match.params.topic;
    const newTopic = newProps.match.params.topic;

    if (newTopic !== oldTopic) this.fetchArticlesByTopic('topics', newTopic);
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

  fetchArticlesByTopic = (type, param) => {
    fetchArticles(type, param)
      .then(({ articles }) => this.setState({ articles }));
  }

}

export default ArticlesByTopic;