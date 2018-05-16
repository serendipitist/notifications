import React from "react";
import MessageBar from "./messagebar";
import NotificationSummary from "./notification_summary";

const Notification = () => (
  <div className="notification-continer">
   <NotificationSummary />
   <MessageBar />
  </div>
)

export default Notification;
