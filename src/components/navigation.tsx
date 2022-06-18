import { FC } from "react";
import {
  AppBar,
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

  const navTypographyStyle = {
    py: 0.25,
    "&:after": {
      content: '"•"',
      px: xsBreakpoint ? 2 : smBreakpoint ? 4 : 6,
      color: "secondary.main",
    },
    "&:last-child:after": { content: "none", px: 0 },
  };

  return (
    <AppBar
      position="static"
      sx={{
        color: "#000",
        background: "#FFF",
      }}
    >
      <Toolbar
        variant="dense"
        sx={{
          justifyContent: "center",
          py: 1,
          flexWrap: "wrap",
        }}
      >
        <Typography variant="h6" color="inherit" sx={navTypographyStyle}>
          <Link
            underline="hover"
            sx={{ whiteSpace: "nowrap" }}
            color="inherit"
            href="/"
          >
            Home
          </Link>
        </Typography>
        <Typography variant="h6" color="inherit" sx={navTypographyStyle}>
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
        <Typography variant="h6" color="inherit" sx={navTypographyStyle}>
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
        <Typography variant="h6" color="inherit" sx={navTypographyStyle}>
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
