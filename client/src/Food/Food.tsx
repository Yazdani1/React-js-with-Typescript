import React, { FC } from "react";
import { Foodlist } from "./types";

const Food = ({ name, price, img, address }: Foodlist) => {
  return (
    <React.Fragment>
      <h1>{name}</h1>
      <h1>{price}</h1>

      <h1>{img}</h1>

      <h1>{address}</h1>
    </React.Fragment>
  );
};

export default Food;
