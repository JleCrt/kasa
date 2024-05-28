import React from "react";
import "../styles/components/banner.css";
import Cliff from "../assets/images/Cliff.svg";

const Banner = () => {
  return (
    <div className="home-banner">
      <img src={Cliff} alt="banner kasa" />
        <h1>
          Chez vous,
          <span className="line-break"></span> partout et ailleurs
        </h1>
    </div>
  );
};

export default Banner;