import React from 'react';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import ListOfGroups from './ListOfGroups';
import Chat from './Chat';
import LoginView from '../LoginView/LoginView';
import czat from '../../assets/images/czat.png';
import background from '../../assets/images/pattern.png';
import Title from '../../components/Title/Title';
import CzatImg from '../../assets/images/siedza.png';

const HomeView = ({ signIn }) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading)
    return (
      <Container>
        <h1>Checking user</h1>
      </Container>
    );

  if (user) {
    return (
      <LoginContainer>
        <Row>
          <img src={CzatImg} alt='#' />
        </Row>
        <Row>
          <ChatTitle>grupy, do których należysz:</ChatTitle>
          <Wrapper>
            <GroupsPanel>
              <ListOfGroups />
            </GroupsPanel>
            <ChatPanel>
              <Chat />
            </ChatPanel>
          </Wrapper>
        </Row>
      </LoginContainer>
    );
  } else return <LoginView img={czat} signIn={signIn} />;
};

export default HomeView;

const Container = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px;
`;

const LoginContainer = styled(Container)`
  background: url(${background});
  flex-direction: row;
  overflow: hidden;
  margin: 0;
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
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Row = styled.div`
  min-height: 600px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  padding: 20px;
  position: relative;
  img {
    position: absolute;
    width: 800px;
  }
`;
const GroupsPanel = styled.div``;

const ChatPanel = styled.div``;

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  margin-right: 120px;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ChatTitle = styled(Title)`
  z-index: 1;
  text-align: center;
  font-size: 30px;
  width: 100vw;
`;
