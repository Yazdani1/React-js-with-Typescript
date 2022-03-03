import React, { useState } from "react";
import "./App.css";
import Firstsection from "./Firstsection";

const App = () => {
  const age = 24;

  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <div className="first-sections">
        <Firstsection
          name="Yazdani"
          age={age}
          count={count}
          isMore={age > 20}
          counterButton={() => setCount(count + 5)}
        />
      </div>
    </React.Fragment>
  );
};

export default App;
