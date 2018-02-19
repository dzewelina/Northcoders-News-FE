import React from 'react';

const Votes = ({ votesNum, voting, type, id }) => {
  return (
    <div className="votes">
      <button className="icon" onClick={() => voting(type, id, 'down')} style={{display: 'block'}}>
        <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
      </button>

      <div>{votesNum}</div>
      
      {<button className="icon" onClick={() => voting(type, id, 'up')} style={{display: 'block'}}>
        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
      </button>}
    </div>
  )
};

export default Votes;