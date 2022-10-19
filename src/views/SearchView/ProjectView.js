import React, { useState } from "react";
import styled from "styled-components";
import { collection, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../firebase";
import Button from "../../components/Button/Button";
import SearchLocationInput from "./SearchLocationInput";
import LoginView from "../LoginView/LoginView";
import wyszukiwanie from "../../assets/images/wyszukiwanie.svg";
import { getCookie } from "../../utils/getCookie";

const getWords = (
  text,
  latitude,
  longitude,
  minDate,
  maxDate,
  minTime,
  maxTime
) => {
  const data = {
    inputString: `${text}`,
    latitude: latitude,
    longitude: longitude,
    minDate: `${minDate}`,
    maxDate: `${maxDate}`,
    minTime: `${minTime}`,
    maxTime: `${maxTime}`,
  };

  console.log(data);

  const cookieValue = getCookie();
  fetch("https://backend.szukamekipydo.pl/api/keyword", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `${cookieValue}`,
    },
    body: JSON.stringify(data),
  })
    .then((respnose) => respnose.json())
    .then((data) => {
      console.log(data);
    });
};

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

  const submitSearchGroups = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

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
          <Button
            onClick={() =>
              getWords(
                searchText,
                latitude,
                longitude,
                minDate,
                maxDate,
                minTime,
                maxTime
              )
            }
          >
            POBIRAJ SŁOWA
          </Button>
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
          <form onSubmit={(e) => submitSearchGroups(e)}>
            <input
              type="text"
              placeholder="wpisz czego szukasz..."
              onChange={(e) => setSearchText(e.target.value)}
            />
            <input type="submit" value="Szukaj"></input>
          </form>
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
