import React from "react";
import { Contact } from "./Components/Contact";
const dee_dee = require("./images/dee-dee.png");
const joey = require("./images/joey.png");
const marky = require("./images/marky.jpeg");

function App() {
  return (
    <div className="App">
      <Contact name="Joey" avatar={joey} online />
      <Contact name="Dee-Dee" avatar={dee_dee} />
      <Contact name="Marky" avatar={marky} online />
    </div>
  );
}

export default App;
