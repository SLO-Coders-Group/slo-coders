import { FC, useState, MouseEvent } from "react";
import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "./link";
import NextLink from "next/link";

export const Navigation: FC = () => {
  const theme = useTheme();

  const xsBreakpoint = useMediaQuery(theme.breakpoints.only("xs"));
  const smBreakpoint = useMediaQuery(theme.breakpoints.only("sm"));

  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };

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
          <MuiLink
            color="inherit"
            onClick={handleClick}
            underline="hover"
            sx={{ whiteSpace: "nowrap", cursor: "pointer" }}
          >
            Resources
          </MuiLink>
        </Typography>
        <Menu
          anchorEl={anchorElement}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: -10,
            horizontal: "center",
          }}
        >
          <MenuItem onClick={handleClose}>
            <NextLink href="/businesses-with-coders">
              Businesses with Coders
            </NextLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <NextLink href="/recruiters-and-jobs">Recruiters and Jobs</NextLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <NextLink href="/coworking-spaces">Coworking Spaces</NextLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <NextLink href="/learning-resources">Learning Resources</NextLink>
          </MenuItem>
        </Menu>
      </Box>
    </AppBar>
  );
};
