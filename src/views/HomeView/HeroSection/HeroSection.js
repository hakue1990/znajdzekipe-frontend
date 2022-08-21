import React from 'react';
import styled, { css } from 'styled-components';
import HeroImg from '../../../assets/images/HeroImg.png';
import Title from '../../../components/Title/Title';

const HeroSection = () => (
  <>
    <Container>
      <Row column>
        <Title color='#F6AE2D' size='52px' margin='0 120px'>
          Szukasz Ekipy ?
        </Title>
        <Title size='44px' margin='0 120px'>
          Innowacyjna platforma, która pozwoli ci na robienie rzeczy wspólnie!
        </Title>
      </Row>
      <Row>
        <img src={HeroImg} alt='Hero Image' />
      </Row>
    </Container>
  </>
);

export default HeroSection;

const Container = styled.div`
  min-height: 92vh;
  background-color: black;
  color: white;
  display: flex;

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
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
      align-items: flex-start;
    `}
`;
