import React, { useState } from "react";
import "./App.css";
import Firstsection from "./Firstsection";
import ShowData from "./ShowData";

const App = () => {
  const age = 24;

  const [count, setCount] = useState<number>(0);

  const increaseCount = () => {
    setCount(count + 10);
  };

  return (
    <React.Fragment>
      <div className="first-sections">
        <Firstsection
          name="Yazdani"
          age={age}
          count={count}
          isMore={age > 20}
          counterButton={increaseCount}
        />
        <ShowData />
      </div>
    </React.Fragment>
  );
};

export default App;
