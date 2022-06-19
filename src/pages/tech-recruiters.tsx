import { Box, Link, Paper, Typography, useTheme } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/layout";
import { TechRecruitersList } from "../components/listings/tech-recruiters-list";

const TechRecruiters: NextPage = () => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title key="title">Tech recruiters • SLO Coders</title>
        <meta
          key="description"
          name="description"
          content="A list of tech recruiters in San Luis Obispo county to help you find your dream job."
        />
        <link
          key="canonical"
          rel="canonical"
          href="https://slocoders.com/tech-recruiters"
        />
      </Head>
      <Layout page="tech-recruiters">
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
            Tech Recruiters in San Luis Obispo County
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
            Are you looking for some assistance finding your dream job? Here is
            a list of some recruiters and recruiting companies in SLO county
            that can help out!
          </Typography>
          <Typography variant="body2">
            If you would like to contribute new data, modify existing listings,
            or report a mistake, please{" "}
            <Link
              href="https://github.com/lenzi-erickson/slo-coders/edit/main/src/data/tech-recruiters.ts"
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
          <TechRecruitersList />
        </Paper>
      </Layout>
    </>
  );
};

export default TechRecruiters;
