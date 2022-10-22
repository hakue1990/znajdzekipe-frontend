import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import Group from './Group';

const ListOfGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'groups'), (groups) => {
      setGroups(groups.docs);
    });
    //remember to unsubscribe from your realtime listener on unmount or you will create a memory leak
    return () => unsub();
  }, []);

  return (
    <Container>
      {groups.map((group) => (
        <Group key={group.id} id={group.id} name={group.data().name} />
      ))}
    </Container>
  );
};

export default ListOfGroups;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 500px;
  justify-content: space-around;
  align-items: center;
`;
