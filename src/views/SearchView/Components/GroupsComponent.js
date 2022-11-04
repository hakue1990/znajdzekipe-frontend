import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button/Button';
import ListOfGroups from './ListOfGroups';

const GroupsComponent = ({ groups, setAddGroupView, searched }) => {
  return (
    <Container>
      <h2>Lista wyszukanych grup</h2>
      <ListOfGroups groups={groups} />
      {searched ? (
        <AddGroupBtn onClick={() => setAddGroupView(true)}>
          Dodaj grupe
        </AddGroupBtn>
      ) : (
        <p>Aby dodać grupę, musisz najpierw wyszukać!</p>
      )}
    </Container>
  );
};

export default GroupsComponent;

const AddGroupBtn = styled(Button)`
  z-index: 1;
  position: relative;
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  position: block;
  background-color: #ffffff;
  margin-top: 20px;
  left: 102%;
  transform: translateX(-50%);
  width: 500px;
  height: 300px;
  padding: 20px;
  text-align: center;
  border-radius: 20px;
`;
