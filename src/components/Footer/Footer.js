import styled from 'styled-components';
import Button from '../Button/Button';
import Logo from '../../assets/images/logo.png';

import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

const Footer = () => (
  <Container>
    <ScrollToTop smooth />
    <UpperRow>
      <Title>Szukam ekipy do!</Title>
      <Paragraph>
        made with ♥ by Mateusz Kokot Michał Kolanowski Wojciech Korcz Adam
        Hałdaś
      </Paragraph>
      <div>
        <LinkBtn to='/search'>Szukaj</LinkBtn>
        <LinkBtn to='/contact'>Kontakt</LinkBtn>
      </div>
    </UpperRow>
    <Row>
      <img src={Logo} alt='logo' />
      <span>© 2022 Znajdź ekipę . All Rights Reserved. </span>
      <SocialsContainer>
        <SocialIco href='#'>
          <BsFacebook size='30px' />
        </SocialIco>
        <SocialIco href='#'>
          <BsGithub size='30px' />
        </SocialIco>
        <SocialIco href='#'>
          <BsLinkedin size='30px' />
        </SocialIco>
      </SocialsContainer>
    </Row>
  </Container>
);

export default Footer;

const Container = styled.div`
  height: 594px;
  background-color: #5603ad;
  @media (max-width: 768px) {
    min-height: 594px;
  }
`;

const SocialsContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const Row = styled.div`
  height: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    text-align: center;
    flex-direction: column;
    span {
      margin: 20px;
    }
  }
  img {
    width: 100px;
    height: 60px;
  }
  span {
    font-size: 16px;
    color: white;
    letter-spacing: 3px;
  }
`;

const UpperRow = styled(Row)`
  height: 70%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Paragraph = styled.p`
  font-size: 22px;
  margin: 40px;
  color: white;
  width: 60%;
  @media (max-width: 768px) {
    margin: 20px 20px;
    font-size: 16px;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  color: white;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LinkBtn = styled(Link)`
  margin: 20px;
  background-color: #f6ae2d;
  border-radius: 18px;
  border-style: none;
  color: black;
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
  font-family: 'Inter UI', 'SF Pro Display', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 14px;
  font-weight: 700;
  padding: 15px 20px;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all 0.5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: 0.1s;
    background-color: #87d68d;
  }
`;

const SocialIco = styled.a`
  width: 40px;
  height: 40px;
  display: inline-block;
  margin: 5px;
  border-radius: 50%;
  position: relative;
  text-decoration: none;
  color: #f6ae2d;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: black;
    color: #87d68d;
  }
`;
