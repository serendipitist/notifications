import React, { Component } from "react";
import moment from "moment";

class NotificationSummary extends Component {
  constructor() {
    super();
  }
  render() {
    const data = this.props.data;
    const children = data.map((item) => <li key={item.type} className="notification-summary__item">
    <span className="total-messages">{item.count}</span>
    {item.type}
  </li>);
  
    return (
      <div className="notification-summary__container">
        <div className="notification-summary__content">
          <time className="notification-summary__time">{moment().format(" dddd MMM Do, YYYY")}</time>
        </div>
          <ul className="notification-summary__items">
            {children}
          </ul>
          <div className="notification-summary__myworkspace">My Workspace ></div>
      </div>
    )
  }
}
export default NotificationSummary;
