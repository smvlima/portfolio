import React from "react";
import "./features.scss";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import { featInfo } from "./featuresArray";

function Features() {
  

  return (
    <div className="features__container">
      <ul className="features__list">
        <li className="features__arrow">
          <FiArrowLeftCircle className="features__arrowCircle" />
        </li>
        <li className="features__content">
          <ul className="features__content-list">
            {featInfo.map((i) => {
              return (
                <li key={i.id} className="feature__box">
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
          <FiArrowRightCircle className="features__arrowCircle" />
        </li>
      </ul>
    </div>
  );
}

export default Features;
