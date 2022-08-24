import styled from "styled-components";
import Button from "../Button/Button";

const Footer = () => (
  <Container>
    <div>
      <h2>Znajdź ekipę do!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        voluptatum inventore velit ipsa minus et itaque repellendus perspiciatis
        praesentium dolor ex quae dolorem, id quisquam cum quibusdam alias
        reiciendis aperiam?
      </p>
      <Button>Szukaj</Button><Button>Kontakt</Button>
    </div>
    <div></div>
  </Container>
);

export default Footer;

const Container = styled.div`
  height: 594px;
  background-color: #5603ad;
`;
