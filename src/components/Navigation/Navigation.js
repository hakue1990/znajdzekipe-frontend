import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from '../../assets/images/logo.png'
import { NavLink } from "react-router-dom";

import Button from '../Button/Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <MenuLink to="/">
        <img src={LogoImg} alt="logo" />
      </MenuLink>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/" >Home</MenuLink>
        <MenuLink to="/chat">Chat</MenuLink>
        <MenuLink to="/project">Project</MenuLink>
        <MenuLink to="/contact">Contact</MenuLink>
      <Button>Zaloguj się</Button>
      <Button>Zarejestruj się</Button>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const MenuLink = styled(NavLink)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #67bc98;
  transition: all 0.3s ease-in;
  font-size: 20px;
  &:hover {
    color: #F6AE2D;
  }
  &.active {
    color: #F6AE2D;
    font-weight: bold;
  }
  
  `


const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #5603AD;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;


const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;