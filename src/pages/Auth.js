import React, { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';

export const Auth = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/profile');
    } 
  }, [])
  


  const [email, setEmail] = useState();
  const [pass, setPass] = useState();


  console.log('email:', email);
  console.log('pass:', pass);
  console.log({email, pass});

  const inputHandler = (e) => {
    //console.log(e);
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value)
        break;

      case 'pass':
        setPass(e.target.value)
        break;
    
      default:
        console.error(`There's a problem. Please check the event listener.`);
        break;
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
  }

  const loginHandler = () => {
    //onsole.log(e);

    const url = 'http://localhost:8080/auth/login';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, pass})
    }

    //TODO: Adapt to the object with the status and msg. + token
    fetch(url, options)
      .then(response => response.json())
      .then(result => {
        if (result.token != undefined) {
          localStorage.setItem('token', result.token);
          localStorage.setItem('email', email);
          props.setEmail(email);
          navigate('/home');
        } else {
          alert(result.msg);
        }
        //alert(result);
      });
  }

  const registerHandler = () => {
    const url = 'http://localhost:8080/auth/register';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, pass})
    }

    fetch(url, options)
      .then(response => response.text())
      .then(result => {
        alert(result);
      });
  }

  return (
    <form onSubmit = {submitHandler} >
      <input 
        name = 'email'
        type = "email" 
        placeholder='Email Address' 
        value = { email } 
        onChange = { inputHandler } 
      />

      <input 
        name = 'pass'
        type = "password" 
        placeholder='Password' 
        value = { pass } 
        onChange = { inputHandler } />
        <div>
          <button onClick = { loginHandler }>Login</button>
          <button onClick = { registerHandler }>Register</button>
        </div>
    </form>
  )
}
