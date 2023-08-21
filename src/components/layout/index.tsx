import { FC, ReactNode } from "react";
import { AppBar, Box, Paper, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Footer } from "./footer";
import { Header } from "./header";
import { Link } from "../link";
// import { Navigation } from "./navigation";

interface Props {
  children: ReactNode;
  link: "Resources" | "Home";
  tagline: string;
}

export const Layout: FC<Props> = ({ children, link, tagline }) => {
  const theme = useTheme();

  const xsBreakpoint = useMediaQuery(theme.breakpoints.only("xs"));
  const smBreakpoint = useMediaQuery(theme.breakpoints.only("sm"));
  const mdBreakpoint = useMediaQuery(theme.breakpoints.only("md"));
  const lgBreakpoint = useMediaQuery(theme.breakpoints.only("lg"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        height: "100%",
        backgroundColor: "#eddbcc",
        backgroundImage:
          "linear-gradient(45deg, #FFF 25%, transparent 25%), linear-gradient(135deg, #FFF 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #FFF 75%), linear-gradient(135deg, transparent 75%, #FFF 75%)",
        backgroundSize: "80px 80px",
        backgroundPosition: "0 0, 40px 0, 40px -40px, 0px 40px",
        overflow: "scroll",
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.common.white,
          width: "100%",
          minHeight: 6,
          boxShadow: `0 0 0 4px ${theme.palette.secondary.main}, 0 0 0 7px white, 0 0 0 10px black`,
          zIndex: theme.zIndex.tooltip,
          position: "fixed",
          top: "0",
        }}
      />
      <Header />
      <Box
        sx={{
          flexGrow: 1,
          mb: 2,
          // wrapper style - modified
          maxWidth: xsBreakpoint ? "100%" : smBreakpoint ? "85%" : "75%",
          mx: "auto",
          width: "auto",
        }}
      >
        <AppBar
          position="static"
          sx={{
            color: "#000",
            background: "#FFF",
            paddingX: 8,
            paddingY: 2,
          }}
        >
          <Typography
            variant={
              xsBreakpoint || smBreakpoint
                ? "h6"
                : mdBreakpoint || lgBreakpoint
                ? "h5"
                : "h4"
            }
            component="h2"
            sx={{ width: "100%", textAlign: "center" }}
          >
            {tagline}
          </Typography>
        </AppBar>
      </Box>
      <Paper
        elevation={6}
        square
        sx={{
          px:
            xsBreakpoint || smBreakpoint
              ? 2
              : mdBreakpoint || lgBreakpoint
              ? 7
              : 12,
          py: 10,
          mb: 6,
          // wrapper style
          width: xsBreakpoint ? "100%" : smBreakpoint ? "85%" : "75%",
          mx: "auto",
          minWidth: 350,
        }}
      >
        {children}
      </Paper>

      <Box
        sx={{
          flexGrow: 1,
          mb: 2,
          // wrapper style - modified
          maxWidth: xsBreakpoint ? "100%" : smBreakpoint ? "85%" : "75%",
          mx: "auto",
          minWidth: 0,
          width: "auto",
        }}
      >
        <AppBar
          position="static"
          sx={{
            color: "#000",
            background: "#FFF",
            paddingX: 8,
            paddingY: 2,
            marginBottom: 3,
          }}
        >
          <Typography
            variant={
              xsBreakpoint || smBreakpoint
                ? "h6"
                : mdBreakpoint || lgBreakpoint
                ? "h5"
                : "h4"
            }
            component="h2"
            sx={{ width: "100%", textAlign: "center" }}
          >
            <Box component="span" whiteSpace={"nowrap"}>
              {"🌴 "}
            </Box>
            {link === "Home" ? (
              <Link href="/" underline="hover" color="secondary">
                {"Back to SLO County Coders"}
              </Link>
            ) : (
              <Link href="/resources" underline="hover" color="secondary">
                Local resources
              </Link>
            )}
            <Box component="span" whiteSpace={"nowrap"}>
              {" 🌴"}
            </Box>
          </Typography>
        </AppBar>
      </Box>

      <Footer />
    </Box>
  );
};
