import React from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
