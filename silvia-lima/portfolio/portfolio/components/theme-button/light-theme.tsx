import React from "react";

function LightTheme() {
  return (
    <style jsx global>
      {`
        :root {
          --background: #f5ead2 ;
          --title: #f59237;
          --title-shadow: #f57237;
	        --border: #68382d;
	        --paragraph: #013b42;
	        --hover: #f57237;
	        --basic-texts: #013b42 ;
          --box-hover: #f59237d5
        }
      `}
    </style>
  );
}

export default LightTheme;
