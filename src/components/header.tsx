import { FC } from "react";
import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";

export const Header: FC = () => {
  const theme = useTheme();

  const xsBreakpoint = useMediaQuery(theme.breakpoints.only("xs"));
  const smBreakpoint = useMediaQuery(theme.breakpoints.only("sm"));

  return (
    <Paper
      elevation={6}
      square
      sx={{
        px: xsBreakpoint ? 4 : smBreakpoint ? 7 : 10,
        py: 3,
        mt: 6,
        mb: 2,
        // wrapper style
        width: xsBreakpoint ? "100%" : smBreakpoint ? "85%" : "75%",
        mx: "auto",
        minWidth: 350,
      }}
    >
      <Typography
        variant="h1"
        color="primary"
        align="center"
        sx={{
          fontSize: xsBreakpoint ? "4rem" : smBreakpoint ? "5rem" : "6rem",
        }}
      >
        SLO
        <Box
          component="span"
          sx={{
            fontFamily: "Fira Code, Oswald, Arial, Helvetica, sans-serif",
            transform: "translate(0, .55rem)",
            display: "inline-block",
            marginLeft: "2rem",
            letterSpacing: "normal",
          }}
        >
          Coders
        </Box>
      </Typography>
    </Paper>
  );
};
