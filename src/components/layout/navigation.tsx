import { FC, useState, MouseEvent } from "react";
import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
  Link,
} from "@mui/material";
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
          py: 1, // 1 unit which is 8px that matches the spacing below
          px: xsBreakpoint ? 4 : smBreakpoint ? 6 : 8,
          columnGap: xsBreakpoint ? 4 : smBreakpoint ? 6 : 8,
          rowGap: 1,
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant={xsBreakpoint || smBreakpoint ? "h6" : "h5"}
          component="p"
          color="inherit"
          sx={{ display: "inline-flex", position: "relative" }}
        >
          <Link
            component={NextLink}
            underline="hover"
            sx={{ whiteSpace: "nowrap" }}
            color="inherit"
            href="/"
          >
            Home
          </Link>
        </Typography>
        <Typography
          variant={xsBreakpoint || smBreakpoint ? "h6" : "h5"}
          component="p"
          color="inherit"
          sx={{ display: "inline-flex", position: "relative" }}
        >
          <Link
            component={NextLink}
            color="inherit"
            href="/events"
            underline="hover"
            sx={{ whiteSpace: "nowrap" }}
          >
            Events
          </Link>
        </Typography>
        <Typography
          variant={xsBreakpoint || smBreakpoint ? "h6" : "h5"}
          component="p"
          color="inherit"
          sx={{ display: "inline-flex", position: "relative" }}
        >
          <Link
            color="inherit"
            href="https://www.meetup.com/slocountycoders/?action=join"
            target="_blank"
            underline="hover"
            sx={{ whiteSpace: "nowrap" }}
          >
            Join
          </Link>
        </Typography>
        <Typography
          variant={xsBreakpoint || smBreakpoint ? "h6" : "h5"}
          component="p"
          color="inherit"
          sx={{ display: "inline-flex", position: "relative" }}
        >
          <Link
            color="inherit"
            onClick={handleClick}
            underline="hover"
            sx={{ whiteSpace: "nowrap", cursor: "pointer" }}
          >
            Resources
          </Link>
        </Typography>
        <Menu
          disableAutoFocusItem
          anchorEl={anchorElement}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: -8, // 8px which equals the 1 unit of padding above
            horizontal: "center",
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link component={NextLink} href="/businesses-with-coders">
              Businesses with Coders
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link component={NextLink} href="/coding-spaces">
              Coding spots
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link component={NextLink} href="/learning-resources">
              Learning Resources
            </Link>
          </MenuItem>
        </Menu>
      </Box>
    </AppBar>
  );
};
