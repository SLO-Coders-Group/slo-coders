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
    fontSize: 14,
    h1: {
      letterSpacing: 12,
      textTransform: "uppercase",
      fontWeight: 400,
      fontFamily: "Oswald, Arial, Helvetica, sans-serif",
    },
    h2: {
      letterSpacing: 12,
      textTransform: "uppercase",
      fontWeight: 400,
      fontFamily: "Oswald, Arial, Helvetica, sans-serif",
    },
    h3: {
      letterSpacing: 12,
      textTransform: "uppercase",
      fontWeight: 400,
      fontFamily: "Oswald, Arial, Helvetica, sans-serif",
    },
    h4: {
      letterSpacing: 2,
      textTransform: "uppercase",
      fontWeight: 700,
      fontFamily: "Oswald, Arial, Helvetica, sans-serif",
    },
    h5: {
      letterSpacing: 2,
      textTransform: "uppercase",
      fontWeight: 700,
      fontFamily: "Oswald, Arial, Helvetica, sans-serif",
    },
    h6: {
      letterSpacing: 2,
      textTransform: "uppercase",
      fontWeight: 700,
      fontFamily: "Oswald, Arial, Helvetica, sans-serif",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
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
