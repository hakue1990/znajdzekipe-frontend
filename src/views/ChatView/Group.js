import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Group = ({ id, name }) => {
  let navigate = useNavigate();

  const redirectTo = (id) => {
    navigate('/chat', { replace: true, state: id });
  };

  return (
    <Container onClick={() => redirectTo(id)}>
      grupa: {name}, <br /> id: {id}
    </Container>
  );
};

export default Group;

const Container = styled.div`
  cursor: pointer;
  padding: 30px;
  background-color: #87d68d;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin: 10px;
  transition: all 0.3s ease;
  width: 330px;
  z-index: 1;
  &:hover {
    background-color: #e6af2e;
  }
`;
