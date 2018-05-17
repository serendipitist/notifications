import React from "react";
import MessageBar from "./message_bar";
import NotificationSummary from "./notification_summary";

const SAMPLE_DATA = [{
    type: 'Assigned Tasks',
    count: 4
  }, {
    type: 'Reminders',
    count: 8
  }, {
    type: 'Notifications',
    count:  10
  }];

const SAMPLE_MESSAGES = [ {
    message: "Buck owners has assigned mobility task for you",
    time: "1526473034"
 },{
   message: "Need to call Ana",
   time: "1526471034"
  }
]

const Notification = () => (
  <div className="notification-container">
   <NotificationSummary data={SAMPLE_DATA} />
   <MessageBar messages={SAMPLE_MESSAGES} />
  </div>
)

export default Notification;
