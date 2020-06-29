import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function Navbar() {
    return (
        <nav>
            <div className="container">
            <img src="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2FScreen_Shot_2020-06-29_at_4-removebg-preview.png?v=1593461018232" width="60" alt="logo" />
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;
