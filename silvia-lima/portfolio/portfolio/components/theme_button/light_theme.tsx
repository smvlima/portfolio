import React from "react";

function LightTheme() {
  return (
    <style jsx global>
      {`
        :root {
            --background: #f5ead2 ;
            --title-shadow: #f59237;
            --title: #f57237;
	        --border: #68382d;
	        --paragraph: #002023;
	        --hover: #016e79 ;
	        --basic-texts: #013b42 ;
        }
      `}
    </style>
  );
}

export default LightTheme;
