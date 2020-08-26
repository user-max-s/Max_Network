import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = (props) => {
    return (
        <nav className="nav">
            <ul className="menu">
                <li><NavLink to="profile" className="menu__item">Profile</NavLink></li>
                <li><NavLink to="dialogs" className="menu__item">Dialogs</NavLink></li>
                <li><NavLink to="news" className="menu__item">News</NavLink></li>
                <li><NavLink to="music" className="menu__item">Music</NavLink></li>
                <li><NavLink to="settings" className="menu__item">Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar; 