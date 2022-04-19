import React, {useState} from 'react';

function Contact() {

  const [data, setData] = useState({});

  const submitHandler = () => {
    const url = 'http://localhost:8080/contactus';
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(url, options)
        .then(response => response.text())
        .then(result => {
            alert(result);
        });
  }

  const changeHandler = (e) => {
    const cloneData = {...data};
    //console.log(cloneData);
    cloneData[e.target.name] = e.target.value;
    setData(cloneData);
  }

  return (
    <div className='flex-col'>
        <input name = 'email' onChange={changeHandler} type="email" placeholder='example@email.com'/>
        <input name = 'fullName' onChange={changeHandler} type="text" placeholder='Full Name'/>
        <textarea name = 'msg' onChange={changeHandler} placeholder='Please type your message here...'/>
        <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Contact