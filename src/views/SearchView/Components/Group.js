import React from "react";
import styled from "styled-components";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../../firebase";
import { apiAddMember } from "../api/apiFunctions";
import Button from "../../../components/Button/Button";

const Group = ({ currentUser, firebaseID, data }) => {
  const joinGroup = async () => {
    const groupRef = doc(db, "groups", firebaseID);
    try {
      await apiAddMember(firebaseID, currentUser);

      await updateDoc(groupRef, {
        members: arrayUnion(currentUser),
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Text>
          <b>Nazwa Grupy: </b>
          {data.name}
        </Text>
        <Text>
          <b>Opis grupy: </b>
          {data.description}
        </Text>
        <Text>
          <b>Dzień: </b>
          {data.event_date}
        </Text>
        <Text>
          <b>Godzina: </b>
          {data.event_time}
        </Text>
      </Wrapper>
      <JoinButton onClick={() => joinGroup()}>Dołącz</JoinButton>
    </Container>
  );
};

export default Group;

const Container = styled.div`
  padding: 5px;
  border: 3px solid currentColor;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px;
`;

const JoinButton = styled(Button)`
  padding: 5px 10px;
  margin-bottom: 15px;
`;

const Text = styled.div``;
