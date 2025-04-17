import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./HeaderStyle.css";

import {getAuth} from "firebase/auth";

function Header() {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const location = useLocation(); 


const auth = getAuth();
const [username, setUsername] = useState("");

const user = auth.currentUser;

const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); 
};

useEffect(()=>{
    if(user){
        setUsername(user.displayName);
    }
}, [])


return (
    <header>
    <div className="wrapper__container">
        <div className="wrapper__container__navigation">
        <div
            className={`menu-icon ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}>
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
            <Link className={`nav__text ${location.pathname === "/" ? "active" : ""}`}
        to="/">
            Про нас
            </Link>
            <Link className={`nav__text  ${location.pathname === "/initiatives" ? "active" : ""}`} to="/initiatives">
            Ініціативи
            </Link>
            <Link className={`nav__text ${location.pathname === "/about-us" ? "active" : ""} `}to="/about-us">
            Моя Участь
            </Link>
            <Link to={user? "/profile": "/login"} className="account-container active">
            <img
                className="icon__logo"
                src="/icon/account-icon.png"
                alt="account icon"
            />
            <p className="text__username">{username || "Увійти/Реєстрація"}</p>
            </Link>
        </div>
        </div>

        <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul className={`menu_list ${isMenuOpen ? "active" : ""}`}>
            <img src="/icon/image-removebg-preview.png" alt="Logo" />
            <hr className="hr__burgerMenu" />
            <li className="menu__item">
            <Link to="/" onClick={toggleMenu}>
                Про нас
            </Link>
            </li>
            <li className="menu__item">
            <Link to="/initiatives" onClick={toggleMenu}>
                Ініціативи
            </Link>
            </li>
            <li className="menu__item">
            <Link to="/about-us" onClick={toggleMenu}>
                Моя участь
            </Link>
            </li>
            <li className="menu__item">
            <Link to="/profile" onClick={toggleMenu}>
                Акаунт
            </Link>
            </li>
        </ul>
        </nav>
    </div>
    </header>
);
}

export default Header;