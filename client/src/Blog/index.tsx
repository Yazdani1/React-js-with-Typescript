import React from "react";
import "./blog.css";
import { Blogdata } from "./types";

const Blog: React.FC<Blogdata> = ({ title, des, date, category, location }) => {
  return (
    <React.Fragment>
      <div className="bloglist">
        <h3>{title}</h3>
        <p>{des}</p>
        <p>{date}</p>
        <p>{category}</p>
        <p>{location}</p>
      </div>
    </React.Fragment>
  );
};

export default Blog;
