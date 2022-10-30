import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import SearchLocationInput from "./SearchLocationInput";
import { apiGetKeywords, apiSearchGroups } from "./apiFunctions";

const SearchGroupsComponent = ({
  latitude,
  longitude,
  keyWords,
  setLatitude,
  setLongitude,
  setKeyWords,
}) => {
  const [minDate, setMinDate] = useState();
  const [maxDate, setMaxDate] = useState();
  const [minTime, setMinTime] = useState();
  const [maxTime, setMaxTime] = useState();
  const [maxDistance, setMaxDistance] = useState();
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      apiGetKeywords(searchText).then(function (keywords) {
        setKeyWords(keywords);
      });
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [searchText]);

  const searchGroups = async () => {
    const seperateKeywords = [];
    for (const [key, value] of Object.entries(keyWords)) {
      if (value) seperateKeywords.push(value[1]);
    }
    apiSearchGroups(
      latitude,
      longitude,
      maxDistance,
      minDate,
      maxDate,
      minTime,
      maxTime,
      seperateKeywords
    ).then(function (response) {
      console.log(response);
    });
  };
  return (
    <Container>
      <Button onClick={() => searchGroups()}>Szukaj grupę</Button>
      <DateTimeWrapper>
        <DateWrapper>
          <Label>Od</Label>
          <Input type="date" onChange={(e) => setMinDate(e.target.value)} />
          <Input type="time" onChange={(e) => setMinTime(e.target.value)} />
        </DateWrapper>
        <DateWrapper>
          <Label>Do</Label>
          <Input type="date" onChange={(e) => setMaxDate(e.target.value)} />
          <Input type="time" onChange={(e) => setMaxTime(e.target.value)} />
        </DateWrapper>
      </DateTimeWrapper>
      <Input
        type="text"
        placeholder="wpisz czego szukasz..."
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Label>Wybierz lokalizację: </Label>
      <SearchLocationInput
        handleLatitude={setLatitude}
        handleLongitude={setLongitude}
      />
      <Label>Max dystans w KM: </Label>
      <Input
        type="number"
        required="required"
        onChange={(e) => setMaxDistance(e.target.value)}
      />
    </Container>
  );
};

export default SearchGroupsComponent;

const Container = styled.div`
  width: 30vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
`;

const Label = styled.label`
  z-index: 1;
  color: white;
  margin: 20px;
`;
const Input = styled.input`
  z-index: 1;
  padding: 5px;
`;

const DateTimeWrapper = styled.div`
  z-index: 1;
`;
const DateWrapper = styled.div`
  z-index: 1;
`;
