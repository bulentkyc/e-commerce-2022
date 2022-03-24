import React from 'react';
import CountController from './CountController';
import './HCard.css'

function HCard({item, cart, setCart}) {
    return (
        <div className='HCard'>
            <img src = {item.imgURL} />
            <section>
                <h1>{item.model}</h1>
                <p>{item.price}</p>
            </section>
            <section className='counter'>
                <CountController item = {item} cart = {cart} setCart = {setCart} />
            </section>
        </div>
    )
}

export default HCard