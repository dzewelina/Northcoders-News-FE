import React from 'react';
import { NavLink } from 'react-router-dom';

import Votes from './Votes';

const ArticleInfo = ({ article, voting, showComments }) => {
  return (
    <div className="columns article">
      <div className="column is-one-fifth">
        <Votes
          votesNum={article.votes}
          voting={voting}
          type='articles'
          id={article._id}
        />
      </div>
      <div className="column">
        <h1 className="articleTitle">
          <NavLink to={`/articles/${article._id}?comments=false`}>{article.title}</NavLink>
        </h1>
        <p>
          added by
          <NavLink to={`/users/${article.created_by}`}> {article.created_by} </NavLink>
          to
          <NavLink to={`/topics/${article.belongs_to}`}> {article.belongs_to}</NavLink>
        </p>
        <p>
          <NavLink onClick={showComments} to={`/articles/${article._id}?comments=true`}>{article.comments} comments</NavLink>
        </p>
      </div>
    </div>
  );
}

export default ArticleInfo;