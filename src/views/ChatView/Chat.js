import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ChatTextInput from "./ChatTextInput";
import MessagesScreen from "./MessagesScreen";

const ChatPanel = () => {
  const location = useLocation();

  let chatData = location.state;

  return (
    <Container>
      <ChatWrapper>
        <ChatHeader>
          <p>{chatData.name}</p>
        </ChatHeader>
        {chatData.chatID && (
          <>
            <MessagesScreen chatID={chatData.chatID} />
            <ChatTextInput chatID={chatData.chatID} />
          </>
        )}
      </ChatWrapper>
    </Container>
  );
};

export default ChatPanel;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ChatWrapper = styled.div`
  border: 1px solid black;
  height: 500px;
  position: relative;
  background-color: #87d68d;
  min-height: 70vh;
  border-radius: 20px;
  padding: 15px;
  border: none;
  z-index: 1;
  width: 400px;
  display: flex;
  @media (max-width: 768px) {
    width: 80%;
    justify-content: center;
  }
  overflow: hidden;
`;

const ChatHeader = styled.div`
  border-bottom: 1px solid black;
  z-index: 2;
  height: auto;
  width: 400px;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0px;
  padding: 10px;
`;
