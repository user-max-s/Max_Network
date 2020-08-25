import React from 'react';

const Navbar = (props) => {
    return (
        <nav className="nav">
            <ul className="menu">
                <li><a href="#" className="menu__item">Profile</a></li>
                <li><a href="#" className="menu__item">Messages</a></li>
                <li><a href="#" className="menu__item">News</a></li>
                <li><a href="#" className="menu__item">Music</a></li>
                <li><a href="#" className="menu__item">Settings</a></li>
            </ul>
        </nav>
    )
}

export default Navbar; 