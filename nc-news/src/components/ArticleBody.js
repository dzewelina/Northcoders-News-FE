import React, { Component } from 'react';

import ArticleInfo from './ArticleInfo';
import Comments from './Comments';

import { fetchArticle, vote } from '../api';

class ArticleBody extends Component {
  state = {
    article: {},
    comments: this.props.location.search.match(/=(\w+)/)[1] === 'true',
    loading: true
  }

  componentDidMount() {
    const articleId = this.props.match.params.article_id;
    fetchArticle(articleId)
      .then(article => this.setState({ article, loading: false }))
  }

  componentWillReceiveProps(newProps) {
    const oldQuery = this.props.location.search.match(/=(\w+)/)[1];
    const newQuery = newProps.location.search.match(/=(\w+)/)[1];

    if (newQuery !== oldQuery) this.showComments();
  }

  render() {
    const { article, comments, loading } = this.state;
    return (
      loading
        ? <img src='https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif' alt='Loading...' />
        : <div className="article">
          <ArticleInfo
            article={article}
            voting={this.voteArticle}
            showComments={this.showComments}
          />
          <p>{article.body}</p>
          {comments ? <Comments articleId={article._id} /> : <div></div>}
        </div>
    );
  }

  voteArticle = (type, id, voteOption) => {
    vote(type, id, voteOption)
      .then(newArticle => this.setState({ article: newArticle }))
  }

  showComments = () => {
    this.setState({
      comments: !this.state.comments
    })
  }

}

export default ArticleBody;