import React from "react";
import styled from "styled-components";

const Message = ({ data }) => {
  return (
    <Container>
      <Text>{data.text}</Text>
      <TextDescription></TextDescription>
    </Container>
  );
};

export default Message;

const Container = styled.div``;

const Text = styled.p``;

const TextDescription = styled.div`
  display: flex;
`;

const UserImage = styled.img`
  background-color: black;
  width: 13px;
  height: 13px;
  border-radius: 10px;
`;

const DescriptionP = styled.p``;
