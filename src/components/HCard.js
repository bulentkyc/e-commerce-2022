import React from 'react';
import './HCard.css'

function HCard({item}) {
    return (
        <div className='HCard'>
            <img src = {item.imgURL} />
            <section>
                <h1>{item.model}</h1>
                <p>{item.price}</p>
            </section>
            <section className='counter'>
                Counter: {item.count}
            </section>
        </div>
    )
}

export default HCard