import React, { useEffect, useState } from "react";

const ShowData = () => {
  const [posts, setPosts] = useState([]);

  const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

  const loadData = () => {

    

  };

  useEffect(() => {
    loadData();
  }, []);

  return <React.Component></React.Component>;
};

export default ShowData;
