import { FC } from "react";
import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";

export const Header: FC = () => {
  const theme = useTheme();

  const xsBreakpoint = useMediaQuery(theme.breakpoints.only("xs"));
  const smBreakpoint = useMediaQuery(theme.breakpoints.only("sm"));
  const mdBreakpoint = useMediaQuery(theme.breakpoints.only("md"));
  const lgBreakpoint = useMediaQuery(theme.breakpoints.only("lg"));

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
        variant={
          xsBreakpoint || smBreakpoint
            ? "h3"
            : mdBreakpoint || lgBreakpoint
            ? "h2"
            : "h1"
        }
        component="h1"
        color="primary"
        align="center"
      >
        <Box
          component="span"
          sx={{
            textTransform: "none",
          }}
        >
          SLO County{" "}
        </Box>
        <Box
          component="span"
          sx={{
            fontFamily: theme.typography.fontFamily,
            letterSpacing: "normal",
            textTransform: "none",
            display: "block",
          }}
        >
          Coders
        </Box>
      </Typography>
    </Paper>
  );
};
