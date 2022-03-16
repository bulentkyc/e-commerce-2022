import React from 'react'

const Cart = (props) => {
  return (
    <div>
        <h1>Cart</h1>
        {JSON.stringify(props.cart)}
    </div>
  )
}

export default Cart