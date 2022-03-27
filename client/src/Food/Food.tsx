import React, { FC } from "react";
import { Foodlist } from "./types";
import "./food.css";

const Food = ({ name, price, img, address }: Foodlist) => {
  return (
    <React.Fragment>
      <div className="food-container">
        <h1>{name}</h1>
        <h1>{price}</h1>

        <h1>{img}</h1>

        <h1>{address}</h1>
      </div>
      <div className="action">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </React.Fragment>
  );
};

export default Food;
