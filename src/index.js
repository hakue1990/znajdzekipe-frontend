import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./views/Root/App";
import GlobalStyle from "./theme/GlobalStyle";
// import { CookiesProvider } from "react-cookie";

import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <GlobalStyle />
    {/* <CookiesProvider> */}
      <App />
    {/* </CookiesProvider> */}
    <Footer />
  </Router>
);
