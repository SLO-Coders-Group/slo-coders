import { FC } from "react";
import { Paper, Typography } from "@mui/material";

export const Header: FC = () => {
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
        minWidth: 450,
      }}
    >
      <Typography variant="h1" color="primary" align="center">
        SLO Coders
      </Typography>
    </Paper>
  );
};
