import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/layout";
import { Link } from "../components/link";
import { CoworkingSpacesList } from "../components/listings/coworking-spaces-list";

const CoworkingSpacesPage: NextPage = () => {
  const theme = useTheme();
  const xsBreakpoint = useMediaQuery(theme.breakpoints.only("xs"));
  const smBreakpoint = useMediaQuery(theme.breakpoints.only("sm"));

  return (
    <>
      <Head>
        <title key="title">Coworking Spaces • SLO County Coders</title>
        <meta
          key="description"
          name="description"
          content="A list of coworking spaces in San Luis Obispo county. Because you need coworkers that aren't your cat."
        />
        <link
          key="canonical"
          rel="canonical"
          href="https://slocountycoders.com/coworking-spaces"
        />
      </Head>
      <Layout page="coworking-spaces">
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
              px: 1.5,
            }}
          >
            Coworking Spaces in San Luis Obispo County
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
            Do you work remote and need some interaction from someone that isn
            &apos;t your cat? Or maybe you love your kids, but prefer not to
            have them guest star in every Zoom meeting? Then try out one of our
            fabulous co-working spaces here in SLO!
          </Typography>
          <Typography variant="body2" component="p">
            If you would like to contribute new data, modify existing listings,
            or report a mistake, please{" "}
            <Link
              underline="hover"
              href="https://github.com/SLO-Coders-Group/slo-coders/edit/main/src/data/coworking-spaces.ts"
              target="_blank"
            >
              create a pull request
            </Link>{" "}
            or contact us at{" "}
            <Link underline="hover" href="mailto:contact@slocountycoders.com">
              contact@slocountycoders.com
            </Link>
            .
          </Typography>
        </Paper>
        <Paper
          sx={{
            backgroundColor: "#FFF",
            borderRadius: "10px",
            color: "#000",
            padding: 3,
          }}
        >
          <CoworkingSpacesList />
        </Paper>
      </Layout>
    </>
  );
};

export default CoworkingSpacesPage;
