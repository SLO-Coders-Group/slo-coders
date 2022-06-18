import { FC } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "./link";

export const Navigation: FC = () => {
  const theme = useTheme();
  const xsBreakpoint = useMediaQuery(theme.breakpoints.only("xs"));
  const smBreakpoint = useMediaQuery(theme.breakpoints.only("sm"));

  return (
    <AppBar
      position="static"
      sx={{
        color: "#000",
        background: "#FFF",
        width: "75%",
        minWidth: 450,
        mx: "auto",
      }}
    >
      <Toolbar variant="dense" sx={{ justifyContent: "center" }}>
        <Typography
          variant="h6"
          color="inherit"
          sx={{
            px: 6,
            // fontSize: xsBreakpoint ? "1rem" : undefined,
          }}
        >
          <Link
            underline="hover"
            sx={{ whiteSpace: "nowrap" }}
            color="inherit"
            href="/"
          >
            Home
          </Link>
          <Box
            component="span"
            sx={{
              px: xsBreakpoint ? 1 : smBreakpoint ? 2.5 : 4,
              color: "secondary.main",
            }}
          >
            {" "}
            •{" "}
          </Box>
          <Link
            color="inherit"
            href="https://www.meetup.com/slo-coders/events/"
            target="_blank"
            underline="hover"
            sx={{ whiteSpace: "nowrap" }}
          >
            Events
          </Link>
          <Box
            component="span"
            sx={{
              px: xsBreakpoint ? 1 : smBreakpoint ? 2.5 : 4,
              color: "secondary.main",
            }}
          >
            {" "}
            •{" "}
          </Box>
          <Link
            color="inherit"
            href="https://www.meetup.com/slo-coders/?action=join"
            target="_blank"
            underline="hover"
            sx={{ whiteSpace: "nowrap" }}
          >
            Join
          </Link>
          <Box
            component="span"
            sx={{
              px: xsBreakpoint ? 1 : smBreakpoint ? 2.5 : 4,
              color: "secondary.main",
            }}
          >
            {" "}
            •{" "}
          </Box>
          <Link
            color="inherit"
            href="/tech-companies"
            underline="hover"
            sx={{ whiteSpace: "nowrap" }}
          >
            Tech Companies
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
