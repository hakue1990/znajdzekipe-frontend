import './App.css';
import {  Route, Routes,useRoutes} from 'react-router-dom';
import HomeView from '../HomeView/HomeView';
import ChatView from '../ChatView/ChatView';
import ContactView from '../ContactView/ContactView';


const  App =() =>  {
  return (
    <Routes> 
      <Route path='/'element={<HomeView/>}/>
      <Route path='/chat' element={<ChatView/>}/>
      <Route path='/contact' element={<ContactView/>}/>
    </Routes>
  );
}

export default App;
