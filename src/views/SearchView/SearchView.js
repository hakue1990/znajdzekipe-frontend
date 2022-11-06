import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import LoginView from '../LoginView/LoginView';
import wyszukiwanie from '../../assets/images/wyszukiwanie.svg';
import BG from '../../assets/images/pattern.png';
import AddGroupComponent from './Components/AddGroupComponent';
import SearchGroupsComponent from './Components/SearchGroupsComponent';
import GroupsComponent from './Components/GroupsComponent';
import poolImg from './../../assets/images/pool.svg';

const SearchView = ({ signIn }) => {
  const [user, loading, error] = useAuthState(auth);
  const [addGroupView, setAddGroupView] = useState(false);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [keyWords, setKeyWords] = useState();
  const [groups, setGroups] = useState([]);
  const [searched, setSearched] = useState(false);

  if (loading)
    return (
      <Container>
        <h1>Checking user</h1>
      </Container>
    );

  if (user) {
    return (
      <Container>
        <Row>
          {addGroupView && (
            <AddGroupComponent
              latitude={latitude}
              longitude={longitude}
              keyWords={keyWords}
              setAddGroupView={setAddGroupView}
            />
          )}
          <SearchGroupsComponent
            latitude={latitude}
            longitude={longitude}
            keyWords={keyWords}
            setLatitude={setLatitude}
            setLongitude={setLongitude}
            setKeyWords={setKeyWords}
            setGroups={setGroups}
            setSearched={setSearched}
          />
          <GroupsComponent
            groups={groups}
            setAddGroupView={setAddGroupView}
            searched={searched}
          />
        </Row>
        <RightRow>
          <img src={poolImg} alt='man into a pool' />
        </RightRow>
      </Container>
    );
  } else return <LoginView img={wyszukiwanie} signIn={signIn} />;
};

export default SearchView;

const Container = styled.div`
  min-height: 92vh;
  position: relative;
  background: url(${BG});
  display: flex;
  flex-direction: row;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.8;
    pointer-events: none;
  }
  @media (max-width: 768px) {
    width: 100vw;
    flex-direction: column;
  }
`;
const Row = styled.div`
  width: 60%;
  height: 92vh;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 60%;
    right: -100px;
    position: relative;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const RightRow = styled(Row)`
  width: 40%;
  @media (max-width: 768px) {
    display: none;
  }
`;
