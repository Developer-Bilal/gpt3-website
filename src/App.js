import React from "react";
import "./App.css";

import {
  Footer,
  Blog,
  Header,
  Possibility,
  Features,
  WhatGPT3,
} from "./containers";
import { Article, Brand, Cta, Feature, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
