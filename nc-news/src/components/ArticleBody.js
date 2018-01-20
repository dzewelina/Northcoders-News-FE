import React, { Component } from 'react';

import Article from './Article';
import Comments from './Comments';

import { fetechArticle, vote } from '../api';

class ArticleBody extends Component {
  state = {
    article: {},
    loading: true
  }

  componentDidMount() {
    const articleId = this.props.match.params.article_id;
    fetechArticle(articleId)
      .then(article => this.setState({ article, loading: false }))
  }

  render() {
    const { article, loading } = this.state;
    return (
      loading
        ? <img src='https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif' alt='Loading...' />
        : <div className="article">
          <Article
            article={article}
            voting={this.voteArticle}
          />
          <p style={{ border: 'green solid 2px' }}>{article.body}</p>
          <Comments articleId={article._id} />
        </div>
    );
  }

  voteArticle = (type, id, voteOption) => {
    vote(type, id, voteOption)
      .then(newArticle => this.setState({ article: newArticle }))
  }

}

export default ArticleBody;