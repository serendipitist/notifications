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
  setColor(usrMsg){
    this.setState({ usrMsg })
  }

  // sending sockets
  send() {
    const socket = socketIOClient(this.state.endpoint);
    sockets.emit('Message recieved', "blue")
  }

  render() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on('Message recieved', (usrMsg) => {
      console.log("here Socket");
      document.body.style.backgroundColor = usrMsg;
    })

    return (
      <div>
        <div className="header">
          <a href="#">Notification Demo</a>
          <div className="header-right">
             <button className="notification-icon" onClick={this.handleClick}>&#x1f514;</button>
          </div>
         </div>
         {this.state.active && <Notification message={this.state.usrMsg}/>}
        <form  className="user-input-form" onSubmit={this.handleSubmit}>
          <label>Type your notification message </label>
          <textarea type="text" value={this.state.usrMsg} onChange={this.handleChange} />
          <input type="submit" value="Submit" onClick={() => this.send()} />
       </form> 
       <button onClick={() => this.send() }>Change Color</button>
<button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
<button id="red" onClick={() => this.setColor('red')}>Red</button>

      </div>
    )
  }
}
export default NotifyApp;
