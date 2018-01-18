import React, { Component } from 'react';

import Article from './Article';
import Comments from './Comments';

class ArticleBody extends Component {
  state = {
    article: {},
    comments: []
  }

  componentDidMount() {
    const articleId = this.props.match.params.article_id
    this.fetechArticleAndComments(articleId);
  }

  render() {
    const { article, comments } = this.state;
    article['comments'] = comments.length;

    return (
      <div className="article">
        <Article article={article} />
        <p style={{ border: 'green solid 2px' }}>{article.body}</p>
        <Comments comments={comments}/>
      </div>
    );
  }

  fetechArticleAndComments = (articleId) => {
    return fetch(`https://northcoders-news-api.herokuapp.com/api/articles/${articleId}`)
      .then(buffer => buffer.json())
      .then(article => this.setState({ article }))
      .then(() => fetch(`https://northcoders-news-api.herokuapp.com/api/articles/${articleId}/comments`))
      .then(buffer => buffer.json())
      .then(({ comments }) => this.setState({ comments }))
  }

}

export default ArticleBody;