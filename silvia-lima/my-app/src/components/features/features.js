import React, { useState } from "react";
import "./features.scss";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import { featInfo } from "../../mocks/featuresArray";



function Features() {
  let [index, setIndex] = useState(0);

  return (
    <div className="features__container">
      <ul className="features__list">
        <li className="features__arrow">
          <FiArrowLeftCircle className="features__arrowCircle" />
        </li>
        <li className="features__content">
          <ul className="features__content-list">
            {featInfo.map((i) =>  (
                <li key={i.id} className="feature__box">
                  <button onClick={() => setIndex(i.id)}
                  className={"feature__btn" + ( i.id == index ? ' features__btn--active': '')}>
                  <img className="feature__icon" src={i.src} alt="icon" />
                  <a className="feature__link" href={i.src}>
                    {i.title}
                  </a>
                  </button>
                </li>
              )
            )}
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
