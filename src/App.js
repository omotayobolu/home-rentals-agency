import React from "react";
import Hero from "./components/Hero";
import List from "./components/List";
import Living from "./components/Living";
import LifeStyle from "./components/LifeStyle";
import AddProperty from "./components/AddProperty";
import Testimonies from "./components/Testimonies";

const App = () => {
  return (
    <>
      <Hero />
      <Living />
      <List />
      <LifeStyle />
      <AddProperty />
      <Testimonies />
    </>
  );
};

export default App;
