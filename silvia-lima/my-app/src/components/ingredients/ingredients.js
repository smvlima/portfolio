import React , {useState} from "react";
import { Ingredients } from '../../mocks/ingredientsArray'
import "./ingredients.scss";
import { FiPlus , FiMinus } from "react-icons/fi";

function Ingredient() {
    let [quantity, setQuantity] = useState(Ingredient);
    
    function add() {
        quantity = setQuantity(quantity +1);
    }

  return (
    <ul className="picker__ingredients">
    {Ingredients.map((i) => (
        <li key={i.id} data-amount={i.quantity} className="ingredient" >
            <div className="ingredient__column">
                <img className="ingredient__image" src={i.image} alt={i.name}/>
                <span className="ingredient__counter">x{i.quantity}</span>
                <span className="ingredient__name">{i.name}</span>
            </div>
            <div className="ingredient__column">
                <button  className="ingredient__control ingredient__control--remove">
                <FiMinus className="FiMinus" />
                </button>
                <button onClick={() => add()} className="ingredient__control ingredient__control--add">
                <FiPlus className="FiPlus" />
                </button>
            </div>
        </li>
        )
  )}
  </ul>
  );
}

export default Ingredient;
