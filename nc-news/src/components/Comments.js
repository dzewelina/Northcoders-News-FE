import React from 'react';

import Votes from './Votes';

const Comments = ({ comments }) => (
  <div className="comments">
    {comments.map((comment, i) => (
      <div className="columns" style={{ border: 'red solid 2px' }} key={i}>
        <div className="column">
          <p>{comment.body}</p>
          <p>added by {comment.created_by} at {comment.created_at}</p>
        </div>
        <div className="column is-one-fifth">
          <Votes votesNum={comment.votes}/>
        </div>
      </div>
    ))}
  </div>
);

export default Comments;