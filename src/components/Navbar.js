import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = (props) => {
    
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        props.setEmail('');
    }

    const loginBtn = <Link to={"/login"}>Login</Link>;
    const logoutBtn = <button onClick={logout}>Logout</button>;

    return (
        <ul className='navbar'>
            <li>
                <Link to={"/home"}>Home</Link>
            </li>
            <li>
                <Link to={"/profile"}>Profile</Link>
            </li>
            <section>
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
