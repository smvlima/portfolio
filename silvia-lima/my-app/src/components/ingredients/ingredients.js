import React , {useState} from "react";
import { Ingredients } from '../../mocks/ingredientsArray'
import "./ingredients.scss";
import { FiPlus , FiMinus } from "react-icons/fi";

function Ingredient() {

  let [elements, setElements] = useState(Ingredients);
  //let [{ id, name, image, quantity, price }] = elements;

// let setTotal;
// [elements.quantity, setTotal] = useState(0);

// function add() {
//   const prevTotal = total;
//   setTotal (prevTotal + 1)
//   return total;
// }

// function remove() {
//   const prevTotal = total;
//   setTotal (prevTotal - 1)
//   return total;
// }

  return (
    <ul className="picker__ingredients">
    {elements.map(({id, name, image, quantity, price}) => (
        <li key={id} data-amount={quantity} className="ingredient" >
            <div className="ingredient__column">
                <img className="ingredient__image" src={image} alt={name}/>
                <span id={id} className="ingredient__counter">x{quantity}</span>
                <span className="ingredient__name">{name}</span>
            </div>
            <div className="ingredient__column">
                <button onClick={({}) => {
                    quantity = quantity -1 ;
                    document.getElementById(id).innerText='x'+quantity;
                    document.getElementById(id).parentElement.parentElement.setAttribute('data-amount',quantity);
                  //setElements({quantity}: 9);
                  
                  }} className="ingredient__control ingredient__control--remove">
                <FiMinus className="FiMinus" />
                </button>
                <button onClick={() => {
                  quantity = quantity + 1 ;
                    document.getElementById(id).innerText='x'+quantity;
                    document.getElementById(id).parentElement.parentElement.setAttribute('data-amount',quantity);
                  }} className="ingredient__control ingredient__control--add">
                <FiPlus className="FiPlus" />
                </button>
            </div>
        </li>
        )
  )}
    <p className="picker__total">Total: <span className="picker__price"> EUR</span></p>
  </ul>
  );
}

export default Ingredient;
