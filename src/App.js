import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Section1 from "./components/Section1";
import Cards from "./components/Cards";
import Section3 from "./components/Section3";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section1
        main_text="Hey I am Marcos"
        secondary_text="Engineer and autodidact with
        experience in various industries.
        Currently focused on QA and
        Fullstack Development in
        languages like JavaScript and
        Python.
        Passionate about Blockchain
        and Web3 technologies."
      />
      <Cards main_text="These are some of my projects" />
      <Section3 main_text="Let's work together..." />
      <Footer />
    </div>
  );
}

export default App;
