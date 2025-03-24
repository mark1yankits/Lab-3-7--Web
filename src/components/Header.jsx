import React, { useState } from "react";
import { Link } from "react-router-dom";

// css
import "./HeaderStyle.css"
function Header() {
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
return (
    <header>
        <div className="wrapper__container">
        <div className="wrapper__container__navigation">
            <div className="menu-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
            </div>
            <div className="title__wrapper">
            <Link className="logo__text" to="/">
                <p>Разом для змін</p>
                <img src="/icon/heart.png" alt="logo" />
            </Link>
            </div>
            <div className="wrapper__nav">
                <Link className="nav__text active" to="/">Про нас</Link>
                <Link className="nav__text" to="/initiatives">Ініціативи</Link>
                <Link className="nav__text" to="/about-us">Моя Участь</Link>
                <Link to="/profile" className="account-container active">
                    <img className="icon__logo" src="/icon/account-icon.png" alt="account icon" />
                    <p className="text__username">Кіц Маркіян</p>
                    </Link>
                </div>
            </div>
        </div>
    </header>
);
}

export default Header;