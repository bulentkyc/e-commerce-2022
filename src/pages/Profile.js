import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Profile = () => {

    const [avatarUrl, setAvatarUrl] = useState('https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png');
    const [avatarFile, setAvatarFile] = useState();
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [postCode, setPostCode] = useState('');
    const [loginMsg, setLoginMsg] = useState('');

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            setLoginMsg(<p className='fullScreenText'>You should <Link to={'/login'} >login</Link> to see your profile!</p>);
        } else {
            fetch('http://localhost:8080/profile/get', {
                method: 'GET',
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            })
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    setName(result.data.name);
                    setBirthDate(result.data.birthDate);
                    setStreet(result.data.street);
                    setCity(result.data.city);
                    setPostCode(result.data.postCode);
            });
        }
    }, []);
    
    const inputHandler = (e) => {
        //console.log(e);
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
            break;

            case 'birthDate':
                setBirthDate(e.target.value);
            break;

            case 'street':
                setStreet(e.target.value);
            break;

            case 'city':
                setCity(e.target.value);
            break;

            case 'postCode':
                setPostCode(e.target.value);
            break;
        
            default:
                console.error(`There's a problem. Please check the event listener.`);
            break;
        }
    }

    const saveHandler = () => {
        const formData = new FormData();
        formData.append('avatarFile', avatarFile);
        formData.append('name', name);
        formData.append('birthDate', birthDate);
        formData.append('street', street);
        formData.append('city', city);
        formData.append('postCode', postCode);

        const url = 'http://localhost:8080/profile/save';
        const options = {
            method: 'POST',
            headers: {
                'x-auth-token': localStorage.getItem('token')
            },
            body: formData
        }

        fetch(url, options)
            .then(response => response.text())
            .then(result => {
            alert(result);
            });
    }

    const fileHandler = (e) => {
        setAvatarFile(e.target.files[0]);
    }

    return (
        <div className='flex-col'>

            {loginMsg != ''?loginMsg
            :
            <section className='flex-col'>
                <h1>Profile</h1>
                <img className = 'avatar' src={avatarUrl} />
                <input id='uploader' type='file' onChange = {fileHandler} />
                <input type='text' name='name' placeholder='Name' value={name} onChange={inputHandler}/>
                <input type='text' name='birthDate' placeholder='Birth date' value={birthDate} onChange={inputHandler}/>
                <input type='text' name='street' placeholder='Street' value={street} onChange={inputHandler}/>
                <input type='text' name='city' placeholder='City' value={city} onChange={inputHandler}/>
                <input type='text' name='postCode' placeholder='Postcode' value={postCode} onChange={inputHandler}/>
                <button onClick={saveHandler}>Save</button>
            </section>
            }
        </div>
    )
}

export default Profile