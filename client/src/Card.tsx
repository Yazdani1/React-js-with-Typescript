import React, { useEffect, useState } from "react";
import "./card.css";

const Card = () => {
  const [price, setPrice] = useState(0);

  const increasePrice = () => {
    setPrice(price + 1);
  };
  const decresePrice = () => {
    setPrice(price - 1);
  };

  return (
    <React.Fragment>
      <div className="card-design">
        <p>Card View</p>
        <p onClick={() => setPrice(price + 5)}>{price}</p>
      </div>

      <div className="list">
        <div className="list-title">
          <h6>Title</h6>
        </div>
        <div className="price-design">
          <p>Price</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
