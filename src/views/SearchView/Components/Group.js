import React from "react";
import styled from "styled-components";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../../firebase";
import { getCookie } from "../../../utils/getCookie";

const Group = ({ name, currentUser, firebaseID }) => {
  const groupRef = doc(db, "groups", firebaseID);
  const joinGroup = async () => {
    const cookieValue = getCookie();
    const data = {
      firebase_chat_id: firebaseID,
      email: currentUser,
    };

    try {
      const apiResponse = await fetch(
        "https://backend.szukamekipydo.pl/api/member/create",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `${cookieValue}`,
          },
          body: JSON.stringify(data),
        }
      );

      const firebaseResponse = await updateDoc(groupRef, {
        members: arrayUnion(currentUser),
      });
      return { apiResponse, firebaseResponse };
    } catch (e) {
      console.log(e);
    }
  };

  /* const apiJoinGroup = async () => {
    const cookieValue = getCookie();
    const data = {
      firebase_chat_id: "",
      email: ""
    };
  } */

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
