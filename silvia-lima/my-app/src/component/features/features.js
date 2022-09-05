import React from "react";
import "./features.css";

function Features() {
  const info = [
    'Pagar com MBWay',
    'Enviar Dinheiro',
    'Cartões MB NET',
    'Pedir Dinheiro',
    'Dividir Conta',
  ]

    return (
      <div>
        <h2>explore as funcionalidades mb way</h2>
        <ul>
          <li>
            <a href="#pagar-com-mbway">Pagar com MBWay</a>
          </li>
          <li>
            <a href="#enviar-dinheiro">Enviar Dinheiro</a>
          </li>
          <li>
            <a href="#cartoes-mb-net">Cartões MB NET</a>
          </li>
          <li>
            <a href="#pedir-dinheiro">Pedir Dinheiro</a>
          </li>
          <li>
            <a href="#dividir-conta">Dividir Conta</a>
          </li>
        </ul>
      </div>
    );
  }

  export default Features;