import React from "react";
import ReactDOM from "react-dom/client";
import { Application } from "./app";

ReactDOM
  .createRoot(document.getElementById("root")!)
  .render(React.createElement(Application))