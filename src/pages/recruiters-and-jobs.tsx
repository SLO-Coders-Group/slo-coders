import { Box, Grid, Link, Paper, Typography, useTheme } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/layout";
import { JobResourcesList } from "../components/listings/job-resources-list";
import { RecruitersList } from "../components/listings/recruiters-list";

const RecruitersAndJobsPage: NextPage = () => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title key="title">Recruiters and Jobs • SLO County Coders</title>
        <meta
          key="description"
          name="description"
          content="A list of coding recruiters and jobs in San Luis Obispo county to help you find your dream gig."
        />
        <link
          key="canonical"
          rel="canonical"
          href="https://slocountycoders.com/recruiters-and-jobs"
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
              underline="hover"
              href="https://github.com/SLO-Coders-Group/slo-coders/edit/main/src/data/job-resources.ts"
              target="_blank"
            >
              create a pull request for a job resource
            </Link>
            {", "}
            <Link
              underline="hover"
              href="https://github.com/SLO-Coders-Group/slo-coders/edit/main/src/data/recruiters.ts"
              target="_blank"
            >
              create a pull request for a recruiter
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
              <JobResourcesList />
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
              <RecruitersList />
            </Paper>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default RecruitersAndJobsPage;
