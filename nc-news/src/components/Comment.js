import moment from 'moment';

import React from 'react';

import SafeLink from './SafeLink';
import Votes from './Votes';

const Comment = ({ comment, voting, deleting }) => {
  return (
    <div className="columns">
      <div className="column">
        <p>{comment.body}</p>
        <p>
          added {moment(comment.created_at).fromNow()} by
          <SafeLink to={`/users/${comment.created_by}`}> {comment.created_by}</SafeLink>
        </p>
      </div>
      <div className="column is-one-fifth">
        <Votes
          votesNum={comment.votes}
          voting={voting}
          type='comments'
          id={comment._id}
        />
        {comment.created_by === 'northcoder' && <button onClick={() => deleting(comment._id)}>DELETE</button>}
      </div>
    </div>
  )
}

export default Comment;