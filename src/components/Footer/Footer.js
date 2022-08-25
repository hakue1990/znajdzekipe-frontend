import styled from "styled-components";
import Button from "../Button/Button";

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
    <Row></Row>
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

