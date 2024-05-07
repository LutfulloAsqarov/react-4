import React, { useState } from "react";
import { NAVBAR__LIST } from "../../static";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import logo from "../../assets/images/logo.svg";
import "./Header.scss";
const Header = () => {
    const [show, setShow] = useState(false);
    const navList = NAVBAR__LIST.map((item) => {
        return (
            <li key={item} className="header__list__item">
                <a href="#">{item}</a>
            </li>
        );
    });
    return (
        <header id="header">
            <div className="header container">
                <div className="header__logo">
                    <a href="#">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <ul className={`header__list ${show ? "show" : ""}`}>
                    {navList}
                </ul>

                <div className="header__icons">
                    <a href="#">
                        <IoSearch />
                    </a>
                    <a href="#">
                        <FaUser />
                    </a>
                    <a href="#">
                        <FaCartShopping />
                        <sup>1</sup>
                    </a>
                    <button
                        onClick={() => setShow(true)}
                        className="header__bar"
                    >
                        <FaBars />
                    </button>
                    {show ? (
                        <div
                            onClick={() => setShow(false)}
                            className="overlay"
                        ></div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
