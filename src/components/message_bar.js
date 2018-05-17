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
  onClose(event) {
    event.preventDefault();
    this.setState(prevState => ({
      closeIcon : !prevState.closeIcon
    }));
   
  }

  render() {
    const {messages , newMessages} = this.props;
    if(newMessages.length > 0) {
      messages.unshift({"time": Math.round(new Date().getTime()/1000), message : newMessages});
    }
    const messageBody = messages.map((item) =>
     <div className="message-bar__content"  key={item.message}>
        <time className="message-bar__time">{moment.unix(item.time).calendar()}</time>
        <i className='close' onClick={this.onClose}>+</i>
        {this.state.closeIcon && <p className="message-bar__msg">{item.message}
        <span className="view-task">view task ></span></p>}
    </div>
  );
    return (
     <div className="message-bar">   
        <article >
          {messageBody}
        </article>
      </div>
    )
  }
}
export default MessageBar;
