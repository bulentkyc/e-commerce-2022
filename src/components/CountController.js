import React from 'react'

function CountController({item, cart, setCart}) {
    const decrease = () => {
        const copyCart = [...cart];
        const foundItem = copyCart.find(product => item.model == product.model);
        if (foundItem.count > 1) {
            foundItem.count--;
            setCart(copyCart);
        } else {
            const foundIndex = copyCart.findIndex(product => item.model == product.model)
            copyCart.splice(foundIndex, 1);
            setCart(copyCart);
        }
    }

    const increase = () => {
        const copyCart = [...cart];
        const foundItem = copyCart.find(product => item.model == product.model);
        foundItem.count++;
        setCart(copyCart);
    }

    return (
        <div>
            <button onClick={decrease} >-</button>
            <span>{item.count}</span>
            <button onClick={increase}>+</button>
        </div>
    )
}

export default CountController