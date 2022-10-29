import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Message from "./Message";

const MessagesScreen = ({ chatID }) => {
  const [messages, setMessages] = useState([]);
  const scrollMessagesRef = useRef(null);

  const scrollToBottom = () => {
    scrollMessagesRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  useEffect(() => {
    console.log("test");

    const q = query(
      collection(db, "groups", chatID, "messages"),
      orderBy("timestamp")
    );

    const unsub = onSnapshot(q, (messages) => {
      setMessages(messages.docs);
    });
    //remember to unsubscribe from your realtime listener on unmount or you will create a memory leak
    return () => unsub();
  }, [chatID]);

  useEffect(() => {
    scrollToBottom();
  });

  return (
    <Container>
      {messages.map((message) => (
        <Message key={message.id} data={message.data()} />
      ))}
      <EndOfMessages ref={scrollMessagesRef} />
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
  margin-top: 30px;
  margin-bottom: 30px;
`;

const EndOfMessages = styled.div``;
