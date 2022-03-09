import './App.css';
import {Auth} from './pages/Auth';
import {Home} from './pages/Home';
import {Navbar} from './components/Navbar';
import { Routes, Route} from 'react-router-dom';
import Profile from './pages/Profile';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/home' element = {<Home />} />
        <Route path='/login' element = {<Auth />} />
        <Route path='/profile' element = {<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
