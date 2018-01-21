import React from 'react';
import { NavLink } from 'react-router-dom';

import Votes from './Votes';

const Comment = ({ comment, voting, deleting }) => {
  return (
    <div className="columns" style={{ border: 'red solid 2px' }}>
      <div className="column">
        <p>{comment.body}</p>
        <p>added by <NavLink to={`/users/${comment.created_by}`}>{comment.created_by}</NavLink> at {comment.created_at}</p>
      </div>
      <div className="column is-one-fifth">
        <Votes
          votesNum={comment.votes}
          voting={voting}
          type='comments'
          id={comment._id}
        />
        {comment.created_by === 'northcoder' ? <button onClick={() => deleting(comment._id)}>DELETE</button> : <p></p>
        }
      </div>
    </div>
  )
}

export default Comment;