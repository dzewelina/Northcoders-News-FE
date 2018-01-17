import React from 'react';

import Article from './Article';

const ArticleBody = ({ routeProps, articles }) => {
  const article_id = routeProps.match.params.article_id;
  const article = articles.find(article => article._id === article_id);

  return (
    <div>
      {article ? 
        <div>
          <Article article={article}/>
          <div>{article.body}</div>
        </div>         
        : <img src="https://media1.tenor.com/images/8ac12962c05648c55ca85771f4a69b2d/tenor.gif?itemid=9212724" alt="Loading..." />}
      
    </div>
  )
}

export default ArticleBody;