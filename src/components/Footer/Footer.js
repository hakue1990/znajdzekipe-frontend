import styled from "styled-components";
import Button from "../Button/Button";
import Logo from '../../assets/images/logo.png'

import FacebookIco from '../../assets/images/socials/Facebook Icon.png'
import LinkedinIco from '../../assets/images/socials/Linkedin Icon.png'
import GithubIco from '../../assets/images/socials/Github Icon.png'

const Footer = () => (
  <Container>
    <UpperRow>
      <Title>Znajdź ekipę do!</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        voluptatum inventore velit ipsa minus et itaque repellendus perspiciatis
        praesentium dolor ex quae dolorem, id quisquam cum quibusdam alias
        reiciendis aperiam?
      </Paragraph>
      <div>
        <FooterBtn>Szukaj ekipy</FooterBtn>
        <FooterBtn >Kontakt</FooterBtn>
      </div>
    </UpperRow>
    <Row>
      <img src={Logo} alt="logo" />
      <span>© 2022 Znajdź ekipę . All Rights Reserved. </span>
      <div>
        <a href="#"><img src={FacebookIco} alt="facebook" /></a>
         <a href="#"><img src={LinkedinIco} alt="linkedin" /></a>
        <a href="#"><img src={GithubIco} alt="github" /></a> 
      </div>
    </Row>
  </Container>
);

export default Footer;

const Container = styled.div`
  height: 594px;
  background-color: #5603ad;
`;
const Row = styled.div`
  height: 30%;
  display: flex;
justify-content: space-evenly;
align-items: center;
  img {
    width: 100px;
    height: 60px;
  }
  span {
    font-size: 16px;
    color: white;
  }
  a {
    width: 40px;
    height: 40px;
    display: inline-block;
    margin: 5px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const UpperRow = styled(Row)`
  height: 70%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  padding: 0 500px;
  &::before {
    content: "";
    width: 80%;
    height: 1px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
  }
`;

const Paragraph = styled.p`
  font-size: 22px;
  margin: 20px;
  color: white;
`;

const Title = styled.h2`
  font-size: 40px;
  color: white;
`;

const FooterBtn = styled(Button)`
margin: 15px;
width: 138px;

`;

