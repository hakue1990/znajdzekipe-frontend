import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../firebase";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/chat">Czat</MenuLink>
        <MenuLink to="/search">Szukaj</MenuLink>
        <MenuLink to="/contact">Kontakt</MenuLink>
        <Button margin="0 15px" onClick={signIn}>
          Zaloguj się
        </Button>
        <Button margin="0 15px" onClick={logOut}>
          Wyloguj się
        </Button>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const MenuLink = styled(NavLink)`
  margin: 15px 15px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #67bc98;
  transition: all 0.3s ease-in;
  font-size: 20px;
  &:hover {
    color: #f6ae2d;
  }
  &.active {
    color: #f6ae2d;
    font-weight: bold;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #5603ad;
  min-height: 8vh;
  align-items: center;
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
