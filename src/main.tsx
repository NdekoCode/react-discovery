import "./app.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./app.tsx";
import { ThemeContextProvider } from "./stores/contexts/theme-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>
);
