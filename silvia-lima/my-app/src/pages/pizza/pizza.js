import React from "react";
import Ingredient from "../../components/ingredients/ingredients";

import "./pizza.scss";

function Pizza() {
  return (
    <div className="picker">
    <div className="picker__intro">
        <h2 className="picker__headline">Seleciona ingredientes:</h2>
        <p>O número associado ao ingrediente refere-se a porções, não unidades. Os molhos (excepto tomate e oregãos) são cobrados como ingrediente extra.</p>
    </div>
        <Ingredient/>
    <p className="picker__total">Total: <span className="picker__price"> EUR</span></p>
</div>

  );
}

export default Pizza;
