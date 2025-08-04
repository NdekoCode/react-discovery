// https://vite.dev/config/
import path from "node:path";
import { defineConfig } from "vite";

import tailwindcsss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcsss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
