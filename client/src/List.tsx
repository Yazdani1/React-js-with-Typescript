import React, { useState, useEffect } from "react";

const List = () => {
  const [showdata, setShowdata] = useState([]);

  const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

  const loadData = () => {
    fetch(API_ENDPOINT, {
      method: "GET",
    })
      .then((result: any) => {
        if (result) {
          setShowdata(result);
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
      {showdata.map(item=>(
        <>
        </>
      ))}
    </React.Fragment>
  );
};

export default List;
