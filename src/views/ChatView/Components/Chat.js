import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { doc, updateDoc, arrayRemove } from 'firebase/firestore';
import styled from 'styled-components';
import { BsFillTrashFill } from 'react-icons/bs';
import { db } from '../../../firebase';
import ChatTextInput from './ChatTextInput';
import MessagesScreen from './MessagesScreen';
import { getCookie } from '../../../utils/getCookie';

const ChatPanel = ({ currentUser }) => {
  const location = useLocation();
  const navigate = useNavigate();

  let chatData = location.state;

  const leaveGroup = async () => {
    const cookieValue = getCookie();
    const groupRef = doc(db, 'groups', chatData.chatID);
    const data = {
      firebase_chat_id: chatData.chatID,
      email: currentUser,
    };

    try {
      await fetch('https://backend.szukamekipydo.pl/api/member/delete', {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `${cookieValue}`,
        },
        body: JSON.stringify(data),
      });

      await updateDoc(groupRef, {
        members: arrayRemove(currentUser),
      });
    } catch (e) {
      console.log(e);
    }

    navigate('/chat', {
      replace: true,
      state: null,
    });
  };

  return (
    <Container>
      <ChatWrapper>
        <ChatHeader>
          {chatData ? <p>{chatData.name}</p> : <p>Wybierz Grupę!</p>}
        </ChatHeader>
        <DeleteIcon onClick={() => leaveGroup()} />
        {chatData && (
          <>
            <MessagesScreen chatID={chatData.chatID} />
            <ChatTextInput chatID={chatData.chatID} />
          </>
        )}
      </ChatWrapper>
    </Container>
  );
};

export default ChatPanel;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ChatWrapper = styled.div`
  border: 1px solid black;
  position: relative;
  background-color: white;
  height: 50vh;
  border-radius: 20px;
  padding: 15px;
  border: none;
  z-index: 1;
  width: 500px;
  display: flex;
  @media (max-width: 768px) {
    width: 80%;
    justify-content: center;
  }
  overflow: hidden;
`;

const ChatHeader = styled.div`
  border-bottom: 1px solid black;
  z-index: 2;
  height: auto;
  width: 100%;
  background-color: #5603ad;
  position: absolute;
  top: 0;
  left: 0px;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
`;

const DeleteIcon = styled(BsFillTrashFill)`
  z-index: 3;
  cursor: pointer;
  box-sizing: content-box;
  position: absolute;
  height: 1.5em;
  width: 1.5em;
  padding: 5px;
  top: 4px;
  border-radius: 40%;
  transition: all 0.3s ease;
  color: white;
  right: 5px;

  :hover {
    background-color: #f6ae2d;
  }
`;
