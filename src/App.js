import React from "react";
import Hero from "./components/Hero";
import List from "./components/List";
import Living from "./components/Living";
import LifeStyle from "./components/LifeStyle";
import AddProperty from "./components/AddProperty";

const App = () => {
  return (
    <>
      <Hero />
      <Living />
      <List />
      <LifeStyle />
      <AddProperty />
    </>
  );
};

export default App;
