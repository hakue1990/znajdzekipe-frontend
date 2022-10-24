import React from 'react';

import styled, { css } from 'styled-components';

import ContactForm from '../../components/ContactForm/ContactForm';
import BG from '../../assets/images/pattern.png';

const ContactSection = () => (
  <>
    <Container>
      <Row column>
        <Title>
          napisz do <span style={{ color: '#f6ae2d' }}>nas</span>!
        </Title>
        <ContactForm />
      </Row>
    </Container>
  </>
);

export default ContactSection;

const Title = styled.h1`
  @media (max-width: 768px) {
    color: white !important;
  }
`;

const Container = styled.div`
  min-height: 92vh;
  color: white;
  display: flex;
  position: relative;
  background-image: url(${BG});
  margin: 0;
  padding: 0;
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
    background-color: white;
  }

  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: black;
    `}
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 52px;
    overflow: hidden;
    h1 {
      color: black;
    }
    img {
      width: 350px;
    }
  }

  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
      align-items: center;
    `}
`;
