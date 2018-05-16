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
    const messages = this.props.messages;
    const messageBody = messages.map((item) =>
    <article className="message-bar__content" key={item.message}>
        <time className="message-bar__time">{moment.unix(item.time).calendar()}</time>
        <i className='close' onClick={this.onClose}>+</i>
        <p className="message-bar__msg">{item.message}
        <span className="view-task">view task ></span></p>
    </article>
  );
    return (
     <div className="message-bar">   
        {messageBody}
      </div>
    )
  }
}
export default MessageBar;
