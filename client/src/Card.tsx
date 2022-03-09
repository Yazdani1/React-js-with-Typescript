import React, { useEffect, useState } from "react";

const Card = () => {
  const [price, setPrice] = useState(0);

  const increasePrice = ()=>{
      setPrice(price+1);
  }
  const decresePrice = ()=>{
      setPrice(price-1);
  }

  return (
    <React.Fragment>
      <div>
        <p>Card View</p>
        <p onClick={() => setPrice(price + 5)}>{price}</p>
      </div>
    </React.Fragment>
  );
};

export default Card;
