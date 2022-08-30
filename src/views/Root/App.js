import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeView from "../HomeView/HomeView";
import ChatView from "../ChatView/ChatView";
import ContactView from "../ContactView/ContactView";
import Navigation from "../../components/Navigation/Navigation";
import ProjectView from "../ProjectView/ProjectView";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/chat" element={<ChatView />} />
        <Route path="/search" element={<ProjectView />} />
        <Route path="/contact" element={<ContactView />} />
      </Routes>
    </>
  );
};

export default App;
