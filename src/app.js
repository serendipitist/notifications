import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import NotificationSummary from "./components/notification_summary";
import MessageBar from "./components/messagebar";
import Notification from "./components/notification";

class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:4001",
      
      ///
      color: 'mef',
      active: true,
      
    };
    this.handleChange = this.handleChange.bind(this);
    this. handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    this.setState({color: event.target.color});
  }
  
  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }

  // sending sockets
  send() {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('change color', this.state.color) // change 'red' to this.state.color
  }

  // ///
  
  // // adding the function
setColor(color){
    this.setState({ color })
  }  
  
  ///

  render() {
    // testing for socket connections
    const socket = socketIOClient(this.state.endpoint);
    socket.on('change color', (col) => {
      console.log(col);
    })

    return (
     
      <div>
        <div className="header">
          <a href="#default" class="logo">Notification Demo</a>
          <div className="header-right">
             <button className="notification-icon" onClick={this.handleClick}>&#x1f514;</button>
          </div>
         </div>
         {this.state.active && <Notification/>}
      </div>
    )
  }
}
export default App;
