import React from "react";
import { Posts } from "../../components/mocks/posts";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "./slidebar.scss";

function Sidebar() {
  return (
    <div className="container">
      <div className="container__box">
        <div className="navigation navigation__left">
          <button className="btn navigation__left__btn">
            <FiArrowLeft className="left__btn" />
          </button>
        </div>
        <ul className="container__content">
          {Posts.map((item) => {
            return (
              <li jey={item.id} className="content__item">
                <div className="item__box">
                  <div className="item__picture">
                    <img className="picture" src={item.image} alt=""></img>
                  </div>
                  <div className="item__details">
                    <span className="item__title">{item.title}</span>
                    <div className="item__languages">
                      <span >
                        {item.languages.markup}
                      </span>
                      <span>
                        {item.languages.style}
                      </span>
                      {item.languages.programming && (
                        <span>
                          {item.languages.programming}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="navigation navigation__right">
          <button className="btn navigation__right__btn">
            <FiArrowRight className="right__btn" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
