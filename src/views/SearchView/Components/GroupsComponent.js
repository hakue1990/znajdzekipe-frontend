import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import ListOfGroups from "./ListOfGroups";

const GroupsComponent = ({ groups, setAddGroupView }) => {
  return (
    <Container>
      <h2>Lista wyszukanych grup</h2>
      <ListOfGroups groups={groups} />
      <AddGroupBtn onClick={() => setAddGroupView(true)}>
        Dodaj grupe
      </AddGroupBtn>
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
  z-index: 99;
  margin-top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 500px;
`;
