import {
  Box,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
  Link,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/layout";
import NextLink from "next/link";
import { LearningResourcesList } from "../components/listings/learning-resources-list";
import { BusinessesWithCodersList } from "../components/listings/businesses-with-coders-list";
import { CoworkingSpacesList } from "../components/listings/coworking-spaces-list";
import { JobPostingsList } from "../components/listings/job-postings-list";
import { addStructuredData } from "./_document";

const LearningResourcesPage: NextPage = () => {
  const theme = useTheme();
  const xsBreakpoint = useMediaQuery(theme.breakpoints.only("xs"));
  const smBreakpoint = useMediaQuery(theme.breakpoints.only("sm"));

  return (
    <>
      <Head>
        <title key="title">Resources | SLO County Coders</title>
        <meta
          key="og-title"
          property="og:title"
          content="Resources for coders in San Luis Obispo county"
        />
        <meta
          key="description"
          name="description"
          content="Resources for coders in San Luis Obispo county - Businesses with Coders in SLO, Local learning Resources, Coworking Spaces, and Job Postings."
        />
        <meta
          key="og-description"
          property="og:description"
          content="Businesses with Coders in SLO, Local learning Resources, Coworking Spaces, and Job Postings."
        />
        <link
          key="canonical"
          rel="canonical"
          href="https://www.slocountycoders.com/resources/"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addStructuredData("resources")}
          key="product-jsonld"
        />
      </Head>
      <Layout
        tagline="Resources for coders in San Luis Obispo county"
        link="Home"
      >
        <Typography
          variant={xsBreakpoint || smBreakpoint ? "h5" : "h4"}
          component="h2"
          color="primary"
          align="center"
          mb={4}
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
            Businesses with Coders in SLO
          </Box>
        </Typography>
        <Box>
          <Paper
            sx={{
              backgroundColor: "#FFF",
              borderRadius: "10px",
              color: "#000",
              padding: 3,
              height: "100%",
            }}
          >
            <BusinessesWithCodersList />
          </Paper>
        </Box>

        <Typography
          variant={xsBreakpoint || smBreakpoint ? "h5" : "h4"}
          component="h2"
          color="primary"
          align="center"
          mt={8}
          mb={4}
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
            Learning Resources
          </Box>
        </Typography>
        <Box>
          <Paper
            sx={{
              backgroundColor: "#FFF",
              borderRadius: "10px",
              color: "#000",
              padding: 3,
              height: "100%",
            }}
          >
            <LearningResourcesList />
          </Paper>
        </Box>

        <Typography
          variant={xsBreakpoint || smBreakpoint ? "h5" : "h4"}
          component="h2"
          color="primary"
          align="center"
          mt={8}
          mb={4}
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
            Coworking Spaces
          </Box>
        </Typography>
        <Box>
          <Paper
            sx={{
              backgroundColor: "#FFF",
              borderRadius: "10px",
              color: "#000",
              padding: 3,
              height: "100%",
            }}
          >
            <CoworkingSpacesList />
          </Paper>
        </Box>

        {/* <Typography
          variant={xsBreakpoint || smBreakpoint ? "h5" : "h4"}
          component="h2"
          color="primary"
          align="center"
          mt={8}
          mb={4}
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
            Job postings
          </Box>
        </Typography>
        <Box>
          <Paper
            sx={{
              backgroundColor: "#FFF",
              borderRadius: "10px",
              color: "#000",
              padding: 3,
              height: "100%",
            }}
          >
            <JobPostingsList />
          </Paper>
        </Box> */}

        <Paper
          sx={{
            backgroundColor: "#FFF",
            borderRadius: "10px",
            color: "#000",
            padding: 3,
            mt: 8,
          }}
        >
          <Typography variant="body2" component="p">
            If you would like to contribute new data, modify existing listings,
            or report a mistake, please{" "}
            <Link
              underline="hover"
              href="https://github.com/SLO-Coders-Group/slo-coders/tree/main/src/data"
              target="_blank"
            >
              create a pull request
            </Link>
            {", "}
            email us at{" "}
            <Link
              component={NextLink}
              underline="hover"
              href="mailto:contact@slocountycoders.com"
            >
              contact@slocountycoders.com
            </Link>
            .
          </Typography>
        </Paper>
      </Layout>
    </>
  );
};

export default LearningResourcesPage;
