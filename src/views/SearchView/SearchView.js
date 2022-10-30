import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../firebase";
import Button from "../../components/Button/Button";
import LoginView from "../LoginView/LoginView";
import wyszukiwanie from "../../assets/images/wyszukiwanie.svg";
import Title from "../../components/Title/Title";
import BG from "../../assets/images/pattern.png";
import ListOfGroups from "./ListOfGroups";
import AddGroupComponent from "./AddGroupComponent";
import SearchGroupsComponent from "./SearchGroupsComponent";

const SearchView = ({ signIn }) => {
  const [user, loading, error] = useAuthState(auth);
  const [addGroupView, setAddGroupView] = useState(false);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [keyWords, setKeyWords] = useState();

  if (loading)
    return (
      <Container>
        <h1>Checking user</h1>
      </Container>
    );

  if (user) {
    return (
      <Container>
        <Title>Tutaj możesz znaleźć ekipę</Title>
        {addGroupView && (
          <AddGroupComponent
            latitude={latitude}
            longitude={longitude}
            keyWords={keyWords}
            setAddGroupView={setAddGroupView}
          />
        )}
        <SearchGroupsComponent
          latitude={latitude}
          longitude={longitude}
          keyWords={keyWords}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
          setKeyWords={setKeyWords}
        />
        <GroupsContainer>
          <h2>Testowa lista wszystkich grup</h2>
          <ListOfGroups currentUser={user} />
          <AddGroupBtn onClick={() => setAddGroupView(true)}>
            Dodaj grupe
          </AddGroupBtn>
        </GroupsContainer>
      </Container>
    );
  } else return <LoginView img={wyszukiwanie} signIn={signIn} />;
};

export default SearchView;

const Container = styled.div`
  min-height: 92vh;
  position: relative;
  background: url(${BG});

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.8;
    pointer-events: none;
  }
`;

const AddGroupBtn = styled(Button)`
  z-index: 1;
  position: relative;
`;

const GroupsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  position: block;
  background-color: #ffffff;
  z-index: 99;
  margin-top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 500px;
`;
