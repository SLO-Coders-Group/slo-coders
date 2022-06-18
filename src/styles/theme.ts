import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#F16E42",
    },
    secondary: {
      main: "#009476",
    },
    background: {
      default: "#000",
      paper: "#000",
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
    body2: {
      fontSize: "1rem",
      fontWeight: 300,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
            textDecorationColor: "#009476",
          },
        },
      },
    },
  },
});

export default theme;
