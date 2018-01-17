import React from 'react';

const Votes = ({ votesNum }) => (
  <div>
    <span className="icon">
      <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
    </span>
    <span>{votesNum}</span>
    <span className="icon">
      <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
    </span>
  </div>
);

export default Votes;