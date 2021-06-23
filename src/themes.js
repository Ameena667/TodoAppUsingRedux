import React from "react";

export const themes = {
  dark: {
    color: "white",
    background: "dark",
  },
  light: {
    color: "dark",
    background: "white",
  },
};

const ThemeContext = React.createContext(themes);

export default ThemeContext;
