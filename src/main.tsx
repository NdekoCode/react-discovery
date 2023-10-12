import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./app.scss";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import("preline");
export const appRoot = createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
