import './App.css';
import {Auth} from './pages/Auth';
import {Home} from './pages/Home';
import {Navbar} from './components/Navbar';
import { Routes, Route} from 'react-router-dom';
import Profile from './pages/Profile';
import {useState, useEffect, useRef} from 'react';
import Cart from './pages/Cart';
import Contact from './pages/Contact';

let counter = 0;

function App() {

  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [cart, setCart] = useState([]);
  const [isDone, setIsDone] = useState(false);

  let isTheFirstRun = false;

  //read from the local storage
  useEffect(() => {
    isTheFirstRun = true;
    /*
    TODO:
    1. Check if user loggedin?
      1.a. If yes, Fetch DB and replace with local storage.
      1.b. If no, Fetch DB and merge with the cart in the localstorage
    2. Update the state with the local storage
    */

    if(localStorage.getItem('token')) {
      fetch('http://localhost:8080/cart/get', {
              method: 'GET',
              headers: {
                  'x-auth-token': localStorage.getItem('token')
              }
          })
              .then(response => response.json())
              .then(result => {
                  console.log(result);
                  if (result.status === 'success') {
                    localStorage.setItem('cart', JSON.stringify(result.data));
                    setCart( result.data );
                    setIsDone(true);
                  } else {
                    alert(result.msg);
                  }
          }
        );
    }

    /* if (JSON.parse(localStorage.getItem('cart'))) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    } */
    /* alert('Mounted') */

  }, []);

  useEffect(() => {
    counter++;
    console.log(counter);
    console.log('isTheFirstRun', isTheFirstRun)
    console.log('isDone',isDone)
    /* alert('Updated') */
  })
  
  //Write to the local storage
  useEffect(() => {
    
    if (!isTheFirstRun && isDone) {
      /* alert('Cart') */
      //TODO: Solve problem with the empty state

        localStorage.setItem('cart', JSON.stringify(cart));
        
        const url = 'http://localhost:8080/cart/save';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({basket: cart})
        }

        fetch(url, options)
            .then(response => response.text())
            .then(result => {
            //alert(result);
            });
    }
  }, [cart]);





  let totalCount = 0;

  cart.forEach(item => totalCount += item.count);
  
  return (
    <div className="App">
      <Navbar email = {email} setEmail = {setEmail} cartCounter = {totalCount} />
      <Routes>
        <Route path='/' element = {<Home setEmail = {setEmail} cart = {cart} setCart = {setCart} />} />
        <Route path='/home' element = {<Home setEmail = {setEmail} cart = {cart} setCart = {setCart} />} />
        {/* <Route path='/login' element = {email == ''?<Auth setEmail = {setEmail} />:<Profile />} /> */}
        <Route path='/login' element = {<Auth setEmail = {setEmail} />} />
        <Route path='/profile' element = {<Profile />} />
        <Route path='/cart' element = {<Cart cart = {cart} setCart = {setCart} />} />
        <Route path='/contact' element = {<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
