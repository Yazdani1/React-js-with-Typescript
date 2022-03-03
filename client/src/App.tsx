import React from "react";
import "./App.css";
import Firstsection from "./Firstsection";

const App = () => {
  const age = 24;

  return (
    <React.Fragment>
      <div className="first-sections">
        <Firstsection
          name="Yazdani"
          age={age}
          isMore={age > 20}
        />
      </div>
    </React.Fragment>
  );
};

export default App;
