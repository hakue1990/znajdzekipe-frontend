import React from "react";
import styled from "styled-components";
import { auth } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import moment from "moment";

const Message = ({ data }) => {
  const [user] = useAuthState(auth);

  const whoIs = user.email === data.creator;

  const TypeOfMessage = whoIs ? SenderMessageElement : RecieverMessageElement;
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

const MessageElement = styled.p`
  width: fit-content;
  border-radius: 8px;
  margin: 10px;
  min-width: 60px;
  max-width: 100%;
  overflow-wrap: break-word;
  display: flex;
  flex-direction: column;
`;

const SenderMessageElement = styled(MessageElement)`
  padding: 15px 15px 15px;
  text-align: right;
  margin-left: auto;
  background-color: #dcf8c6;
`;

const RecieverMessageElement = styled(MessageElement)`
  padding: 7px 15px 15px 15px;
  text-align: right;
  background-color: whitesmoke;
  text-align: left;
`;

const RecieverDisplayName = styled.span`
  color: grey;
  font-size: 9px;
  text-align: left;
  margin-bottom: 3px;
`;

const Timestamp = styled.span`
  color: grey;
  font-size: 9px;
  margin-top: 7px;
`;

const SenderTimestamp = styled(Timestamp)`
  text-align: right;
`;

const RecieverTimestamp = styled(Timestamp)`
  text-align: left;
`;
