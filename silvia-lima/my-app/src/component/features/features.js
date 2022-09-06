import React from "react";
import "./features.scss";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";

function Features() {
  const featInfo = [
    {
      id: "1",
      title: "Pagar com MBWay",
      src: "https://endpoint-mbway.azureedge.net/wp-content/uploads/2020/07/Pagar-MBWay.svg",
    },
    {
      id: "2",
      title: "Enviar Dinheiro",
      src: "https://endpoint-mbway.azureedge.net/wp-content/uploads/2020/07/Enviar-Dinheiro.svg",
    },
    {
      id: "3",
      title: "Cartões Mb NET",
      src: "https://endpoint-mbway.azureedge.net/wp-content/uploads/2020/07/MBNET.svg",
    },
    {
      id: "4",
      title: "Pedir Dinheiro",
      src: "https://endpoint-mbway.azureedge.net/wp-content/uploads/2020/07/Pedir-Dinheiro.svg",
    },
    {
      id: "5",
      title: "Dividir conta",
      src: "https://endpoint-mbway.azureedge.net/wp-content/uploads/2020/07/Dividir-Conta.svg",
    },
    {
      id: "6",
      title: "Levantar dinheiro",
      src: "https://endpoint-mbway.azureedge.net/wp-content/uploads/2021/06/Levantar-Dinheiro.svg",
    },
    {
      id: "7",
      title: "Utilizar MULTIBANCO",
      src: "https://endpoint-mbway.azureedge.net/wp-content/uploads/2020/07/Utilizar-Multibanco.svg",
    },
    {
      id: "8",
      title: "Ser Solidário",
      src: "https://endpoint-mbway.azureedge.net/wp-content/uploads/2020/07/Ser-Solidario.svg",
    },
  ];

  return (
    <div className="features__container">
      <ul className="features__list">
        <li className="features__arrow">
          <FiArrowLeftCircle />
        </li>
        <li>
          <ul>
            {featInfo.map((i) => {
              return (
                <li id={i.id} className="feature__box">
                  <img className="feature__icon" src={i.src} alt="icon" />
                  <a className="feature__link" href={i.src}>
                    {i.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
        <li className="features__arrow">
          <FiArrowRightCircle />
        </li>
      </ul>
    </div>
  );
}

export default Features;
