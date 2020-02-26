import React from "react";
import Socialmedia from "./sections/socialmedia";
import About from "./sections/About";
import Skills from "./sections/skills";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Socialmedia />

      <About />

      <Skills />
    </div>
  );
}

export default App;
