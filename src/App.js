import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
