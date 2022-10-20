import React from "react";

function LightTheme() {
  return (
    <style jsx global>
      {`
        :root {
          --background: #eaddd5 ;
          --title: #d36953;
          --title-shadow: #ddc1b5;
          --box-hover: rgba(170, 187, 204, 0.45);
	        --border: #912522;
	        --paragraph: #004545;
	        --hover: #3d746f;
	        --basic-texts: #2F7872;
          
        }
      `}
    </style>
  );
}

export default LightTheme;
