import React from 'react';

const Article = ({ article }) => (
  <div className="columns">
    <div className="column is-one-fifth">{article.votes}</div>
    <div className="column">
      <h1>{article.title}</h1>
      <p>added by {article.created_by} to {article.belongs_to}</p>
      <p>{article.comments} comments</p>
    </div>
  </div>
);

export default Article;