import './App.css';
import {Auth} from './pages/Auth';
import {Home} from './pages/Home';
import {Navbar} from './components/Navbar';
import { Routes, Route} from 'react-router-dom';
import Profile from './pages/Profile';
import {useState} from 'react';


function App() {

  const [email, setEmail] = useState(localStorage.getItem('email'));
  

  return (
    <div className="App">
      <Navbar email = {email} setEmail = {setEmail}/>
      <Routes>
        <Route path='/home' element = {<Home />} />
        <Route path='/login' element = {<Auth setEmail = {setEmail} />} />
        <Route path='/profile' element = {<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
