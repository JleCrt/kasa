import React from "react";
import "../styles/components/cards.css";

const cards = (props) => {
  return (
    <article className="home-card">
      <img src={props.url} alt={props.title} />
      <h3>{props.title}</h3>
    </article>
  );
};

export default cards;