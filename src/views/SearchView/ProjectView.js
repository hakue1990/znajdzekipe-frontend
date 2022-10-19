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

const addGroup = async () => {
  try {
    const docRef = await addDoc(collection(db, "groups"), {
      name: "Testowa",
      kategoria: "Lorem",
      users: "",
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
        <h1>Tutaj możesz znaleźć ekipę</h1>
        <Button onClick={() => addGroup()}>Dodaj grupe</Button>
        <SearchWrapper>
          <Button>Szukaj grupę</Button>
          <DateTimeWrapper>
            <div>
              <label>Od</label>
              <input type="date" onChange={(e) => setMinDate(e.target.value)} />
              <input type="time" onChange={(e) => setMaxDate(e.target.value)} />
            </div>
            <div>
              <label>Do</label>
              <input type="date" onChange={(e) => setMinTime(e.target.value)} />
              <input type="time" onChange={(e) => setMaxTime(e.target.value)} />
            </div>
          </DateTimeWrapper>
          <input
            type="text"
            placeholder="wpisz czego szukasz..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <SearchLocationInput
            handleLatitude={setLatitude}
            handleLongitude={setLongitude}
          />
        </SearchWrapper>
      </Container>
    );
  } else return <LoginView img={wyszukiwanie} signIn={signIn} />;
};

export default ProjectView;

const Container = styled.div`
  min-height: 92vh;
`;

const SearchWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const DateTimeWrapper = styled.div``;
