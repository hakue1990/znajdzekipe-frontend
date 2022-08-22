import styled, { css } from 'styled-components';
import OkImg from '../../assets/images/ico.png';

const SignIco = ({ text }) => {
  return (
    <Container>
      <img src={OkImg} alt='ok ico' />
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
  @media (max-width: 768px) {
    /* font-size: 32px; */
  }
`;
