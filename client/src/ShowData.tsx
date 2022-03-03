import React, { FC, useState, useEffect } from "react";

const ShowData = () => {
  const [posts, setPosts] = useState([]);

  const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

  const loadData = () => {
    fetch(API_ENDPOINT, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setPosts(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // useEffect(() => {
  //   loadData();
  // }, []);

  return (
    <div>
      <button onClick={loadData}>Load Data</button>

      {posts.map((item: any) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowData;
