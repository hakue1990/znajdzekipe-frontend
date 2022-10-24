import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { collection, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../firebase";
import Button from "../../components/Button/Button";
import SearchLocationInput from "./SearchLocationInput";
import LoginView from "../LoginView/LoginView";
import wyszukiwanie from "../../assets/images/wyszukiwanie.svg";
import getKeywords from "./getKeywords";
import Title from "../../components/Title/Title";
import BG from "../../assets/images/pattern.png";
import ListOfGroups from "./ListOfGroups";

const addGroup = async (user) => {
  try {
    const docRef = await addDoc(collection(db, "groups"), {
      name: "Testowa",
      kategoria: "Lorem",
      members: [user.email],
      owner: [user.email],
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const ProjectView = ({ signIn }) => {
  const [user, loading, error] = useAuthState(auth);
  const [searchText, setSearchText] = useState("");
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [minDate, setMinDate] = useState();
  const [maxDate, setMaxDate] = useState();
  const [minTime, setMinTime] = useState();
  const [maxTime, setMaxTime] = useState();
  const [keyWords, setKeyWords] = useState();

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      getKeywords(searchText).then(function (keywords) {
        setKeyWords(keywords);
      });
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [searchText]);

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
        <AddGroupBtn onClick={() => addGroup(user)}>Dodaj grupe</AddGroupBtn>
        <SearchWrapper>
          <Button>Szukaj grupę</Button>
          <DateTimeWrapper>
            <DateWrapper>
              <Label>Od</Label>
              <Input type="date" onChange={(e) => setMinDate(e.target.value)} />
              <Input type="time" onChange={(e) => setMaxDate(e.target.value)} />
            </DateWrapper>
            <DateWrapper>
              <Label>Do</Label>
              <Input type="date" onChange={(e) => setMinTime(e.target.value)} />
              <Input type="time" onChange={(e) => setMaxTime(e.target.value)} />
            </DateWrapper>
          </DateTimeWrapper>
          <Input
            type="text"
            placeholder="wpisz czego szukasz..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <SearchLocationInput
            handleLatitude={setLatitude}
            handleLongitude={setLongitude}
          />
        </SearchWrapper>
        <GroupsContainer>
          <h2>Testowa lista wszystkich grup</h2>
          <ListOfGroups currentUser={user} />
        </GroupsContainer>
      </Container>
    );
  } else return <LoginView img={wyszukiwanie} signIn={signIn} />;
};

export default ProjectView;

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

const SearchWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const DateTimeWrapper = styled.div`
  z-index: 1;
`;
const DateWrapper = styled.div`
  z-index: 1;
`;
const Label = styled.label`
  z-index: 1;
  color: white;
  margin: 20px;
`;
const Input = styled.input`
  z-index: 1;
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
  z-index: 999;
  margin-top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 500px;
`;
