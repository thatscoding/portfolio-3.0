import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
};

export default App;
