import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const scrollDivStyles = {
  borderTop: `1px solid ${grey[500]}`,
  paddingTop: 2,
  maxHeight: 500,
  overflow: "auto",
  overflowScrolling: "touch",
  background: `
    /* Shadow Cover TOP */
    linear-gradient(
      white 30%,
      rgba(255, 255, 255, 0)
    ) center top,

    /* Shadow Cover BOTTOM */
    linear-gradient(
      rgba(255, 255, 255, 0),
      white 70%
    ) center bottom,

    /* Shadow TOP */
    radial-gradient(
      farthest-side at 50% 0,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    ) center top,

    /* Shadow BOTTOM */
    radial-gradient(
      farthest-side at 50% 100%,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    ) center bottom`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 40px, 100% 40px, 100% 14px, 100% 14px",
  backgroundAttachment: "local, local, scroll, scroll",
};

const primaryColor = "#F16E42";
const secondaryColor = "#009476";

const codeFont = `"Fira Code", monospace`;
const sanSerifFont = `Oswald, Arial, Helvetica, sans-serif`;

const black = "#000";

const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightMedium = 500;
const fontWeightBold = 700;

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
      default: black,
      paper: black,
    },
  },
  typography: {
    fontFamily: codeFont,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
    h1: {
      letterSpacing: "0.6rem",
      fontSize: "6rem",
      textTransform: "uppercase",
      fontWeight: fontWeightRegular,
      fontFamily: sanSerifFont,
    },
    h2: {
      letterSpacing: "0.5rem",
      fontSize: "5rem",
      textTransform: "uppercase",
      fontWeight: fontWeightRegular,
      fontFamily: sanSerifFont,
    },
    h3: {
      letterSpacing: "0.4rem",
      fontSize: "4rem",
      textTransform: "uppercase",
      fontWeight: fontWeightRegular,
      fontFamily: sanSerifFont,
    },
    h4: {
      letterSpacing: "0.175rem",
      fontSize: "1.75rem",
      textTransform: "uppercase",
      fontWeight: fontWeightBold,
      fontFamily: sanSerifFont,
    },
    h5: {
      letterSpacing: "0.15rem",
      fontSize: "1.5rem",
      textTransform: "uppercase",
      fontWeight: fontWeightBold,
      fontFamily: sanSerifFont,
    },
    h6: {
      letterSpacing: "0.125rem",
      fontSize: "1.25rem",
      textTransform: "uppercase",
      fontWeight: fontWeightBold,
      fontFamily: sanSerifFont,
    },
    body1: {
      letterSpacing: "normal",
      fontSize: "1rem",
    },
    body2: {
      letterSpacing: "normal",
      fontSize: "1rem",
      fontWeight: fontWeightLight,
      fontFamily: sanSerifFont,
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
