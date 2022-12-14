import styled from "styled-components";
import OkImg from "../../assets/images/ico.png";

const SignIco = ({ text }) => {
  return (
    <Container>
      <img src={OkImg} alt="ok ico" />
      <h2>{text}</h2>
    </Container>
  );
};

export default SignIco;

const Container = styled.div`
  img {
    margin-right: 20px;
    position: absolute;
    left: 0px;
  }
  background-color: #fff;
  border-radius: 15px;
  color: black;
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 500px;
  height: 74px;
  position: relative;
  transition: all 0.3s ease;
  &:hover {
    transform: translateX(40px);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 90%;
    justify-content: flex-end;
    padding: 20px;
    &:hover {
      background-color: #101935;
      transform: translateX(0);
      color: white;
      cursor: pointer;
    }
    img {
      height: 100% !important;
      width: 60px !important;
    }
  }
`;
