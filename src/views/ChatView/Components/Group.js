import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Group = ({ id, name }) => {
  const navigate = useNavigate();

  const redirectTo = (id) => {
    navigate("/chat", {
      replace: true,
      state: { chatID: id, name: name },
    });
  };

  return (
    <Container onClick={() => redirectTo(id)}>
      {name} <br />
      {/* id: {id} */}
    </Container>
  );
};

export default Group;

const Container = styled.div`
  cursor: pointer;
  padding: 30px;
  background-color: #5603ad;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin: 10px;
  transition: all 0.3s ease;
  width: 230px;
  z-index: 1;
  color: white;
  text-transform: uppercase;
  &:hover {
    background-color: #e6af2e;
    color: black;
    font-weight: bold;
  }
`;
