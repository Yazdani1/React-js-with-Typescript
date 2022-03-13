import React, { useState } from "react";
import "./App.css";
import Firstsection from "./Firstsection";
import ShowData from "./ShowData";
import List from "./List";
import Card from "./Card";
import Food from "./Food/Food";

const App = () => {
  const age = 24;

  const [count, setCount] = useState<number>(0);

  const increaseCount = () => {
    setCount(count + 10);
  };

  return (
    <React.Fragment>
      <Card />
      <Food name="Pizza" img="iamgelocation" address="Germany" price={50}/>
      <Food name="Burger" img="burgerimagelocation" address="Bonn" price={500}/>
      <Food name="Burger" img="burgerimagelocation" address="Bonn" price={500}/>

      <div className="first-sections">
        <Firstsection
          name="Yazdani"
          age={age}
          count={count}
          isMore={age > 20}
          counterButton={increaseCount}
        />
          <Firstsection
          name="Yazdani"
          age={age}
          count={count}
          isMore={age > 20}
          counterButton={increaseCount}
        />
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
