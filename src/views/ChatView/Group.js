import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Group = ({ id, name }) => {
  let navigate = useNavigate();

  const redirectTo = (id) => {
    navigate("/chat", { replace: true, state: id });
  };

  return (
    <Container onClick={() => redirectTo(id)}>
      name: {name}, id: {id}
    </Container>
  );
};

export default Group;

const Container = styled.div`
  cursor: pointer;
  padding: 10px;
`;
