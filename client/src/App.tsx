import React, { useState } from "react";
import "./App.css";
import Firstsection from "./Firstsection";
import ShowData from "./ShowData";
import List from "./List";
import Card from "./Card";

const App = () => {
  const age = 24;

  const [count, setCount] = useState<number>(0);

  const increaseCount = () => {
    setCount(count + 10);
  };

  return (
    <React.Fragment>
      <Card />
      <div className="first-sections">
        <Firstsection
          name="Yazdani"
          age={age}
          count={count}
          isMore={age > 20}
          counterButton={increaseCount}
        />
        <ShowData />
        <List />
      </div>
    </React.Fragment>
  );
};

export default App;
