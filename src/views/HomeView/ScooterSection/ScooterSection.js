import React from 'react';
import styled, { css } from 'styled-components';
import ScooterImg from '../../../assets/images/ScooterImg.webp';

import FootbalIco from '../../../assets/images/FootbalIco.png'
import beerIco from '../../../assets/images/beerIco.png'
import chessIco from '../../../assets/images/chessIco.png'
import gamesIco from '../../../assets/images/gamesIco.png'

import Tab from './Tab/Tab';

const ScooterSection = () => (
  <>
    <Container>
      <LeftRow >
       <Tab img={FootbalIco} title="Gra w piłkę"/>
       <Tab img={gamesIco} title="Gry na pc?"/>
       <Tab img={chessIco} title="A może szachy?"/>
       <Tab img={beerIco} title="Browary w parku?"/>
        
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
${({margin}) => margin || "20px"}
`;

const LeftRow = styled(Row)`
width: 60%;
padding: 60px;

`
