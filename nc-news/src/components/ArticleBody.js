import _ from 'underscore';

import React, { Component } from 'react';

import ArticleInfo from './ArticleInfo';
import Comment from './Comment';

import { fetchArticle, fetchComments, vote, addComment, deleteComment } from '../api';

class ArticleBody extends Component {
  state = {
    article: {},
    comments: [],
    loading: true,
    commentsVisible: this.props.location.search.includes('true')
  }

  componentDidMount() {
    const articleId = this.props.match.params.article_id;
    fetchArticle(articleId)
      .then(article => {
        const comments = fetchComments(articleId);
        return Promise.all([article, comments]);
      })
      .then(([article, comments]) => this.setState({
        article,
        comments,
        loading: false
      }));
  }

  render() {
    const { article, comments, loading, commentsVisible } = this.state;
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

          {commentsVisible && <div className="comments">
            <form onSubmit={this.handleComment}>
              <label>
                <textarea name='comment' placeholder='Add comment...' />
              </label>
              <input type='submit' value='Submit' />
            </form>

            {comments.map((comment, i) => (
              <Comment
                key={i}
                comment={comment}
                voting={this.voteComment}
                deleting={this.removeComment}
              />
            ))}
          </div>}
        </div>
    );
  }

  voteArticle = (type, id, voteOption) => {
    vote(type, id, voteOption)
      .then(newArticle => this.setState({ article: newArticle }));
  };

  voteComment = (type, id, voteOption) => {
    const data = this.state.comments;
    vote(type, id, voteOption, data)
      .then(newComments => this.setState({ comments: newComments }));
  };
  
  showComments = () => {
    this.setState({
      commentsVisible: !this.state.commentsVisible
    });
  }

  handleComment = event => {
    event.preventDefault();
    const newComment = event.target.elements.comment.value;
    if (!newComment.length) return;
    const articleId = this.state.article._id;
    const body = { comment: newComment };
    event.target.elements.comment.value = '';

    addComment(articleId, body)
      .then(([updatedArticle, comment]) => this.setState({
        article: updatedArticle,
        comments: this.state.comments.concat(comment)
      }));
  };

  removeComment = commentId => {
    const { comments } = this.state;
    const articleId = this.state.article._id;

    deleteComment(commentId, articleId)
      .then((updatedArticle) => {
        const updatedComments = _.reject(comments, (comment) => comment._id === commentId);
        return Promise.all([updatedArticle, updatedComments]);
      })
      .then(([updatedArticle, updatedComments]) => this.setState({
        article: updatedArticle,
        comments: updatedComments
      }));
  };
}

export default ArticleBody;