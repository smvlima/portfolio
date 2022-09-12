import React from "react";

import "./news.scss";

function News() {
  return (
    <div className="news">
      <h1 className="news__headline">Welcome to news</h1>
      <p className="news__loading">Loading data... </p>
      <div className="news__list">
        <article className="news__article">
          <a className="news__link" href="#nowhere">
            <h2 className="news__tile">Título</h2>
            <p className="news__description">Descrição</p>
          </a>
        </article>
      </div>
    </div>
  );
}

export default News;
