import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "../../assets/images/NewLogo.png";
import { NavLink } from "react-router-dom";
import Button from "./../Button/Button";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const Navbar = ({ signIn, logOut }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user] = useAuthState(auth);

  return (
    <Nav>
      <MenuLink to="/">
        <img src={LogoImg} alt="logo" />
      </MenuLink>
      <Hamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/" onClick={() => setIsOpen(false)}>
          Home
        </MenuLink>
        <MenuLink to="/chat" onClick={() => setIsOpen(false)}>
          Czat
        </MenuLink>
        <MenuLink to="/search" onClick={() => setIsOpen(false)}>
          Szukaj
        </MenuLink>
        <MenuLink to="/contact" onClick={() => setIsOpen(false)}>
          Kontakt
        </MenuLink>
        {user ? (
          <UserContainer>
            <Button margin="20px 15px" onClick={logOut}>
              Wyloguj się
            </Button>
            <Avatar src={user.photoURL} alt="avatar" />
          </UserContainer>
        ) : (
          <Button margin="20px 15px" onClick={signIn}>
            Zaloguj się
          </Button>
        )}
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
  img {
    width: 120px;
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

  @media (max-width: 768px) {
    display: flex;
    span {
      background-color: black;
      position: relative;
      transition: all 0.3s ease;
      width: 30px;
      height: 3px;
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    }
    transform: ${({ isOpen }) => (isOpen ? "rotate(0)" : "rotate(0)")};
  }

  &::before {
    content: "";
    height: 3px;
    width: 100%;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s ease;

    transform: ${({ isOpen }) =>
      isOpen ? "translateY(8px) rotate(45deg)" : "translateY(-10px) rotate(0)"};
  }
  &::after {
    content: "";
    height: 3px;
    width: 100%;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s ease;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(8px) rotate(-45deg)" : "translateY(0) rotate(0)"};
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  max-height: 45px;
  margin: 15px;
  border-radius: 50%;
`;
