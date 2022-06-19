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
          px: xsBreakpoint ? 4 : smBreakpoint ? 6 : 8,
          columnGap: xsBreakpoint ? 4 : smBreakpoint ? 6 : 8,
          rowGap: 1,
          flexWrap: "wrap",
        }}
      >
        {/*
          TODO: figure out a good way to add bullets in between links
          but not have a hanging bullet when links wrap
          bullets would be the theme secondary color
        */}
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
        <Typography variant="h6" color="inherit">
          <Link
            color="inherit"
            href="/tech-recruiters"
            underline="hover"
            sx={{ whiteSpace: "nowrap" }}
          >
            Tech Recruiters
          </Link>
        </Typography>
        <Typography variant="h6" color="inherit">
          <Link
            color="inherit"
            href="/coworking"
            underline="hover"
            sx={{ whiteSpace: "nowrap" }}
          >
            Coworking
          </Link>
        </Typography>
      </Box>
    </AppBar>
  );
};
