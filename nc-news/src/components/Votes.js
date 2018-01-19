import React from 'react';

const Votes = ({ votesNum, voting, type, id }) => {
  return (
    <div>
      <button className="icon" onClick={() => voting(type, id, 'down')}>
        <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
      </button>
      <span>{votesNum}</span>
      {<button className="icon" onClick={() => voting(type, id, 'up')}>
        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
      </button>}
    </div>
  )
};

export default Votes;