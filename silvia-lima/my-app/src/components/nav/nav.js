import React from "react";
import { Link } from "react-router-dom";

import './nav.scss'

function Nav() {
  return (
    <header>
      <div className="nav__container">
        <a className="nav__logo__link" href="/"><img
          className="nav__logo"
          src="https://endpoint-mbway.azureedge.net/wp-content/uploads/2021/02/MBWAYlogoBRANCO.png"
          alt="logo"
        /></a>
        <ul className="nav__user">
          <li>
            <Link className="nav__link" to="#features">
              utilizadores
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/pizza">
              pizzas
            </Link>
          </li>
        </ul>
        <ul className="nav__list">
          <li>
            <Link className="nav__link" to="/security">
              segurança
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/challenge">
              challenge
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/news">
              novidades
            </Link>
          </li>
          <li>
            <Link className="nav__link" to="/faqs">
              FAQs
            </Link>
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
