import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeView from "../HomeView/HomeView";
import ChatView from "../ChatView/ChatView";
import ContactView from "../ContactView/ContactView";
import Navigation from "../../components/Navigation/Navigation";
import SearchView from "../SearchView/SearchView";

import { setCookie } from "../../utils/setCookie";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../firebase";
import styled from "styled-components";

import CookieConsent from "react-cookie-consent";

const postData = (accessToken) => {
  fetch("https://backend.szukamekipydo.pl/api/login", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
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
        <Route path="/" element={<HomeView />} />
        <Route
          path="/chat"
          element={<ChatView signIn={signIn} logOut={logOut} />}
        />
        <Route
          path="/search"
          element={<SearchView signIn={signIn} logOut={logOut} />}
        />
        <Route path="/contact" element={<ContactView />} />
      </Routes>
      <CookieConsent
        location="bottom"
        buttonText="Akceptuje"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#45798a" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Ta strona używa ciasteczek Cookie, poznaj naszą politykę prywatności!{" "}
        <span style={{ fontSize: "10px" }}>
          Dane przekazujemy zaufanym partnerom !
        </span>
      </CookieConsent>
    </AppContainer>
  );
};

export default App;
