import React, { Component } from "react";
import moment from "moment";

class MessageBar extends Component {
  constructor() {
    super();
    this.state = {
      closeIcon: false
    }
  }
  onClick() {
    this.setState({ closeIcon: false })
  }
  render() {
    return (
      <div className="message-bar">
      <article className="message-bar__contnet">
        <time className="message-bar__time"></time>
        <i className='close' onClick={() => onClose()}>+</i>
        <p className="message-bar__msg"></p>
        <span>view task</span>
      </article>      
      </div>
    )
  }
}
export default MessageBar;
