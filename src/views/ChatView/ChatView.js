import React from "react";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import Button from "../../components/Button/Button";
import ListOfGroups from "./ListOfGroups";
import Chat from "./Chat";
import Title from "../../components/Title/Title";

const addGroup = async () => {
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

const HomeView = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading)
    return (
      <Container>
        <Title>Checking user</Title>
      </Container>
    );

  if (user) {
    return (
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
  } else
    return (
      <Container>
        <h1>Aby skorzystać z tej funkcji musisz się zalogować</h1>
      </Container>
    );
};

export default HomeView;

const Container = styled.div`
  min-height: 92vh;
  display: flex;
`;

const GroupsPanel = styled.div``;

const ChatPanel = styled.div``;
