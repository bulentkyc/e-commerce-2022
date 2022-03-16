import './App.css';
import {Auth} from './pages/Auth';
import {Home} from './pages/Home';
import {Navbar} from './components/Navbar';
import { Routes, Route} from 'react-router-dom';
import Profile from './pages/Profile';
import {useState} from 'react';
import Cart from './pages/Cart';


function App() {

  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [cart, setCart] = useState([]);
  
  return (
    <div className="App">
      <Navbar email = {email} setEmail = {setEmail} cartCounter = {cart.length} />
      <Routes>
        <Route path='/home' element = {<Home setEmail = {setEmail} cart = {cart} setCart = {setCart} />} />
        {/* <Route path='/login' element = {email == ''?<Auth setEmail = {setEmail} />:<Profile />} /> */}
        <Route path='/login' element = {<Auth setEmail = {setEmail} />} />
        <Route path='/profile' element = {<Profile />} />
        <Route path='/cart' element = {<Cart cart = {cart} />} />
      </Routes>
    </div>
  );
}

export default App;
