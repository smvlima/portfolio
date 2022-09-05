import React from "react";
import "./content.css";

function Content(props) {

const {title, description, src, variant, theme} = props;

  return (
    <div
      className="content"
      data-variant={variant}
      data-theme={theme}
    >
      <div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {src && (<div>
        <img src={src} alt="content"></img>
      </div>)}
    </div>
  );
}

export default Content;
