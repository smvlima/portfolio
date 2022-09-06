import React from "react";
import "./nav.scss";

function Nav() {
  return (
    <header>
      <nav>
        <img src="https://picsum.photos/50/50" alt="principal"></img>
        <ul>
          <li>
            <a href="#utilizadores">Utilizadores</a>
          </li>
          <li>
            <a href="#empresas">Empresas</a>
          </li>
          <li>
            <a href="#seguranca">Segurança</a>
          </li>
          <li>
            <a href="#challenge">Challenge</a>
          </li>
          <li>
            <a href="#novidades">Novidades</a>
          </li>
          <li>
            <a href="#onde-estamos">Faqs</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
