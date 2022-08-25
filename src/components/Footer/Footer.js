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
      <Button>Szukaj</Button>
      <Button>Kontakt</Button>
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
padding: 0 500px;
`;

const Paragraph = styled.p`
  font-size: 22px;
  margin: 20px;
  color: white;

`





const Title = styled.h2`
font-size: 40px;
color: white;
`
