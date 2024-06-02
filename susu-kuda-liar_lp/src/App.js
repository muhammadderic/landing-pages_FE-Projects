import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Description from "./components/Description";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import "./styles/app.css";

const App = () => {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Hero />
      </div>
      <Description />
      <Features />
      <Benefits />
      <CTA />
      <Brand />
    </>
  )
}

export default App;