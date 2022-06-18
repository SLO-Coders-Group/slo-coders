import { FC } from "react";
import { Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { minScreenSize } from "../styles/theme";

export const Header: FC = () => {
  const theme = useTheme();
  const xsBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper
      elevation={6}
      square
      sx={{
        px: 8,
        py: 3,
        width: "75%",
        mt: 6,
        mb: 2,
        mx: "auto",
        minWidth: minScreenSize,
      }}
    >
      <Typography
        variant="h1"
        color="primary"
        align="center"
        sx={{ fontSize: xsBreakpoint ? "4rem" : undefined }}
      >
        SLO Coders
      </Typography>
    </Paper>
  );
};
