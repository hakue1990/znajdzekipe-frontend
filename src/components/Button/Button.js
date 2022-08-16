import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
background-color: #F6AE2D;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: black;
  text-transform: uppercase;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 700;
  height: 4rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: .1s;
  }
  @media (min-width: 768px) {
  .button-36 {
    padding: 0 2.6rem;
  }
}
`

export default Button;






