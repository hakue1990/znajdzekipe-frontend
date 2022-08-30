import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ChatTextInput from "./ChatTextInput";
import MessagesScreen from "./MessagesScreen";

const ChatPanel = () => {
  const location = useLocation();

  let chatID = location.state;

  return (
    <Container>
      <p>current chatID: {chatID}</p>
      <ChatWrapper>
        {chatID && (
          <>
            <MessagesScreen chatID={chatID} />
            <ChatTextInput chatID={chatID} />
          </>
        )}
      </ChatWrapper>
    </Container>
  );
};

export default ChatPanel;

const Container = styled.div``;

const ChatWrapper = styled.div`
  border: 1px solid black;
  height: 500px;
  position: relative;
`;
