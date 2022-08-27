import React from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import Button from "../../components/Button/Button";
import ListOfGroups from "./ListOfGroups";
import Chat from "./Chat";

const addGroup = async () => {
  console.log("test");
  try {
    const docRef = await addDoc(collection(db, "groups"), {
      name: "Testowa",
      kategoria: "Lorem",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const HomeView = () => (
  <Container>
    <GroupsPanel>
      <h1>this is Chat view</h1>
      <Button onClick={() => addGroup()}>Dodaj grupe</Button>
      <ListOfGroups />
    </GroupsPanel>
    <ChatPanel>
      <Chat />
    </ChatPanel>
  </Container>
);
export default HomeView;

const Container = styled.div`
  min-height: 92vh;
  display: flex;
`;

const GroupsPanel = styled.div``;

const ChatPanel = styled.div``;
