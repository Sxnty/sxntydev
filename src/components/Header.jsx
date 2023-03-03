import React, { useRef } from "react";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <a href="#">
            <h1>sxnty</h1>
          </a>
        </div>
        <div className="header__right">
          <nav>
            <ul className="header__menu">
              <li className="menu__item">
                <a href="#" className="li1">
                  Inicio
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="li2">
                  About
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="li3">
                  Portfolio
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="li4">
                  Contact
                </a>
              </li>
              <button className="langSwitcher">English</button>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
