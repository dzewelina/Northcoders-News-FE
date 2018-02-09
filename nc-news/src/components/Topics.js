import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { fetchTopics } from '../api';

class Topics extends Component {
  state = {
    topics: []
  }

  componentDidMount() {
    fetchTopics()
      .then(({ topics }) => this.setState({ topics }));
  }

  render() {
    const { topics } = this.state;
    return (
      <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
        <ul>
          {topics.map((topic, i) => (
            <li key={i}>
              <NavLink to={`/topics/${topic.slug}`}>{topic.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

}

export default Topics;