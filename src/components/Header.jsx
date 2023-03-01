import React from "react";

function Header() {
  return (
    <>
      <header class="header">
        <div class="header__logo">
          <a href="#">
            <h1>sxnty</h1>
          </a>
        </div>
        <div class="header__right">
          <nav>
            <ul class="header__menu">
              <li class="menu__item">
                <a href="#" class="li1">
                  Inicio
                </a>
              </li>
              <li class="menu__item">
                <a href="#" class="li2">
                  About
                </a>
              </li>
              <li class="menu__item">
                <a href="#" class="li3">
                  Portfolio
                </a>
              </li>
              <li class="menu__item">
                <a href="#" class="li4">
                  Contact
                </a>
              </li>
              <button class="langSwitcher">English</button>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
