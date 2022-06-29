import { Box, Paper, Typography, useTheme } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/layout";
import { Link } from "../components/link";
import { TechCompaniesList } from "../components/listings/tech-companies-list";

const TechCompaniesPage: NextPage = () => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title key="title">Tech Companies • SLO Coders</title>
        <meta
          key="description"
          name="description"
          content="A list of tech companies in San Luis Obispo county for all kinds of developers, engineers, and coders to find their dream work home."
        />
        <link
          key="canonical"
          rel="canonical"
          href="https://slocoders.com/tech-companies"
        />
      </Head>
      <Layout page="tech-companies">
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
            Tech Companies in San Luis Obispo County
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
            We love to help developers, engineers, coders, etc. find their
            perfect work home in our amazing San Luis Obispo county. Here is a
            list of all the tech companies we know of.
          </Typography>
          <Typography variant="body2">
            This page was inspired by{" "}
            <Link href="https://slotechcompanies.com/" target="_blank">
              slotechcompanies.com
            </Link>
            . If you would like to contribute new data, modify existing
            listings, or report a mistake, please{" "}
            <Link
              href="https://github.com/lenzi-erickson/slo-coders/edit/main/src/data/tech-companies.ts"
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
          <TechCompaniesList />
        </Paper>
      </Layout>
    </>
  );
};

export default TechCompaniesPage;
