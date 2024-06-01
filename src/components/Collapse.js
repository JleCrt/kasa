import React, { useState, useEffect } from "react";
import "../styles/components/collapse.css";
import ArrowUp from "../assets/icons/arrow-up.svg";
import ArrowDown from "../assets/icons/arrow-down.svg";

const Collapse = ({ state, defaultState = false }) => {
  const [toggle, setToggle] = useState(defaultState);

  // Inverser la valeur de toggle au clic
  const toggleHandler = () => setToggle(!toggle);

  return (
    <div className="collapse">
      <div className="collapse-title" onClick={toggleHandler}>
        <h3>{state.title}</h3>
        <img
          className="Arrow arrowUp arrowDown"
          src={toggle ? ArrowDown : ArrowUp}
          alt="show content"
        />
      </div>
      <div className={toggle ? "collapse-content" : "collapse-content-hidden"}>
        {state.equipments === undefined ? (
          <p>{state.description}</p>
        ) : (
          <ul>
            {state.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Collapse;
