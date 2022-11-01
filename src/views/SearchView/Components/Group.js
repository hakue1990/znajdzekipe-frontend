import React from "react";
import styled from "styled-components";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../../firebase";
import { apiAddMember } from "../api/apiFunctions";

const Group = ({ name, currentUser, firebaseID }) => {
  const groupRef = doc(db, "groups", firebaseID);
  const joinGroup = async () => {
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
      <Description>Nazwa: {name}</Description>
      <button onClick={() => joinGroup()}>Dołącz</button>
    </Container>
  );
};

export default Group;

const Container = styled.div`
  padding: 5px;
  border: 1px solid black;
  margin: 5px;
`;

const Description = styled.div``;
