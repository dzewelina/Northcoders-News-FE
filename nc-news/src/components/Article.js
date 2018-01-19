import React from 'react';
import { NavLink } from 'react-router-dom';

import Votes from './Votes';

const Article = ({ article, voting }) => {
  return (
    <div className="columns">
      <div className="column is-one-fifth">
        <Votes
          votesNum={article.votes}
          voting={voting}
          type='articles'
          id={article._id}
        />
      </div>
      <div className="column">
        <h1>
          <NavLink to={`/articles/${article._id}`}>{article.title}</NavLink>
        </h1>
        <p>
          added by <NavLink to={`/users/${article.created_by}`}>{article.created_by}</NavLink> to <NavLink to={`/topics/${article.belongs_to}`}>{article.belongs_to}</NavLink>
        </p>
        <p>{article.comments} comments</p>
      </div>
    </div>
  );
}

export default Article;