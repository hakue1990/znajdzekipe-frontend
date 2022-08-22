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
          Innowacyjna platforma, która pozwoli ci na robienie rzeczy{' '}
          <span style={{ color: '#F6AE2D' }}>wspólnie</span>!
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
