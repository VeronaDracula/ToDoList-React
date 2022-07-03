import React from 'react';
// import {Link, Route, Switch} from "react-router-dom";
import './Header.css';

import headerLogo from '../../images/logo.svg';



function Header(props) {
    return (
        <header className="header">
            <img className="header__logo" src={headerLogo} alt="логотип"/>
            <button className="header__btn-login" type="button"></button>
        </header>
    );
}

export default Header;