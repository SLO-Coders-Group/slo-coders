import { FC } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
  Link,
} from "@mui/material";
import { SloCountyCodersLogoIcon } from "../icons/slo-county-coders-logo.icon";
import NextLink from "next/link";

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
        px:
          xsBreakpoint || smBreakpoint
            ? 2
            : mdBreakpoint || lgBreakpoint
              ? 7
              : 12,
        py: 3,
        mt: 6,
        mb: 2,
        // wrapper style
        width: xsBreakpoint ? "100%" : smBreakpoint ? "85%" : "75%",
        mx: "auto",
        minWidth: 350,
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        columnSpacing={
          xsBreakpoint || smBreakpoint
            ? 3
            : mdBreakpoint || lgBreakpoint
              ? 5
              : 7
        }
        rowSpacing={
          xsBreakpoint || smBreakpoint
            ? 1
            : mdBreakpoint || lgBreakpoint
              ? 2
              : 3
        }
      >
        <Grid item>
          <Link href="/" component={NextLink}>
            <SloCountyCodersLogoIcon
              fontSize={
                xsBreakpoint || smBreakpoint
                  ? 120
                  : mdBreakpoint || lgBreakpoint
                    ? 150
                    : 180
              }
            />
          </Link>
        </Grid>
        <Grid item>
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
            sx={{
              textTransform: "none",
            }}
          >
            SLO County
            <Box
              component="span"
              sx={{
                fontFamily: theme.typography.fontFamily,
                letterSpacing: "normal",
                display: "inline-block",
              }}
            >
              Coders
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
