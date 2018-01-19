import React, { Component } from 'react';

import Article from './Article';
import { fetchUser, fetchArticles, vote } from '../api';

class UserProfile extends Component {
  state = {
    user: {},
    articles: []
  }

  componentDidMount() {
    const username = this.props.match.params.username;
    fetchUser(username)
      .then(user => this.setState({ user }))
      .then(() => fetchArticles('users', username))
      .then(({ articles }) => this.setState({ articles }))
  }

  render() {
    const user = this.state.user;
    return (
      <div className="columns">
        <div className="column is-one-fifth">
          <img src={user.avatar_url} />
        </div>
        <div className="column">
          <h1>{user.name}</h1>
          <h1>{user.username}</h1>
        </div>
        {this.state.articles.map((article, i) => (
          <Article
            article={article}
            key={i}
            voting={this.voteArticle}
          />
        ))}
      </div>
    )
  }

  voteArticle = (type, id, voteOption) => {
    const data = this.state.articles;
    vote(type, id, voteOption, data)
      .then(newArticles => this.setState({ articles: newArticles }))
  }

}

export default UserProfile;