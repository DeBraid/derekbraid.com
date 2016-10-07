import React, { Component } from 'react';
import LogLinkClick from './LogLinkClick';

class TrackedLink extends Component {
  handleClick(event){
    LogLinkClick(event.target);
  }
  render() {
    let { href, text } = this.props;
    return (
      <a href={href} onClick={this.handleClick}>
        {text}
      </a>
    );
  }
}

export default TrackedLink;
