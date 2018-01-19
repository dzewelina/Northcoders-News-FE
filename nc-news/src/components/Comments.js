import React from 'react';

import Votes from './Votes';

const Comments = ({ comments, votingFunction }) => (
  <div className="comments">
    {comments.map((comment, i) => {
      const onDownVote = votingFunction.bind(null, comment._id, 'down');
      const onUpVote = votingFunction.bind(null, comment._id, 'up');
      return (
        <div className="columns" style={{ border: 'red solid 2px' }} key={i}>
          <div className="column">
            <p>{comment.body}</p>
            <p>added by {comment.created_by} at {comment.created_at}</p>
          </div>
          <div className="column is-one-fifth">
            <Votes
              votesNum={comment.votes}
              onDownVote={onDownVote}
              onUpVote={onUpVote}
            />
          </div>
        </div>
      )
    })}
  </div>
);

export default Comments;