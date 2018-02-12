import React from 'react';

import SafeLink from './SafeLink';

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
          <SafeLink to={`/articles/${article._id}?comments=false`}>{article.title}</SafeLink>
        </h1>
        <p>
          added by
          <SafeLink to={`/users/${article.created_by}`}> {article.created_by} </SafeLink>
          to
          <SafeLink to={`/topics/${article.belongs_to}`}> {article.belongs_to}</SafeLink>
        </p>
          {navLink ? <SafeLink to={`/articles/${article._id}?comments=true`}>{article.comments} comments</SafeLink> : <p onClick={showComments}>{article.comments} comments</p>}
      </div>
    </div>
  );
}

export default ArticleInfo;