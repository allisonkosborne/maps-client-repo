import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Maps } from "./components/Maps.js";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Maps />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
