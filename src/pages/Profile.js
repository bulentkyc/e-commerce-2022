import React, {useState} from 'react';

const Profile = () => {

    const [name, setName] = useState();
    const [birthDate, setBirthDate] = useState();
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [postCode, setPostCode] = useState();

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
        const url = 'http://localhost:8080/profile/save';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,birthDate,street,city,postCode})
        }

        fetch(url, options)
            .then(response => response.text())
            .then(result => {
            alert(result);
            });
    }

    return (
        <div className='flex-col'>
            <h1>Profile</h1>
            <input type='text' name='name' placeholder='Name' value={name} onChange={inputHandler}/>
            <input type='text' name='birthDate' placeholder='Birth date' value={birthDate} onChange={inputHandler}/>
            <input type='text' name='street' placeholder='Street' value={street} onChange={inputHandler}/>
            <input type='text' name='city' placeholder='City' value={city} onChange={inputHandler}/>
            <input type='text' name='postCode' placeholder='Postcode' value={postCode} onChange={inputHandler}/>
            <button onClick={saveHandler}>Save</button>
        </div>
    )
}

export default Profile