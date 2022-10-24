import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import Message from "./Message";

const MessagesScreen = ({ chatID }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "groups", chatID, "messages"),
      (messages) => {
        setMessages(messages.docs);
      }
    );
    //remember to unsubscribe from your realtime listener on unmount or you will create a memory leak
    return () => unsub();
  }, [chatID]);

  return (
    <Container>
      {messages.map((message) => (
        <Message key={message.id} data={message.data()} />
      ))}
    </Container>
  );
};

export default MessagesScreen;

const Container = styled.div`
  overflow-y: scroll;
  width: 100%;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
