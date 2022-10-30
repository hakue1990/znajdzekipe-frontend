import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import Group from './Group';

const ListOfGroups = () => {
  const [groups, setGroups] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  const groupsRef = collection(db, 'groups');
  const queryGroups = query(
    groupsRef,
    where('members', 'array-contains', user.email)
  );

  useEffect(() => {
    const unsub = onSnapshot(queryGroups, (groups) => {
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
  width: 400px;
  justify-content: space-around;
  align-items: center;
`;
