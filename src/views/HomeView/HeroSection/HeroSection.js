import React from 'react';
import styled, { css } from 'styled-components';
import HeroImg from '../../../assets/images/kariera.svg';
import Title from '../../../components/Title/Title';
import Button from '../../../components/Button/Button';
import BG from '../../../assets/images/pattern.png';

const HeroSection = () => (
  <>
    <Container>
      <Row column>
        <Title color='#F6AE2D' size='100px' margin='0 120px'>
          Czy to
        </Title>
        <Title size='100px' margin='0 120px' width='700px'>
          właśnie ty?
        </Title>
        <Title size='90px' margin='0 120px' width='900px'>
          Szukasz ekipy!
        </Title>
        <Button margin='40px 120px'>znajdz ekipę!</Button>
      </Row>
      <Row>
        <img src={HeroImg} alt='Hero' />
      </Row>
    </Container>
  </>
);

export default HeroSection;

const Container = styled.div`
  min-height: 92vh;
  color: white;
  display: flex;
  background-image: url(${BG});
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.8;
    pointer-events: none;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #101935;
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
  align-items: flex-start;

  img {
    position: relative;
    top: 80px;
    width: 800px;
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 52px;
    overflow: hidden;
    padding-left: 30px;

    img {
      width: 350px;
      position: static;
    }
  }

  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
      @media (max-width: 768px) {
        justify-content: flex-start;
        align-items: flex-start;
        button {
          left: 10px;
          margin: 30px 0;
          position: relative;
          right: 130px;
        }
      }
    `}
`;
