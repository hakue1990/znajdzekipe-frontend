import React from 'react'


import styled, { css } from 'styled-components';
import ContactImg from '../../assets/images/ContactImg.webp';

const ContactSection = () => (
  <>
    <Container>
      <Row column>
        <h1>
          Szukasz Ekipy ?
        </h1>
        <h1 size='40px' margin='0 120px'>
          Innowacyjna platforma, która pozwoli ci na robienie rzeczy{' '}
          <span style={{ color: '#F6AE2D' }}>wspólnie</span>!
        </h1>
      </Row>
      <Row>
        <img src={ContactImg} alt='Contact' />
      </Row>
    </Container>
  </>
);

export default ContactSection;

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
