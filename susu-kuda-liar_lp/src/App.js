import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./styles/app.css";

const App = () => {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App;