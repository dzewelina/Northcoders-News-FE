import React from 'react';

const Votes = ({ votesNum, onDownVote, onUpVote }) => (
  <div>
    <button className="icon" onClick={onDownVote}>
      <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
    </button>
    <span>{votesNum}</span>
    <button className="icon" onClick={onUpVote}>
      <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
    </button>
  </div>
);

export default Votes;