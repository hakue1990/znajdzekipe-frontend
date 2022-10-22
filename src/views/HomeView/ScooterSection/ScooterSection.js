import React from 'react';
import styled, { css } from 'styled-components';
import ScooterImg from '../../../assets/images/certyfikaty.svg';

import FootbalIco from '../../../assets/images/FootbalIco.png';
import beerIco from '../../../assets/images/beerIco.png';
import chessIco from '../../../assets/images/chessIco.png';
import gamesIco from '../../../assets/images/gamesIco.png';

import Title from '../../../components/Title/Title';
import Tab from './Tab/Tab';

const ScooterSection = () => (
  <>
    <Container>
      <LeftRow>
        <MobileTitle>
          Szukasz nowej{' '}
          <span style={{ color: 'rgb(246, 174, 45)' }}>zajawki</span>?!
        </MobileTitle>
        <Tab img={FootbalIco} title='Gra w piłkę' />
        <Tab img={gamesIco} title='Gry na pc?' />
        <Tab img={chessIco} title='A może szachy?' />
        <Tab img={beerIco} title='Browary w parku?' />
      </LeftRow>
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
    align-items: center;
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
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 52px;
    overflow: hidden;
    margin-bottom: 30px;
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
  ${({ margin }) => margin || '20px'}
`;

const LeftRow = styled(Row)`
  width: 60%;
  padding: 60px;
  @media (max-width: 768px) {
    width: 80%;
    padding: 0;
  }
`;
const MobileTitle = styled(Title)`
  display: none;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
    font-size: 1.5rem;
    margin: 30px 0px;
  }
`;
