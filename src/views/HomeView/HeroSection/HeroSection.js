import React from 'react'
import styled, {css} from 'styled-components';

const HeroSection = () => (
    <>
    <Container>
    <h1>Helo Hero Section</h1>
    </Container>
    </>
 
)





export default HeroSection;

const Container = styled.div`
  /* This renders the buttons above... Edit me! */
min-height: 100vh;
background-color: #333;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: black;
  `}
`
