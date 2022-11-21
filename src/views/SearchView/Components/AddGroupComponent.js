import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../../../firebase";
import { apiAddGroup } from "../api/apiFunctions";
import Button from "../../../components/Button/Button";
import Title from "../../../components/Title/Title";

const AddGroupComponent = ({
  latitude,
  longitude,
  keyWords,
  setAddGroupView,
}) => {
  const [user, loading, error] = useAuthState(auth);
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [eventDate, setEventDate] = useState();
  const [eventTime, setEventTime] = useState();
  const [groupMaxMembers, setGroupMaxMembers] = useState();

  const addGroup = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "groups"), {
        name: `${groupName}`,
        kategoria: "Lorem",
        members: [user.email],
        owner: [user.email],
      });
      console.log("Document written with ID: ", docRef.id);

      apiAddGroup(
        docRef.id,
        groupName,
        groupDescription,
        latitude,
        longitude,
        eventDate,
        eventTime,
        groupMaxMembers,
        user.email,
        user.email,
        keyWords
      ).then(function (response) {
        console.log(response);
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setAddGroupView(false);
  };

  return (
    <Container>
      <Wrapper>
        <BackArrow size={35} onClick={() => setAddGroupView(false)} />
        <Title color="black">Stwórz swoją własną grupę!</Title>
        <KeyWordsWrapper>
          <b>Słowa kluczowe:</b>
          {keyWords.map((text) => (
            <KewWordsText>{text}</KewWordsText>
          ))}
        </KeyWordsWrapper>
        <AddGroupViewForm onSubmit={(e) => addGroup(e)}>
          <Label>Nazwa grupy: </Label>
          <Input
            type="text"
            required="required"
            width="100%"
            onChange={(e) => setGroupName(e.target.value)}
          />
          <Label>Opis grupy: </Label>
          <Input
            type="text"
            required="required"
            width="100%"
            onChange={(e) => setGroupDescription(e.target.value)}
          />
          <Label>Dzień: </Label>
          <Input
            type="date"
            required="required"
            width="150px"
            onChange={(e) => setEventDate(e.target.value)}
          />
          <Label>Godzina: </Label>
          <Input
            type="time"
            required="required"
            width="150px"
            onChange={(e) => setEventTime(e.target.value)}
          />
          <Label>Maksymalna liczba członków: </Label>
          <Input
            type="number"
            required="required"
            width="150px"
            onChange={(e) => setGroupMaxMembers(e.target.value)}
          />
          <CreateButton type="submit">Stwórz grupę</CreateButton>
        </AddGroupViewForm>
      </Wrapper>
    </Container>
  );
};

export default AddGroupComponent;

const Container = styled.div`
  position: fixed;
  height: auto;
  width: auto;
  padding: 10px;
  background-color: #5603ad;
  z-index: 9199;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
`;

const Wrapper = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 50px;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const AddGroupViewForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  z-index: 1;
  color: white;
  margin: 20px;
  color: black;
`;
const Input = styled.input`
  z-index: 1;
  padding: 5px;
  width: ${({ width }) => width};
  border: 3px solid currentColor;
  outline: none;
`;

const CreateButton = styled(Button)`
  margin-top: 30px;
`;

const BackArrow = styled(BiArrowBack)`
  background-color: #f6ae2d;
  border-radius: 50%;
  cursor: pointer;
  margin-bottom: 15px;
  transition: all 0.5s;
  &:hover {
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: 0.1s;
    background-color: #87d68d;
  }
`;

const KeyWordsWrapper = styled.div`
  width: 80%;
  text-align: left;
  margin: 15px 0 15px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const KewWordsText = styled.span`
  margin-top: 5px;
  margin-left: 10px;
  background-color: lightgray;
  padding: 2px 3px 3px 3px;
  border-radius: 5px;
`;
