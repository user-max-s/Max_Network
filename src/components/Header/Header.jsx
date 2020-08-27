import React from 'react';
import './Header.scss';
import logo from './../img/header__logo.png';

const Header = (props) => {
    return (
        <header className="header">
            <img className="header__logo" src={logo} />
        </header>
    )
}

export default Header;