import React, { useState } from "react";
//import Ingredient from "../../components/ingredients/ingredients";
import { Ingredients } from "../../mocks/ingredientsArray";
import { FiPlus, FiMinus, FiXCircle } from "react-icons/fi";

import "./pizza.scss";

function Pizza() {
  const [data, setData] = useState(Ingredients);
  const [total, setTotal] = useState(10);
  const [quantity, setQuantity] = useState(0);
  const [showWarning, setShowWarning] = useState(false);

  const onRemove = (ingredient) => {
    const newData = [...data];
    const index = newData.findIndex((element) => element === ingredient);
    newData[index].quantity -= 1;

    setTotal(total - newData[index].price);
    setQuantity(quantity - 1);
    setData(newData);
  };

  const onAdd = (ingredient) => {
    if (quantity + 1 > 15) {
      setShowWarning(true);
    } else {
      const newData = [...data];
      const index = newData.findIndex((element) => element === ingredient);
      newData[index].quantity += 1;
      setTotal(total + newData[index].price);
      setQuantity(quantity + 1);
      setData(newData);
    }
  };

  return (
    <div className="picker">
      <div className="picker__intro">
        <h2 className="picker__headline">Seleciona ingredientes:</h2>
        <p>
          O número associado ao ingrediente refere-se a porções, não unidades.
          Os molhos (excepto tomate e oregãos) são cobrados como ingrediente
          extra.
        </p>
      </div>
      <ul className="picker__ingredients">
        {data.map((ingredient) => (
          <li
            key={ingredient.id}
            data-amount={ingredient.quantity}
            data-price={ingredient.price}
            className="ingredient"
          >
            <div className="ingredient__column">
              <img
                className="ingredient__image"
                src={ingredient.image}
                alt={ingredient.name}
              />
              <span id={ingredient.id} className="ingredient__counter">
                x{ingredient.quantity}
              </span>
              <span className="ingredient__name">{ingredient.name}</span>
            </div>
            <div className="ingredient__column">
              <button
                onClick={() => {
                  onRemove(ingredient);
                }}
                className="ingredient__control ingredient__control--remove"
              >
                <FiMinus className="FiMinus" />
              </button>
              <button
                onClick={() => {
                  onAdd(ingredient);
                }}
                className="ingredient__control ingredient__control--add"
              >
                <FiPlus className="FiPlus" />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p className="picker__total">
        Total: <span className="picker__price"> {total.toFixed(2)} EUR</span>{" "}
      </p>
      {showWarning && (
        <div className="picker__warning">
          <div className="warning__content">
            <button
              className="warning__close"
              onClick={() => {
                setShowWarning(false);
              }}
            >
              <FiXCircle className="FiXCircle" />
            </button>
            <p>
              <b>Atenção.</b>
            </p>
            <p>Superaste o número máximo de ingredientes.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pizza;
