import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

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
        <p key={message.id}>{message.data().text}</p>
      ))}
    </Container>
  );
};

export default MessagesScreen;

const Container = styled.div``;
