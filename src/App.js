import './App.css';
import {Auth} from './pages/Auth';
import {Home} from './pages/Home';
import {Navbar} from './components/Navbar';
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/home' element = {<Home />} />
        <Route path='/login' element = {<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
