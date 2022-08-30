import React from "react";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import ListOfGroups from "./ListOfGroups";
import Chat from "./Chat";

const HomeView = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading)
    return (
      <Container>
        <h1>Checking user</h1>
      </Container>
    );

  if (user) {
    return (
      <Container>
        <h1>Tutaj możesz pisać z grupami, do których należysz</h1>
        <Wrapper>
          <GroupsPanel>
            <ListOfGroups />
          </GroupsPanel>
          <ChatPanel>
            <Chat />
          </ChatPanel>
        </Wrapper>
      </Container>
    );
  } else
    return (
      <Container>
        <h1>Aby skorzystać z tej funkcji musisz się zalogować</h1>
      </Container>
    );
};

export default HomeView;

const Container = styled.div`
  min-height: 92vh;
  display: flex;
  flex-direction: column;
`;

const GroupsPanel = styled.div``;

const ChatPanel = styled.div``;

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;
