import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { apiAddGroup } from "./apiFunctions";
import Button from "../../components/Button/Button";

const AddGroupComponent = ({
  latitude,
  longitude,
  keyWords,
  setAddGroupView,
}) => {
  const [user, loading, error] = useAuthState(auth);
  const [groupName, setGroupName] = useState("");
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

      const seperateKeywords = [];
      for (const [key, value] of Object.entries(keyWords)) {
        if (value) seperateKeywords.push(value[0]);
      }

      apiAddGroup(
        docRef.id,
        groupName,
        latitude,
        longitude,
        eventDate,
        eventTime,
        groupMaxMembers,
        user.email,
        user.email,
        seperateKeywords
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
      <button onClick={() => setAddGroupView(false)}>Wyjdź</button>
      <p>Testowe tworzenie grupy, żeby nie było samych testów</p>
      <AddGroupViewForm onSubmit={(e) => addGroup(e)}>
        <Label>Nazwa: </Label>
        <Input
          type="text"
          required="required"
          onChange={(e) => setGroupName(e.target.value)}
        />
        <Label>Dzień: </Label>
        <Input
          type="date"
          required="required"
          onChange={(e) => setEventDate(e.target.value)}
        />
        <Label>Godzina: </Label>
        <Input
          type="time"
          required="required"
          onChange={(e) => setEventTime(e.target.value)}
        />
        <Label>Max liczba członków: </Label>
        <Input
          type="number"
          required="required"
          onChange={(e) => setGroupMaxMembers(e.target.value)}
        />
        <Button type="submit">Stwórz grupę</Button>
      </AddGroupViewForm>
    </Container>
  );
};

export default AddGroupComponent;

const Container = styled.div`
  position: fixed;
  height: auto;
  width: auto;
  padding: 20px;
  background-color: gray;
  z-index: 999;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const AddGroupViewForm = styled.form`
  display: flex;
  flex-direction: column;
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
