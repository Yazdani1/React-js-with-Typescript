import React, { useState, useEffect } from "react";

const List = () => {
  const [showdata, setShowdata] = useState([]);

  const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

  const loadData = () => {
    fetch(API_ENDPOINT, {
      method: "GET",
    })
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return <div>List</div>;
};

export default List;
