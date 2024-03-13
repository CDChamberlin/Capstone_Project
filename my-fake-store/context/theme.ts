"use client";

const { createTheme } = require("@mui/material");

const theme = createTheme({
  palette: {
    primary: {
      main: "#a69159",
    },
    secondary: {
      main: "#293439",
    },
    error: {
      main: "#c84445",
    },
  },
});

export default theme;