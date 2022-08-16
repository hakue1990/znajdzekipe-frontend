import './App.css';
import Button from './../../components/Button/Button';
import { BrowserRouter, Route} from 'react-router-dom';
import HomeView from '../HomeView/HomeView';
import ChatView from '../ChatView/ChatView';
import ContactView from '../ContactView/ContactView';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <>
      <Route exact path='/' component={HomeView}/>
      <Route path='/chat' component={ChatView}/>
      <Route path='/contact' component={ContactView}/>
      </>
      </BrowserRouter>
      <h1>znajdź ekipę</h1>
      <Button>Znajdź ekipę</Button>
    </div>
  );
}

export default App;
