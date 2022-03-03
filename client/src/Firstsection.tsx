import React, { FC } from "react";

interface Userinfo {
  name: String;
  age: number | string;
  isMore?: boolean;
}

const Firstsection: FC<Userinfo> = ({ name, age,isMore }) => {
    console.log(isMore);
  return (
    <React.Fragment>
      <div>
        <h1>Full name is: {name}</h1>
        <h3>Age is: {age}</h3>
        <h3>Result: {isMore.toString()}</h3>
      </div>
    </React.Fragment>
  );
};

export default Firstsection;
