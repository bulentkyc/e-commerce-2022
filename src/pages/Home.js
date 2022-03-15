import React from 'react';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

export const Home = () => {
   //TODO: Fetch the real data from api endpoint instead the dummy below. 
    /* 
    const iphones = [
        {
            model: 'X',
            color: 'White',
            price: '700$',
            imgURL: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        },
        {
            model: 'XS',
            color: 'White',
            price: '500$',
            imgURL: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
        },
        {
            model: '13 Pro',
            color: 'White',
            price: '1500$',
            imgURL: 'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80'
        },
        {
            model: '13 Pro',
            color: 'White',
            price: '1500$',
            imgURL: 'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80'
        }
    ];
    */

    const [iphones, setIphones] = useState([]);
    //let iphones = ['test'];

    const [loginMsg, setLoginMsg] = useState('');

    useEffect(() => {
        console.log(localStorage.getItem('token'));
        if (!localStorage.getItem('token')) {
            setLoginMsg(<p>You should <Link to={'/login'} >login</Link> to see our products!</p>);
        } else {
            fetch('http://localhost:8080/api/iphone', {
                method: 'GET',
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            })
                .then(response => response.json())
                .then(result => {
                console.log(result);
                setIphones(result);
                console.log('iphones: ', iphones);
            });
        }
    }, []);


    const prodCards = iphones.map( (item, index) => 
    <div className='prodCard' key={index}>
    <h3>{item.model}</h3>
    <img src={item.imgURL} />
    <p>{item.price}</p>
    <button>Add to Cart</button>
    </div>
    );

    console.log(prodCards);

    /* const prodCards = iphones.map( function (item) {
    return item.model
    }); */

    return (
        <div className="App">
        {prodCards}
        {loginMsg}
        </div>
    );
}
