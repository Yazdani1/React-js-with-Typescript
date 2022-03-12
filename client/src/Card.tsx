import { url } from "inspector";
import React, { useEffect, useState } from "react";
import "./card.css";
import { BsArrowDownCircleFill } from "react-icons/bs";

const Card = () => {
  const [price, setPrice] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const URL = "https://jsonplaceholder.typicode.com/comments";

  const increasePrice = () => {
    setPrice(price + 1);
  };
  const decresePrice = () => {
    setPrice(price - 1);
  };

  const loadData = () => {
    fetch(URL, {
      method: "GET",
    })
      .then((res) => res.json)
      .then((result: any) => {
        if (result) {
          setData(result);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

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
          <p>Price </p>
        </div>
        <div className="container_2">
       
            <BsArrowDownCircleFill size={50}/>
       
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
