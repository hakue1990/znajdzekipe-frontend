import styled from "styled-components";

const Tab = ({ title, img }) => (
  <Container>
    <TabImage src={img} alt="tab ico" />
    <h2>{title}</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
      asperiores labore quis et, quaerat quam!
    </p>
  </Container>
);

export default Tab;

const Container = styled.div`
  width: 43%;
  height: 43%;
  border-radius: 15px;
  background-color: #fff;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  img {
    width: 60px;
    margin-bottom: 20px;
  }
  transition: all 0.3s ease;
  &:hover {
    transform: translateX(-20px);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 100vw !important;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    &:hover {
    transform: translateX(0);
    background-color: rgb(246, 174, 45);
    cursor: pointer;
  }
    img {
      width: 50px;
      height: 50px;
    }
  }
`;
const TabImage = styled.img`
  @media (max-width: 768px) {
    display: block;
    height: 45px !important;
    width: 45px !important;
  }
`;
