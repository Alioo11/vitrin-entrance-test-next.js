import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

const CustomProvider = ({ children, ...props }) => {
  const state = useSelector((state) => state.appState);
  const { darkMode } = state;

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default CustomProvider;
