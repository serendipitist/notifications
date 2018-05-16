import React, { Component } from "react";
import moment from "moment";

class MessageBar extends Component {
  constructor() {
    super();
    this.state = {
      closeIcon: true
    }
    this.onClose = this.onClose.bind(this);
  }
  onClose() {
    this.setState({ closeIcon: false });
  }

  render() {
    return (
     <div className="message-bar">   
      {this.state.closeIcon && <article className="message-bar__content">
          <time className="message-bar__time">{moment().subtract(1, 'days').calendar()}</time>
          <i className='close' onClick={this.onClose}>+</i>
          <p className="message-bar__msg">Oliver has texted you about interview
          <span className="view-task">view task</span></p>
        </article>}
      </div>
    )
  }
}
export default MessageBar;
