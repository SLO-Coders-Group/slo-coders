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
import { OnlineLearningResourcesList } from "../components/listings/online-learning-resources-list";
import { LocalLearningResourcesList } from "../components/listings/local-learning-resources-list";

const LearningResourcesPage: NextPage = () => {
  const theme = useTheme();
  const xsBreakpoint = useMediaQuery(theme.breakpoints.only("xs"));
  const smBreakpoint = useMediaQuery(theme.breakpoints.only("sm"));

  return (
    <>
      <Head>
        <title key="title">Learning Resources • SLO County Coders</title>
        <meta
          key="description"
          name="description"
          content="A set of resources to help you on your journey to become a coder or improve your coding skills."
        />
        <link
          key="canonical"
          rel="canonical"
          href="https://slocountycoders.com/learning-resources"
        />
      </Head>
      <Layout page="learning-resources">
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
            Learning Resources
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
            If you are just learning to code, looking to learn a new language,
            or maybe just hoping to keep your skills sharp and current, then
            check out these resources to help you along your journey.
          </Typography>
          <Typography variant="body2" component="p">
            If you would like to contribute new data, modify existing listings,
            or report a mistake, please{" "}
            <Link
              underline="hover"
              href="https://github.com/SLO-Coders-Group/slo-coders/edit/main/src/data/online-learning-resources.ts"
              target="_blank"
            >
              create a pull request for an online learning resource
            </Link>
            {", "}
            <Link
              underline="hover"
              href="https://github.com/SLO-Coders-Group/slo-coders/edit/main/src/data/local-learning-resources.ts"
              target="_blank"
            >
              create a pull request for a local learning resource
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
              <OnlineLearningResourcesList />
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
              <LocalLearningResourcesList />
            </Paper>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default LearningResourcesPage;
