import React from 'react';
import styled, { css } from 'styled-components';
import HeroImg from '../../../assets/images/HeroImg.webp';
import Title from '../../../components/Title/Title';
import Button from '../../../components/Button/Button';
import BG from '../../../assets/images/BG.png';

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
        <Title size='100px' margin='0 120px' width='900px'>
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
  background-color: black;
  color: white;
  display: flex;
  background-image: url(${BG});
  @media (max-width: 768px) {
    flex-direction: column-reverse;
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
    right: 120px;
    top: 80px;
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
