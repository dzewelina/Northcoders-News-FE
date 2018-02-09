import _ from 'underscore';

import React, { Component } from 'react';

import Comment from './Comment';

import { fetchComments, vote, addComment, deleteComment } from '../api';

class Comments extends Component {
  state = {
    comments: [],
    newComment: ''
  }

  componentDidMount() {
    const articleId = this.props.articleId;
    fetchComments(articleId)
      .then(({ comments }) => this.setState({ comments }))
  }

  render() {
    const { comments } = this.state;
    return (
      <div className="comments">
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
      </div>
    )
  }

  voteComment = (type, id, voteOption) => {
    const data = this.state.comments;
    vote(type, id, voteOption, data)
      .then(newComments => this.setState({ comments: newComments }));
  }

  handleComment = event => {
    event.preventDefault();

    const newComment = event.target.elements.comment.value;
    if (!newComment.length) return;

    const articleId = this.props.articleId;
    const body = { comment: newComment };

    event.target.elements.comment.value = '';

    addComment(articleId, body)
      .then(res => {
        this.setState({
          comments: this.state.comments.concat(res.comment)
        })
      })
  }

  removeComment = commentId => {
    const { comments } = this.state
    deleteComment(commentId)
      .then(() => {
        const updatedComments = _.reject(comments, (comment) => comment._id === commentId);

        this.setState({ comments: updatedComments })
      })
  }



}

export default Comments;