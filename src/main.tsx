import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./app.scss";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import("preline");
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
