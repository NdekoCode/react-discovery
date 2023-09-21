/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("preline/plugin")],
};
