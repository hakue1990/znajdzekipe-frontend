import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button/Button';
import SearchLocationInput from '../api/SearchLocationInput';
import { apiGetKeywords, apiSearchGroups } from '../api/apiFunctions';

import Title from '../../../components/Title/Title';

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
  const [searchText, setSearchText] = useState('');
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
      if (Array.isArray(response)) setGroups(response);
      setSearched(true);
    });
  };
  return (
    <Container>
      <Form onSubmit={(e) => searchGroups(e)}>
        <Title color='black'>tutaj możesz znależć ekipe ❤️</Title>
        <Input
          type='text'
          required='required'
          placeholder='wpisz czego szukasz...'
          onChange={(e) => setSearchText(e.target.value)}
        />
        <DateTimeWrapper>
          <DateWrapper>
            <Label>Od</Label>
            <Input
              type='date'
              required='required'
              onChange={(e) => setMinDate(e.target.value)}
            />
            <Input
              type='time'
              required='required'
              onChange={(e) => setMinTime(e.target.value)}
            />
          </DateWrapper>
          <DateWrapper>
            <Label>Do</Label>
            <Input
              type='date'
              required='required'
              onChange={(e) => setMaxDate(e.target.value)}
            />
            <Input
              type='time'
              required='required'
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
          type='number'
          required='required'
          onChange={(e) => setMaxDistance(e.target.value)}
        />
        {wordsLoading ? (
          <Button disabled>Wyszkuje</Button>
        ) : (
          <Button type='submit' width='180px'>
            Szukaj grupę
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default SearchGroupsComponent;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  padding: 20px 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Form = styled.form`
  width: 450px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  background-color: white;
  margin-top: 20px;
  padding: 15px 22px;
  border-radius: 20px;
  color: black;
`;

const Label = styled.label`
  z-index: 1;
  color: black;
  margin: 20px;
`;
const Input = styled.input`
  z-index: 1;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  outline: none;
  border: 1px solid black;
  margin: 5px;
`;

const DateTimeWrapper = styled.div`
  z-index: 1;
`;
const DateWrapper = styled.div`
  z-index: 1;
`;
