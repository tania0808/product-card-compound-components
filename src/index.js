import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    darkCyan: "hsl(158, 36%, 37%)",
    veryDarkCyan: "hsl(158, 36%, 25%)",
    cream: " hsl(30, 38%, 92%)",
    veryDarkBlue: "hsl(212, 21%, 14%)",
    darkGrayishBlue: "hsl(228, 12%, 48%)",
    white: "hsl(0, 0%, 100%)",
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
