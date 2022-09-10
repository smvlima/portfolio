import React from "react";
import { services } from "../../mocks/mbservices";
import "./content.scss";

function Content({title, description, img, variant, theme}) {
  // const { title, description, img, variant, theme } = props;

  return (
    <div className="content__container" data-variant={variant} data-theme="{theme}"> 
      <div className="content__text">
        <h1 className="content__title">{title}</h1>
        {description && <p className="content__description">{description}</p>}
      </div>
      { img && (<img className="content__image" src={img} alt={title} />)}
    </div>
  );
}

export default Content;
