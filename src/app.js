import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import Header from "./components/header";
import NotificationSummary from "./components/notification_summary";
import MessageBar from "./components/messagebar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:4001",
      
      ///
      color: 'mef'
      ///
      
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({color: event.target.color});
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
     
      <div style={{ textAlign: "center" }}>
        <Header />
        <NotificationSummary/>
        <MessageBar />
      </div>
    )
  }
}
export default App;
