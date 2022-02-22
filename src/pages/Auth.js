import React, { useState } from 'react';

export const Auth = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  console.log('email:', email);
  console.log('pass:', pass);

  const inputHandler = (e) => {
    console.log(e);
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

    const url = 'http://localhost:8080/auth/login';
    const options = {
      method: 'POST'
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
      <button>Login</button>
    </form>
  )
}