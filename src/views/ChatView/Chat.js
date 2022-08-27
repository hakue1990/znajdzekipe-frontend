import React from "react";
import { useLocation } from "react-router-dom";

const ChatPanel = () => {
  const location = useLocation();

  let chatID = location.state;

  return <div>current chatID: {chatID}</div>;
};

export default ChatPanel;
