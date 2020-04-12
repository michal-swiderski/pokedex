import React from 'react';
import './Header.scss';
import logo from '../../assets/logo.png';


const Header = () => {
    return (
        <header className="header">
            <img className="header__image" src={logo} alt="logo"/>
        </header>
    );
};

export default Header;