import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../../../firebase";
import { auth } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Group from "./Group";

const ListOfGroups = ({ groups }) => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Container>
      {groups.map((group) => (
        <Group
          key={group.id}
          data={group}
          currentUser={user.email}
          firebaseID={group.firebase_chat_id}
        />
      ))}
    </Container>
  );
};

export default ListOfGroups;

const Container = styled.div``;
