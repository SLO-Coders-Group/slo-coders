import { Box, Link, Paper, Typography, useTheme } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/layout";
import { RecruitersAndJobsList } from "../components/listings/recruiters-and-jobs-list";

const RecruitersAndJobsPage: NextPage = () => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title key="title">Recruiters and Jobs • SLO Coders</title>
        <meta
          key="description"
          name="description"
          content="A list of coding recruiters and jobs in San Luis Obispo county to help you find your dream gig."
        />
        <link
          key="canonical"
          rel="canonical"
          href="https://slocoders.com/recruiters-and-jobs"
        />
      </Head>
      <Layout page="recruiters-and-jobs">
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
            Recruiters and Jobs in San Luis Obispo County
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
            Are you looking for some assistance finding your dream gig? Here is
            a list of some recruiters that would love to help you find the
            perfect fit along with some resources for finding coding jobs in
            SLO.
          </Typography>
          <Typography variant="body2">
            If you would like to contribute new data, modify existing listings,
            or report a mistake, please{" "}
            <Link
              href="https://github.com/lenzi-erickson/slo-coders/edit/main/src/data/recruiters-and-jobs.ts"
              target="_blank"
            >
              create a pull request
            </Link>{" "}
            or contact us at{" "}
            <Link underline="hover" href="mailto:contact@slocoders.com">
              contact@slocoders.com
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
          <RecruitersAndJobsList />
        </Paper>
      </Layout>
    </>
  );
};

export default RecruitersAndJobsPage;
