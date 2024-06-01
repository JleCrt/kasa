import React from "react";

// Affichage d'une étoile vide ou pleine
const Star = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    className={`star ${filled ? "filled-star" : "empty-star"}`}
  >
    <path
      d="M12 .587l3.668 7.513 8.332 1.179-6.064 5.868 1.429 8.305L12 18.902l-7.365 3.85 1.429-8.305-6.064-5.868 8.332-1.179z"
      fill={filled ? "#FF6060" : "#E3E3E3"}
    />
  </svg>
);

const Rating = ({ rating }) => (
  <div className="accomodation-stars">
    {/* Tableau + map pour création d'étoiles */}
    {Array.from({ length: 5 }, (_, i) => <Star key={i} filled={i < rating} />)}
  </div>
);

export default Rating;
