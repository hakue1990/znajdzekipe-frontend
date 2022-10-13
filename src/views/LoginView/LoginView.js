import styled from 'styled-components';

import LoginViewImg from '../../assets/images/wyszukiwanie.svg';

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
  `;

  const Image = styled.img`
    height: 600px;
  `;

  const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    text-align: left;
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
  `;
  return (
    <Container>
      <ImageSection>
        <Image src={img} alt='Login View Background' />
      </ImageSection>
      <TextSection>
        <Title color='black' size='70px'>
          Hola hola
        </Title>
        <Title color='black' size='50px'>
          Najpierw się Zaloguj!
        </Title>
        <LoginViewBtn onClick={signIn}>Zaloguj się</LoginViewBtn>
      </TextSection>
    </Container>
  );
};

export default LoginView;
