import { FC } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "./link";

export const Navigation: FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        color: "#000",
        background: "#FFF",
      }}
    >
      <Toolbar variant="dense" sx={{ justifyContent: "center" }}>
        <Typography variant="h6" color="inherit" sx={{ px: 6 }}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
        </Typography>
        <Typography variant="h6" color="inherit" sx={{ px: 6 }}>
          <Link
            color="inherit"
            href="https://www.meetup.com/slo-coders/events/"
            target="_blank"
            underline="hover"
          >
            Events
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
