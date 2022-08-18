import './App.css'; 
import {  Route, Routes} from 'react-router-dom';
import HomeView from '../HomeView/HomeView';
import ChatView from '../ChatView/ChatView';
import ContactView from '../ContactView/ContactView';
import Button from '../../components/Button/Button';
import Navigation from '../../components/Navigation/Navigation';


const  App =() =>  {
  return (
    <>
    <Navigation/>
    <Button>siema projekt</Button>
  <Routes>
    <Route path="/" element={<HomeView />}/>
    <Route path="/chat" element={<ChatView />}/>
    <Route path="/contact" element={<ContactView />}/>
  </Routes>
    </>
  );
}

export default App;
