import React from 'react';
import { NavLink } from 'react-router-dom';


import Votes from './Votes';

const Article = ({ article }) => (
  <div className="columns">
    <div className="column is-one-fifth">
      <Votes votesNum={article.votes} />
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

export default Article;