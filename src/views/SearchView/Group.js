import React from "react";
import styled from "styled-components";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebase";

const Group = ({ data, currentUser, groupID }) => {
  const groupRef = doc(db, "groups", groupID);
  const joinGroup = async () => {
    return await updateDoc(groupRef, {
      members: arrayUnion(currentUser.email),
    });
  };

  return (
    <Container>
      <Description>
        Nazwa: {data.name}, Członkowie: {data.members}
      </Description>
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
