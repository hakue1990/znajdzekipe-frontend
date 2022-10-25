import React from "react";
import styled from "styled-components";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import moment from "moment";

const Message = ({ data }) => {
  const [user] = useAuthState(auth);

  const whoIs = user.email === data.creator;

  const TypeOfMessage = whoIs ? Sender : Reciever;
  const TypeOfTimestamp = whoIs ? SenderTimestamp : RecieverTimestamp;
  const time = moment(data.timestamp?.toDate()).format("HH:mm");

  return (
    <ContainerReciever>
      <TypeOfMessage>
        {!whoIs && (
          <RecieverDisplayName>{data?.creatorName}</RecieverDisplayName>
        )}
        {data.text}
        <TypeOfTimestamp>{time}</TypeOfTimestamp>
      </TypeOfMessage>
    </ContainerReciever>
  );
};

export default Message;

const ContainerReciever = styled.div``;

const UserImage = styled.img`
  background-color: black;
  width: 13px;
  height: 13px;
  border-radius: 10px;
`;

const MessageElement = styled.p`
  width: fit-content;
  padding: 15px;
  border-radius: 8px;
  margin: 10px;
  min-width: 60px;
  max-width: 80%;
  padding-bottom: 26px;
  position: relative;
  text-align: right;
  overflow-wrap: break-word;
`;
const Sender = styled(MessageElement)`
  margin-left: auto;
  background-color: #dcf8c6;
`;
const Reciever = styled(MessageElement)`
  background-color: whitesmoke;
  text-align: left;
`;

const RecieverDisplayName = styled.span`
  color: grey;
  padding: 5px;
  font-size: 9px;
  position: absolute;
  top: 0;
  text-align: left;
  left: 0;
`;

const Timestamp = styled.span`
  color: grey;
  padding: 10px;
  font-size: 9px;
  position: absolute;
  bottom: 0;
`;

const SenderTimestamp = styled(Timestamp)`
  text-align: right;
  right: 0;
`;

const RecieverTimestamp = styled(Timestamp)`
  text-align: left;
  left: 0;
`;
