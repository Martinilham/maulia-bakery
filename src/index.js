import ReactDOM from "react-dom/client";
import React from "react";
import "./global.css";
import "animate.css"

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);