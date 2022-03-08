import React, { useState, useEffect, FC } from "react";
import ListData from "./ListData";

const List = () => {
  const [showdata, setShowdata] = useState([]);

  const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

  const loadData = () => {
    fetch(API_ENDPOINT, {
      method: "GET",
    })
      .then((res) => res.json())
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
      {showdata?.map((item: any) => (
        <div>
          <ListData key={item.id} title={item.title} body={item.body} />
        </div>
      ))}
    </React.Fragment>
  );
};

export default List;
