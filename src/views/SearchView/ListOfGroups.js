import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import Group from "./Group";

const ListOfGroups = ({ currentUser }) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "groups"), (groups) => {
      setGroups(groups.docs);
    });
    //remember to unsubscribe from your realtime listener on unmount or you will create a memory leak
    return () => unsub();
  }, []);
  return (
    <Container>
      {groups.map((group) => (
        <Group
          key={group.id}
          data={group.data()}
          currentUser={currentUser}
          groupID={group.id}
        />
      ))}
    </Container>
  );
};

export default ListOfGroups;

const Container = styled.div``;
