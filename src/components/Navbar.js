import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    return (
        <ul className='navbar'>
            <li>
                <Link to={"/home"}>Home</Link>
            </li>
            <li>
                <Link to={"/login"}>Login</Link>
            </li>
        </ul>
    )
}
