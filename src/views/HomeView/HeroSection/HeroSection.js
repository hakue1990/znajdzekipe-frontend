import React from 'react';
import styled, { css } from 'styled-components';
import HeroImg from '../../../assets/images/HeroImg.webp';
import Title from '../../../components/Title/Title';
import Button from '../../../components/Button/Button'

const HeroSection = () => (
  <>
    <Container>
      <Row column>
        <Title color='#F6AE2D' size='52px' margin='0 120px'>
          Szukasz Ekipy ?
        </Title>
        <Title size='40px' margin='0 120px'>
          Innowacyjna platforma, która pozwoli ci na robienie rzeczy{' '}
          <span style={{ color: '#F6AE2D' }}>wspólnie</span>!
        </Title>
        <Button margin="40px 120px">znajdz ekipę!</Button>
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
  @media (max-width: 768px) {
    flex-direction: column-reverse;
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
    align-items: center;
    justify-content: flex-start;



    img {
      width: 350px;
    }
  }

  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
      @media (max-width: 768px) {
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 80px;
button{
left: 10px;
margin: 30px 0;
position: relative;
right: 130px;
}
  }
    `}
`;
