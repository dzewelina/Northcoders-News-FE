import React from 'react';
import { NavLink } from 'react-router-dom';


import Votes from './Votes';

const Article = ({ article, votingFunction }) => {
  const onDownVote = votingFunction.bind(null, article._id, 'down');
  const onUpVote = votingFunction.bind(null, article._id, 'up');
  return (
    <div className="columns">
      <div className="column is-one-fifth">
        <Votes
          votesNum={article.votes}
          onDownVote={onDownVote}
          onUpVote={onUpVote}
        />
      </div>
      <div className="column">
        <h1>
          <NavLink to={`/articles/${article._id}`}>{article.title}</NavLink>
        </h1>
        <p>added by {article.created_by} to {article.belongs_to}</p>
        <p>{article.comments} comments</p>
      </div>
    </div>
  );
}

export default Article;