import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Votes from './Votes';

import { fetechComments, vote, addComment } from '../api';

class Comments extends Component {
  state = {
    comments: [],
    newComment: ''
  }

  componentDidMount() {
    const articleId = this.props.articleId;
    fetechComments(articleId)
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

        {comments.map((comment, i) => {
          return (
            <div className="columns" style={{ border: 'red solid 2px' }} key={i}>
              <div className="column">
                <p>{comment.body}</p>
                <p>added by <NavLink to={`/users/${comment.created_by}`}>{comment.created_by}</NavLink> at {comment.created_at}</p>
              </div>
              <div className="column is-one-fifth">
                <Votes
                  votesNum={comment.votes}
                  voting={this.voting}
                  type='comments'
                  id={comment._id}
                />
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  voteComment = (type, id, voteOption) => {
    const data = this.state.comments;
    vote(type, id, voteOption, data)
      .then(newComments => this.setState({ comments: newComments }));
  }

  handleComment = (event) => {
    event.preventDefault();

    const newComment = event.target.elements.comment.value;
    if (newComment.length === 0) return;

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

}

export default Comments;