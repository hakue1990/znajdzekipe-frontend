import React from "react";
import styled from "styled-components";
import { collection, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../firebase";
import Button from "../../components/Button/Button";

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

const ProjectView = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading)
    return (
      <Container>
        <h1>Checking user</h1>
      </Container>
    );

  if (user) {
    return (
      <Container>
        <h1>Tutaj możesz znaleźć ekipę</h1>
        <Button onClick={() => addGroup()}>Dodaj grupe</Button>
      </Container>
    );
  } else
    return (
      <Container>
        <h1>Aby skorzystać z tej funkcji musisz się zalogować</h1>
      </Container>
    );
};

export default ProjectView;

const Container = styled.div`
  min-height: 92vh;
`;
