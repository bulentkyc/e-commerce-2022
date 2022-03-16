import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = (props) => {
    
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        props.setEmail('');
        window.location.reload();
    }

    const loginBtn = <Link to={"/login"}>Login</Link>;
    const logoutBtn = <button onClick={logout}>Logout</button>;

    return (
        <ul className='navbar'>
            <li>
                <Link to={"/home"}>Home</Link>
            </li>
            {localStorage.getItem('token')?
            <li>
                <Link to={"/profile"}>Profile</Link>
            </li>
            :''}
            <section>
                <li className='active'>
                    <Link to={"/cart"}>🛒 {props.cartCounter} </Link>
                </li>
                <li>
                    {localStorage.getItem('token')?logoutBtn:loginBtn}
                </li>
                <li>
                    {props.email}
                </li>
            </section>
        </ul>
    )
}
