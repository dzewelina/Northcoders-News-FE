import React, { Component } from 'react';

import Article from './Article';
import Comments from './Comments';

class ArticleBody extends Component {
  state = {
    article: {},
    comments: []
  }

  componentDidMount() {
    const articleId = this.props.match.params.article_id;
    this.fetechArticleAndComments(articleId);
  }

  render() {
    const { article, comments } = this.state;
    return (
      <div className="article">
        <Article
          article={article}
          votingFunction={this.votingFunction}
        />
        <p style={{ border: 'green solid 2px' }}>{article.body}</p>
        <Comments
          comments={comments}
          votingFunction={this.votingFunction2}
        />
      </div>
    );
  }

  fetechArticleAndComments = (articleId) => {
    return fetch(`https://northcoders-news-api.herokuapp.com/api/articles/${articleId}`)
      .then(buffer => buffer.json())
      .then(article => this.setState({ article }))
      .then(() => fetch(`https://northcoders-news-api.herokuapp.com/api/articles/${articleId}/comments`))
      .then(buffer => buffer.json())
      .then(({ comments }) => this.setState({ comments }))
  }

  votingFunction = (articleId, vote) => {
    return fetch(`https://northcoders-news-api.herokuapp.com/api/articles/${articleId}?vote=${vote}`, { method: 'PUT' })
      .then(buffer => buffer.json())
      .then(newArticle => this.setState({ article: newArticle })
      )
  }

  votingFunction2 = (commentId, vote) => {
    return fetch(`https://northcoders-news-api.herokuapp.com/api/comments/${commentId}?vote=${vote}`, { method: 'PUT' })
      .then(buffer => buffer.json())
      .then(newComment => {
        const newComments = this.state.comments.map(comment => {
          if (comment._id === newComment._id) return newComment;
          return comment;
        })
        this.setState({ comments: newComments })
      })
  }

}

export default ArticleBody;