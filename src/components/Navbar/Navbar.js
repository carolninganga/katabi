import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function Navbar() {
    return (
        <nav>
            <div className="container">
                {/* <a href="/" className="brand-logo"></a> */}
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
