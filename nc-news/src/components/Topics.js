import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Topics extends Component {
  state = {
    topics: []
  }

  componentDidMount() {
    this.fetchTopics();
  }

  render() {
    const { topics } = this.state;
    return (
      <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
        <ul>
          {/* <li className="is-active"><a href="#" aria-current="page">All</a></li> */}
          {topics.map((topic, i) => (
            <li key={i}>
              <NavLink to={`/topics/${topic.slug}`}>{topic.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  fetchTopics = () => {
    return fetch(`https://northcoders-news-api.herokuapp.com/api/topics`)
      .then(buffer => buffer.json())
      .then(({ topics }) => this.setState({ topics }))
  }
}

export default Topics;