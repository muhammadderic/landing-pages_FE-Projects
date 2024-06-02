import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Description from "./components/Description";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import "./styles/app.css";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

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
      <Blog />
      <Brand />
      <Footer />
    </>
  )
}

export default App;