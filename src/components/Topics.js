import React, { Component } from 'react';

import SafeLink from './SafeLink';
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
      <ul className="topics">
        {topics.map((topic, i) => (
          <li key={i}>
            <SafeLink to={`/topics/${topic.slug}`}>{topic.title}</SafeLink>
          </li>
        ))}
      </ul>
    )
  }

}

export default Topics;