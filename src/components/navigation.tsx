import { FC } from "react";
import {
  AppBar,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "./link";

export const Navigation: FC = () => {
  const theme = useTheme();

  const xsBreakpoint = useMediaQuery(theme.breakpoints.only("xs"));
  const smBreakpoint = useMediaQuery(theme.breakpoints.only("sm"));

  // TODO: figure out a better way to add the bullet dividers
  // if it wraps there is always a bullet on the top we don't want
  //  until then just do it on lg and up
  const lgBreakpointAndUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <AppBar
      position="static"
      sx={{
        color: "#000",
        background: "#FFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 1,
          px: xsBreakpoint ? 4 : smBreakpoint ? 7 : 10,
          columnGap:
            xsBreakpoint || lgBreakpointAndUp ? 4 : smBreakpoint ? 7 : 10,
          rowGap: 1,
          flexWrap: "wrap",
        }}
      >
        <Typography variant="h6" color="inherit">
          <Link
            underline="hover"
            sx={{ whiteSpace: "nowrap" }}
            color="inherit"
            href="/"
          >
            Home
          </Link>
        </Typography>
        {lgBreakpointAndUp && (
          <Box
            component="span"
            sx={{
              px: xsBreakpoint ? 1 : smBreakpoint ? 2.5 : 4,
              color: "secondary.main",
            }}
          >
            •
          </Box>
        )}
        <Typography variant="h6" color="inherit">
          <Link
            color="inherit"
            href="https://www.meetup.com/slo-coders/events/"
            target="_blank"
            underline="hover"
            sx={{ whiteSpace: "nowrap" }}
          >
            Events
          </Link>
        </Typography>
        {lgBreakpointAndUp && (
          <Box
            component="span"
            sx={{
              px: xsBreakpoint ? 1 : smBreakpoint ? 2.5 : 4,
              color: "secondary.main",
            }}
          >
            •
          </Box>
        )}
        <Typography variant="h6" color="inherit">
          <Link
            color="inherit"
            href="https://www.meetup.com/slo-coders/?action=join"
            target="_blank"
            underline="hover"
            sx={{ whiteSpace: "nowrap" }}
          >
            Join
          </Link>
        </Typography>
        {lgBreakpointAndUp && (
          <Box
            component="span"
            sx={{
              px: xsBreakpoint ? 1 : smBreakpoint ? 2.5 : 4,
              color: "secondary.main",
            }}
          >
            •
          </Box>
        )}
        <Typography variant="h6" color="inherit">
          <Link
            color="inherit"
            href="/tech-companies"
            underline="hover"
            sx={{ whiteSpace: "nowrap" }}
          >
            Tech Companies
          </Link>
        </Typography>
      </Box>
    </AppBar>
  );
};
