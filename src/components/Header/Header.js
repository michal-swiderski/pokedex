import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";
import logo from '../../assets/logo.png';


const Header = () => {
    return (
        <header className="header">
            <Link to="/page/1"><img className="header__image" src={logo} alt="logo"/></Link>
        </header>
    );
};

export default Header;