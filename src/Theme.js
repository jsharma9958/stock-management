// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif", // Set the default font
    h4: {
      textAlign: "center", // Center align h4 headings
      marginBottom: "16px", // Add margin for spacing
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          marginTop: "16px", // Add consistent margin to buttons
        },
      },
    },
  },
});

export default theme;
