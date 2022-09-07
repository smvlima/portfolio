import React from "react";

import './nav.scss'

function Nav() {
  return (
    <header>
      <div className="nav__container">
        <img
          className="nav__logo"
          src="https://endpoint-mbway.azureedge.net/wp-content/uploads/2021/02/MBWAYlogoBRANCO.png"
          alt="logo"
        />
        <ul className="nav__user">
          <li>
            <a className="nav__link" href="#features">
              utilizadores
            </a>
          </li>
          <li>
            <a className="nav__link" href="#empresas">
              empresas
            </a>
          </li>
        </ul>
        <ul className="nav__list">
          <li>
            <a className="nav__link" href="#segurança">
              segurança
            </a>
          </li>
          <li>
            <a className="nav__link" href="#challenge">
              challenge
            </a>
          </li>
          <li>
            <a className="nav__link" href="#novidades">
              novidades
            </a>
          </li>
          <li>
            <a className="nav__link" href="#challenge">
              FAQs
            </a>
          </li>
          <li>
            <input
              className="nav__search"
              type="text"
              placeholder="  O que procura?"
            />
          </li>
          <li>
            <button className="nav__button">aderir</button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Nav;
