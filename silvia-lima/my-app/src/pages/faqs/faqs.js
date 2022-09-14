import React, { useEffect, useState }  from "react";

import "./faqs.scss";

function Faqs() {

  const [data, setData] = useState([]);

   useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(result => {
        setData(result);
      })
   }, [])


  return (
    <div className="faqs">
      <h1 className="faqs__headline">Welcome to faqs</h1>
      {!data.length ? (
        <p className="faqs__loading">Loading data... </p>
      ) : (
        <div className="faqs__list">
          {data.map((item) => (
            <article key={item.id} className="faqs__article">
              <a className="faqs__link" href="#nowhere">
                <h2 className="faqs__name">{item.name}</h2>
                <p className="faqs__mail">{item.email}</p>
                <p className="faqs__description">{item.body}</p>
              </a>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default Faqs;
