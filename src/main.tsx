import React from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from 'recoil';
import App from "./App";
import "./app.scss";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import("preline");

export const appRoot = createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
    <App />
    </RecoilRoot>
  </React.StrictMode>
);
