import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderStyle.css";

function Header() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); 
};

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
            <Link className="nav__text active" to="/">
            Про нас
            </Link>
            <Link className="nav__text" to="/initiatives">
            Ініціативи
            </Link>
            <Link className="nav__text" to="/about-us">
            Моя Участь
            </Link>
            <Link to="/profile" className="account-container active">
            <img
                className="icon__logo"
                src="/icon/account-icon.png"
                alt="account icon"
            />
            <p className="text__username">Кіц Маркіян</p>
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