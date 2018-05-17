import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import Notification from "./components/notification";

class NotifyApp extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:4001",
      usrMsg: '',
      active: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({usrMsg: event.target.value});
  }

  // sending sockets
  send() {
    const socket = socketIOClient(this.state.endpoint);
     socket.emit('Message Sent', this.state.usrMsg) 
  }

  render() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on('Message Sent', (usrMsg) => {
      this.setState({usrMsg: usrMsg}); //where message sent to other clients
    })

    return (
      <div>
        <div className="header">
          <a href="#">Notification Demo</a>
          <div className="header-right">
             <button className="notification-icon" onClick={this.handleClick}>&#x1f514;</button>
          </div>
         </div>
         {this.state.active && <Notification messages={this.state.usrMsg}/>}
        <form  className="user-input-form" onSubmit={this.handleSubmit}>
          <label>Type your notification message </label>
          <textarea type="text" value={this.state.usrMsg} onChange={this.handleChange} />
          <input type="submit" value="Submit" onClick={() => this.send()} />
       </form> 
      </div>
    )
  }
}
export default NotifyApp;
