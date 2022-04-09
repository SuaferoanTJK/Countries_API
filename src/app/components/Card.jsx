import React from "react";
import { useSelector } from "react-redux";

const Card = ({ image, name, population, region, capital }) => {
  const mode = useSelector((state) => state.darkMode);
  return (
    <div className={mode ? "card card_bg-dark" : "card"}>
      <div className="card_img">
        <img src={image} alt="Flag Image" />
      </div>
      <div className="card_info">
        <p className="card_title"> {name}</p>
        <p className="card_text">
          <span>Population:</span> {population}
        </p>
        <p className="card_text">
          <span>Region:</span> {region}
        </p>
        <p className="card_text">
          <span>Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
