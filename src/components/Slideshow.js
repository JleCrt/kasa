import React, { useState } from "react";
import "../styles/components/slideshow.css";
import arrowLeft from "../assets/icons/arrow-left.svg";
import arrowRight from "../assets/icons/arrow-right.svg";

const Slideshow = (images) => {
  const [counter, setCounter] = useState(0);
  const pictures = images.images;
  const slideLength = pictures.length;

  let actualImage;
  actualImage = pictures[counter];

  // Slide à gauche
  const slideLeft = () => setCounter((counter - 1 + slideLength) % slideLength);

  // Slide à droite
  const slideRight = () => setCounter((counter + 1) % slideLength);


  // Condition d'affichage de "arrow-controller-div"
  const shouldDisplayControls = slideLength > 1;

  return (
    <div className="slider-div">
      <img className="slider-img" src={actualImage} alt="chambre d'un hôte" />
      {shouldDisplayControls && (
      <div className="arrow-controller-div">
        <img
          onClick={slideLeft}
          className="arrow arrow-left"
          src={arrowLeft}
          alt="arrow left"
        />
        <p className="counter">
          {counter + 1}/{slideLength}
        </p>
        <img
          onClick={slideRight}
          className="arrow arrow-right"
          src={arrowRight}
          alt="arrow right"
        />
      </div>
      )}
    </div>
  );
};

export default Slideshow;
