import React, { Component } from 'react';

import ArticleInfo from './ArticleInfo';
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
    const { user } = this.state;
    return (
      <div>
        <div className="columns">
          <div className="column is-one-quarter">
            <img src={user.avatar_url} alt='User Avatar' />
          </div>
          
          <div className="column user">
            <h1><b>{user.name}</b></h1>
            <h1>{user.username}</h1>
          </div>
        </div>

        {this.state.articles.map((article, i) => (
          <ArticleInfo
            article={article}
            key={i}
            voting={this.voteArticle}
            navLink={true}
          />
        ))}
      </div>
    );
  }

  voteArticle = (type, id, voteOption) => {
    const data = this.state.articles;
    vote(type, id, voteOption, data)
      .then(newArticles => this.setState({ articles: newArticles }))
  };

};

export default UserProfile;