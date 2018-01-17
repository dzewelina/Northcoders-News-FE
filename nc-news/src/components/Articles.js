import React, { Component } from 'react';

class Articles extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    this.fetchArticles();
  }

  render() {
    return (
      <div className="articles">
        {this.state.articles.map((article, i) => (
          <div key={i} className="columns">
            <div className="column is-one-fifth">{article.votes}</div>
            <div className="column">
              <h1>{article.title}</h1>
              <p>added by {article.created_by} to {article.belongs_to}</p>
              <p>{article.comments} comments</p>
            </div>
          </div>
        ))
        }
      </div >
    )
  }

  fetchArticles = () => {
    return fetch(`https://northcoders-news-api.herokuapp.com/api/articles`)
      .then(buffer => buffer.json())
      .then(({ articles }) => this.setState({ articles }))
  }
}

export default Articles;