import React from 'react';
import { Link } from 'react-router-dom';

import Votes from './Votes';

const ArticleInfo = ({ article, voting, showComments, navLink }) => {
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
          <Link to={`/articles/${article._id}?comments=false`}>{article.title}</Link>
        </h1>
        <p>
          added by
          <Link to={`/users/${article.created_by}`}> {article.created_by} </Link>
          to
          <Link to={`/topics/${article.belongs_to}`}> {article.belongs_to}</Link>
        </p>
          {navLink ? <Link to={`/articles/${article._id}?comments=true`}>{article.comments} comments</Link> : <p onClick={showComments}>{article.comments} comments</p>}
      </div>
    </div>
  );
}

export default ArticleInfo;