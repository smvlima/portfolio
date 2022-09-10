import React, { useState, useEffect } from "react";

import "./hero.scss";
import { heroes } from "../../mocks/heroes";

import { FiCircle } from "react-icons/fi";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

function Hero() {
  const [card, setCard] = useState(heroes);
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 2000);
  //   return () => clearInterval(slider);
  // }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1
        if (index > card.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  // useEffect(() => {
  //   const lastIndex = heroes.length -1;
  //   if (index < 0) {
  //     setIndex(lastIndex);
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0);
  //   }
  // }, [index, card]);


  function remove () {
    const lastIndex = heroes.length -1;
    if (index <= 0) {
      setIndex(lastIndex);
    }
    else {
      setIndex(index -1)
    }
    return index
  };


 function add () {
    const lastIndex = heroes.length -1;
    if (index >= lastIndex) {
      setIndex(0);
    }
    else {
      setIndex(index + 1)
    }
    return index
  };

  let box = card[index]; 
  return (
    <div className="hero__container">
      <button onClick={() => remove()} className="hero__btn">
        <FiArrowLeftCircle className="hero__arrow" />
      </button>


      <div className="hero__card-container">
      {/* {heroes.map((card, cardIndex) => {
        return ( */}
          <div key={box.id} className="hero__card">
            <img className="hero__avatar" src={box.avatar} alt="profile image" />
            <h2 className="hero__title">{box.name}</h2>
            <p className="hero__description">{box.description}</p>
          </div>
        {/* );
      })} */}
      </div>
      <button className="hero__btn" onClick={() => add()}>
        <FiArrowRightCircle className="hero__arrow" />
      </button>

    </div>
  );
}
export default Hero;
