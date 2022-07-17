import { createTheme } from "@mui/material/styles";

const primaryColor = "#F16E42";
const secondaryColor = "#009476";

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: "#000",
      paper: "#000",
    },
  },
  typography: {
    fontFamily: `"Fira Code", monospace`,
    h1: {
      letterSpacing: "0.55rem",
      fontSize: "5.5rem",
      textTransform: "uppercase",
      fontWeight: 400,
      fontFamily: "Oswald, Arial, Helvetica, sans-serif",
    },
    h2: {
      letterSpacing: "0.5rem",
      fontSize: "5rem",
      textTransform: "uppercase",
      fontWeight: 400,
      fontFamily: "Oswald, Arial, Helvetica, sans-serif",
    },
    h3: {
      letterSpacing: "0.45rem",
      fontSize: "4.5rem",
      textTransform: "uppercase",
      fontWeight: 400,
      fontFamily: "Oswald, Arial, Helvetica, sans-serif",
    },
    h4: {
      letterSpacing: "0.175rem",
      fontSize: "1.75rem",
      textTransform: "uppercase",
      fontWeight: 700,
      fontFamily: "Oswald, Arial, Helvetica, sans-serif",
    },
    h5: {
      letterSpacing: "0.15rem",
      fontSize: "1.5rem",
      textTransform: "uppercase",
      fontWeight: 700,
      fontFamily: "Oswald, Arial, Helvetica, sans-serif",
    },
    h6: {
      letterSpacing: "0.125rem",
      fontSize: "1.25rem",
      textTransform: "uppercase",
      fontWeight: 700,
      fontFamily: "Oswald, Arial, Helvetica, sans-serif",
    },
    body1: {
      letterSpacing: "normal",
      fontSize: "1rem",
    },
    body2: {
      letterSpacing: "normal",
      fontSize: "1rem",
      fontWeight: 300,
      fontFamily: "Oswald, Arial, Helvetica, sans-serif",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
            textDecorationColor: secondaryColor,
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          "&.MuiPaper-root": {
            borderRadius: 0,
            background: secondaryColor,
          },
        },
      },
    },
  },
});

export default theme;
