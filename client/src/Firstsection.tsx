import React, { FC, useState } from "react";

interface Userinfo {
  name: String;
  age: number | string;
  isMore?: boolean;
  count: number;
  counterButton: () => void;
}

const Firstsection: FC<Userinfo> = ({
  name,
  age,
  isMore,
  counterButton,
  count,
}) => {
  console.log(isMore);

  return (
    <React.Fragment>
      <div>
        <h1>Full name is: {name}</h1>
        <h3>Age is: {age}</h3>
        <h3>Result: {isMore}</h3>
        <h1>Counter result is: {count}</h1>
        <button onClick={counterButton}>Increase Count</button>
      </div>
    </React.Fragment>
  );
};

export default Firstsection;
