import React from "react";
import styled from "styled-components";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../firebase";

const ChatTextInput = ({ chatID }) => {
  const [user] = useAuthState(auth);

  const addMessage = async (text) => {
    try {
      const messageRef = await addDoc(
        collection(db, "groups", chatID, "messages"),
        {
          text: text,
          creator: user.email,
          creatorName: user.displayName,
          timestamp: serverTimestamp(),
        }
      );
      console.log("Message written with ID: ", messageRef.id);
    } catch (e) {
      console.log("Error adding Message: ", e);
    }
  };
  return (
    <Container>
      <Input
        placeholder="wiadomość.."
        onKeyPress={(ev) => {
          if (ev.key === "Enter") {
            ev.preventDefault();
            if (ev.target.value !== "") {
              addMessage(ev.target.value);
              ev.target.value = "";
            }
          }
        }}
      />
    </Container>
  );
};

export default ChatTextInput;

const Container = styled.div`
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  padding: 10px;
  left: 0;
  background-color: white;
  width: 100%;
`;

const Input = styled.input`
  padding: 5px;
  border: none;
  border-bottom: 3px solid black;
  outline: none;
  background: none;
  width: 100%;
`;
