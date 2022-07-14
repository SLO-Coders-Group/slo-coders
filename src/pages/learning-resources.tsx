import { Box, Paper, Typography, useTheme } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/layout";
import { Link } from "../components/link";
import { LearningResourcesList } from "../components/listings/learning-resources-list";

const LearningResourcesPage: NextPage = () => {
  const theme = useTheme();

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
          variant="h4"
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
          <Typography mb={4}>
            If you are just learning to code, looking to learn a new language,
            or maybe just hoping to keep your skills sharp and current, then
            check out these resources to help you along your journey.
          </Typography>
          <Typography variant="body2">
            If you would like to contribute new data, modify existing listings,
            or report a mistake, please{" "}
            <Link
              underline="hover"
              href="https://github.com/SLO-Coders-Group/slo-coders/edit/main/src/data/learning-resources.ts"
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
          <LearningResourcesList />
        </Paper>
      </Layout>
    </>
  );
};

export default LearningResourcesPage;
