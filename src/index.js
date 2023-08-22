import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Weather from "./Weather/weather.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>
);
