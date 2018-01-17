import React, { Component } from 'react';

class Topics extends Component {
  state = {
    topics: []
  }

  componentDidMount() {
    this.fetchTopics();
  }

  render() {
    return (
      <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
        <ul>
          <li className="is-active"><a href="#" aria-current="page">All</a></li>
          {this.state.topics.map((topic, i) => (
            <li key={i}><a href="#">{topic.title}</a></li>
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