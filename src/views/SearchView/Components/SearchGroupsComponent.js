import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import SearchLocationInput from "../api/SearchLocationInput";
import { apiGetKeywords, apiSearchGroups } from "../api/apiFunctions";

const SearchGroupsComponent = ({
  latitude,
  longitude,
  keyWords,
  setLatitude,
  setLongitude,
  setKeyWords,
  setGroups,
  setSearched,
}) => {
  const [minDate, setMinDate] = useState();
  const [maxDate, setMaxDate] = useState();
  const [minTime, setMinTime] = useState();
  const [maxTime, setMaxTime] = useState();
  const [maxDistance, setMaxDistance] = useState();
  const [searchText, setSearchText] = useState("");
  const [wordsLoading, setWordsLoading] = useState(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setWordsLoading(true);
      apiGetKeywords(searchText).then(function (keywords) {
        setKeyWords(keywords);
        setWordsLoading(false);
      });
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [searchText]);

  const searchGroups = async (event) => {
    event.preventDefault();
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
      setGroups(response);
      setSearched(true);
    });
  };
  return (
    <Container>
      <Form onSubmit={(e) => searchGroups(e)}>
        <Input
          type="text"
          required="required"
          placeholder="wpisz czego szukasz..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        <DateTimeWrapper>
          <DateWrapper>
            <Label>Od</Label>
            <Input
              type="date"
              required="required"
              onChange={(e) => setMinDate(e.target.value)}
            />
            <Input
              type="time"
              required="required"
              onChange={(e) => setMinTime(e.target.value)}
            />
          </DateWrapper>
          <DateWrapper>
            <Label>Do</Label>
            <Input
              type="date"
              required="required"
              onChange={(e) => setMaxDate(e.target.value)}
            />
            <Input
              type="time"
              required="required"
              onChange={(e) => setMaxTime(e.target.value)}
            />
          </DateWrapper>
        </DateTimeWrapper>
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
        {wordsLoading ? (
          <Button disabled>Wyszkuje</Button>
        ) : (
          <Button type="submit">Szukaj grupę</Button>
        )}
      </Form>
    </Container>
  );
};

export default SearchGroupsComponent;

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
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
