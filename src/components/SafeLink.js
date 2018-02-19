import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SafeLink extends Component {
  onClick(event) {
    if (this.props.to === this.props.history.location.pathname) {
      event.preventDefault();
    }

    // if onClick method as props -> call it
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const { children, onClick, ...other } = this.props;
    return <Link onClick={this.onClick.bind(this)} {...other}>{children}</Link>
  }
}

export default SafeLink;