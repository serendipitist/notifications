import React, { Component } from "react";
import moment from "moment";

class NotificationSummary extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="notification-summary__container">
        <div className="notification-summary__content">
          <time className="notification-summary__time">{moment().format(" dddd MMM Do, YYYY")}</time>
        </div>
          <ul className="notification-summary__items">
            <li className="notification-summary__item"><span className="total-messages">2</span>Message</li>
          </ul>
          <div className="notification-summary__myworkspace">My Workspace</div>
      </div>
    )
  }
}
export default NotificationSummary;
