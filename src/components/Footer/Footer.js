import styled from "styled-components";
import Button from "../Button/Button";
import Logo from '../../assets/images/logo.png'

import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';


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
      <SocialsContainer>
        <a href="https://127.0.0.1"><BsFacebook size="30px"/></a>
         <a href="https://127.0.0.1"><BsGithub size="30px"/></a>
        <a href="https://127.0.0.1"><BsLinkedin size="30px"/></a> 
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
  a {
    width: 40px;
    height: 40px;
    display: inline-block;
    margin: 5px;  
    border-radius: 50%;
    position: relative;
    text-decoration: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;  
    
&:hover {
  background-color: black ;

}

  }
`;

const UpperRow = styled(Row)`
  height: 70%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  &::before {
    content: "";
    width: 80%;
    height: 1px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
  }
@media (max-width: 768px) {
width: 100%;

}
`;

const Paragraph = styled.p`
  font-size: 22px;
  margin: 20px;
  color: white;
@media (max-width: 768px) {
margin: 20px 20px;
font-size: 16px;
}
`;

const Title = styled.h2`
  font-size: 40px;
  color: white;
`;

const FooterBtn = styled(Button)`
margin: 15px;
width: 138px;

`;

