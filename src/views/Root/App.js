import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeView from '../HomeView/HomeView';
import ChatView from '../ChatView/ChatView';
import ContactView from '../ContactView/ContactView';
import Navigation from '../../components/Navigation/Navigation';
import ProjectView from '../SearchView/ProjectView';

import { setCookie } from '../../utils/setCookie';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../../firebase';
import styled from 'styled-components';

const postData = (accessToken) => {
  fetch('https://backend.szukamekipydo.pl/api/login', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      idToken: `${accessToken}`,
    },
  })
    .then((respnose) => respnose.json())
    .then((data) => {
      console.log(data);
      setCookie(data.Authorization, data.expires_at);
    });
};

const App = () => {
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data.user.accessToken);
        postData(data.user.accessToken);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const AppContainer = styled.div`
    overflow-x: hidden;
    width: 100vw;
  `;
  return (
    <AppContainer>
      <Navigation signIn={signIn} logOut={logOut} />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route
          path='/chat'
          element={<ChatView signIn={signIn} logOut={logOut} />}
        />
        <Route
          path='/search'
          element={<ProjectView signIn={signIn} logOut={logOut} />}
        />
        <Route path='/contact' element={<ContactView />} />
      </Routes>
    </AppContainer>
  );
};

export default App;
