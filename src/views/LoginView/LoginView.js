import styled from 'styled-components';

import BG from '../../assets/images/pattern.png';

import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';

const LoginView = ({ img, signIn }) => {
  const Container = styled.div`
    width: 100%;
    height: 90vh;
    position: relative;
    display: flex;
    justify-content: center;
    justify-content: flex-start;
    background-image: url(${BG});
    position: relative;
    left: 0;
    top: 0;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.8;
      pointer-events: none;
      z-index: -1;
    }
  `;

  const Image = styled.img`
    height: 600px;
    @media (max-width: 768px) {
      position: absolute;
      width: 500px;
      left: 3px;
    }
  `;

  const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    text-align: left;
    @media (max-width: 768px) {
      z-index: 2;
      position: relative;
      left: -23vw;
    }
  `;

  const ImageSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  `;

  const LoginViewBtn = styled(Button)`
    width: 300px;
    margin: 20px;
    @media (max-width: 768px) {
      position: relative;
      left: -80px;
      background-color: #f6ae2d;
      border: 3px solid black;
    }
  `;

  const LoginText = styled(Title)`
    color: white;
    @media (max-width: 768px) {
      font-size: 40px;
      letter-spacing: 5px;
      line-height: 60px;
      position: relative;
      width: 100vw;
      left: -60px;
      top: -15npm run %;
    }
  `;
  return (
    <Container>
      <ImageSection>
        <Image src={img} alt='Login View Background' />
      </ImageSection>
      <TextSection>
        <LoginText color='black' size='70px'>
          Hola hola!
        </LoginText>
        <LoginText color='black'>Najpierw się Zaloguj!</LoginText>
        <LoginViewBtn onClick={signIn}>Zaloguj się</LoginViewBtn>
      </TextSection>
    </Container>
  );
};

export default LoginView;
