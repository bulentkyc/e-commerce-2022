import React from 'react'
import HCard from '../components/HCard';

const Cart = (props) => {

  const items = props.cart.map(item => <HCard item = {item} cart = {props.cart} setCart = {props.setCart}  />);

  return (
    <div className='cart'>
        <h1>Cart</h1>
        {items}
    </div>
  )
}

export default Cart