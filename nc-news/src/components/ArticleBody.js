import React, { Component } from 'react';

import Article from './Article';
import Comments from './Comments';

import { fetechArticle, fetechComments, vote } from '../api';

class ArticleBody extends Component {
  state = {
    article: {},
    comments: []
  }

  componentDidMount() {
    const articleId = this.props.match.params.article_id;
    fetechArticle(articleId)
      .then(article => this.setState({ article }))
      .then(() => fetechComments(articleId))
      .then(({ comments }) => this.setState({ comments }))
  }

  render() {
    const { article, comments } = this.state;
    return (
      <div className="article">
        <Article
          article={article}
          voting={this.voteArticle}
        />
        <p style={{ border: 'green solid 2px' }}>{article.body}</p>
        <Comments
          comments={comments}
          voting={this.voteComment}
        />
      </div>
    );
  }

  voteArticle = (type, id, voteOption) => {
    vote(type, id, voteOption)
      .then(newArticle => this.setState({ article: newArticle }))
  }

  voteComment = (type, id, voteOption) => {
    const data = this.state.comments;
    vote(type, id, voteOption, data)
      .then(newComments => this.setState({ comments: newComments }))
  }

}

export default ArticleBody;