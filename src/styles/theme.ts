import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8d6e63",
    },
    secondary: {
      main: "#e36960",
    },
    background: {
      default: "#251a10",
    },
  },
  typography: {
    fontFamily: "Oswald, Arial, Helvetica, sans-serif",
    h1: {
      letterSpacing: 12,
      textTransform: "uppercase",
      fontWeight: 400,
    },
    h2: {
      letterSpacing: 12,
      textTransform: "uppercase",
      fontWeight: 400,
    },
    h3: {
      letterSpacing: 12,
      textTransform: "uppercase",
      fontWeight: 400,
    },
    h4: {
      letterSpacing: 2,
      textTransform: "uppercase",
      fontWeight: 700,
    },
    h5: {
      letterSpacing: 2,
      textTransform: "uppercase",
      fontWeight: 700,
    },
    h6: {
      letterSpacing: 2,
      textTransform: "uppercase",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1.2rem",
    },
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
      },
    },
  },
});

export default theme;
