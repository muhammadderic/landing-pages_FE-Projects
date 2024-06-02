import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Description from "./components/Description";
import "./styles/app.css";
import Features from "./components/Features";

const App = () => {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Hero />
      </div>
      <Description />
      <Features />
      <Brand />
    </>
  )
}

export default App;