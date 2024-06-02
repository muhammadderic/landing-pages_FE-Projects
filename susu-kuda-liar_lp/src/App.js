import React from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./styles/app.css";

const App = () => {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
    </>
  )
}

export default App;