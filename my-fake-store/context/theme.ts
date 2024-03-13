"use client";

const { createTheme } = require("@mui/material");

const theme = createTheme({
  palette: {
    primary: {
      main: "#D4AF37",
    },
    secondary: {
      main: "#6C8EBF",
    },
    error: {
      main: "#8B4513",
    },
    warning:{
      main: "#8B4513"
    },
    info: {
      main: "#6C8EBF"
    }, 
    success: {
      main: "#D4AF37"
    }
  },
});

export default theme;