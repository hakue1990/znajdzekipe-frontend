import React from 'react';
import styled, { css } from 'styled-components';
import ScooterImg from '../../../assets/images/ScooterImg.webp';
import Title from '../../../components/Title/Title';
import Button from '../../../components/Button/Button'

const ScooterSection = () => (
  <>
    <Container>
      <Row column>
        <Title color='#F6AE2D' size='52px' margin='0 120px'>
          Components here
        </Title>
        
      </Row>
      <Row>
        <img src={ScooterImg} alt='Scooter' />
      </Row>
    </Container>
  </>
);

export default ScooterSection;

const Container = styled.div`
  min-height: 92vh;
  background-color: black;
  color: white;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: black;
    `}
`;

const Row = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 52px;
    overflow: hidden;

    img {
      width: 350px;
    }
  }

  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
      align-items: flex-start;
    `}
`;
