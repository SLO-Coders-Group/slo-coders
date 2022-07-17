import {
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/layout";
import { Link } from "../components/link";
import { BusinessesWithSloCodersList } from "../components/listings/businesses-with-slo-coders-list";
import { SloBusinessesWithCodersList } from "../components/listings/slo-businesses-with-coders-list";

const BusinessesWithCodersPage: NextPage = () => {
  const theme = useTheme();
  const xsBreakpoint = useMediaQuery(theme.breakpoints.only("xs"));
  const smBreakpoint = useMediaQuery(theme.breakpoints.only("sm"));

  return (
    <>
      <Head>
        <title key="title">Businesses with Coders • SLO County Coders</title>
        <meta
          key="description"
          name="description"
          content="A list of businesses with coders in San Luis Obispo county for all kinds of developers, engineers, and coders to find their dream work home."
        />
        <link
          key="canonical"
          rel="canonical"
          href="https://slocountycoders.com/businesses-with-coders"
        />
      </Head>
      <Layout page="businesses-with-coders">
        <Typography
          variant={xsBreakpoint || smBreakpoint ? "h5" : "h4"}
          component="h2"
          color="primary"
          align="center"
          mb={8}
          sx={{
            color: theme.palette.common.white,
          }}
        >
          <Box
            component="span"
            sx={{
              display: "inline-block",
              borderBottom: `1px solid #eddbcc`,
              mx: 0.5,
            }}
          >
            Businesses with Coders in San Luis Obispo County
          </Box>
        </Typography>
        <Paper
          sx={{
            backgroundColor: "#FFF",
            borderRadius: "10px",
            color: "#000",
            padding: 3,
            mb: 3,
          }}
        >
          <Typography variant="body1" component="p" mb={4}>
            We love to help developers, engineers, coders, etc. find their
            perfect work home in our amazing San Luis Obispo county. Here is a
            compiled list of all businesses, that we know of, that have coders
            in SLO county.
          </Typography>
          <Typography variant="body2" component="p">
            This page was inspired by{" "}
            <Link
              underline="hover"
              href="https://slotechcompanies.com/"
              target="_blank"
            >
              slotechcompanies.com
            </Link>
            . If you would like to contribute new data, modify existing
            listings, or report a mistake, please{" "}
            <Link
              underline="hover"
              href="https://github.com/SLO-Coders-Group/slo-coders/edit/main/src/data/slo-businesses-with-coders.ts"
              target="_blank"
            >
              create a pull request for a slo business
            </Link>
            {", "}
            <Link
              underline="hover"
              href="https://github.com/SLO-Coders-Group/slo-coders/edit/main/src/data/businesses-with-slo-coders.ts"
              target="_blank"
            >
              create a pull request for a remote business
            </Link>{" "}
            or contact us at{" "}
            <Link underline="hover" href="mailto:contact@slocountycoders.com">
              contact@slocountycoders.com
            </Link>
            .
          </Typography>
        </Paper>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={7} xl={8}>
            <Paper
              sx={{
                backgroundColor: "#FFF",
                borderRadius: "10px",
                color: "#000",
                padding: 3,
              }}
            >
              <SloBusinessesWithCodersList />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={5} xl={4}>
            <Paper
              sx={{
                backgroundColor: "#FFF",
                borderRadius: "10px",
                color: "#000",
                padding: 3,
              }}
            >
              <BusinessesWithSloCodersList />
            </Paper>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default BusinessesWithCodersPage;
