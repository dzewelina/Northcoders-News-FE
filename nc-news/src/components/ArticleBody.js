import React, { Component } from 'react';

import Article from './Article';
import Comments from './Comments';

import { fetechArticle, vote } from '../api';

class ArticleBody extends Component {
  state = {
    article: {},
    comments: this.props.location.search.match(/=(\w+)/)[1] === 'true',
    loading: true
  }

  componentDidMount() {
    const articleId = this.props.match.params.article_id;
    fetechArticle(articleId)
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
          <Article
            article={article}
            voting={this.voteArticle}
            showComments={this.showComments}
          />
          <p style={{ border: 'green solid 2px' }}>{article.body}</p>
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