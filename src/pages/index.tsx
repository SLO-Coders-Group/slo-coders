import { Typography, Paper, Box, useMediaQuery } from "@mui/material";
import type { NextPage } from "next";
import { useTheme } from "@mui/material/styles";
import Head from "next/head";
import { Layout } from "../components/layout";
import { Link } from "../components/link";

const HomePage: NextPage = () => {
  const theme = useTheme();
  const xsBreakpoint = useMediaQuery(theme.breakpoints.only("xs"));
  const smBreakpoint = useMediaQuery(theme.breakpoints.only("sm"));

  return (
    <>
      <Head>
        <title key="title">SLO County Coders</title>
        <meta
          key="description"
          name="description"
          content="A group of coders living in SLO county. 🙂 Happy coders for a happy community."
        />
        <link
          key="canonical"
          rel="canonical"
          href="https://slocountycoders.com/"
        />
      </Head>
      <Layout page="home">
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
              display: "block",
              borderBottom: `1px solid #eddbcc`,
              mx: 0.5,
            }}
          >
            {"Let's show the tech industry what it's like"}
          </Box>
          <Box
            component="span"
            sx={{
              transform: "translate(0, 10px)",
              display: "inline-block",
              borderBottom: `1px solid #eddbcc`,
              px: 1,
              mx: 0.5,
            }}
          >
            to
          </Box>
          <Box
            component="span"
            sx={{
              transform: "translate(0, 18px)",
              display: "inline-block",
              px: 2.5,
              mx: 0.5,
              color: theme.palette.primary.main,
              borderBottom: `1px solid #eddbcc`,
            }}
          >
            SLO
          </Box>
          <Box
            component="span"
            sx={{
              transform: "translate(0, 36px)",
              display: "inline-block",
              mx: 0.5,
              px: 1,
              borderBottom: `1px solid #eddbcc`,
            }}
          >
            down
          </Box>
        </Typography>
        <Paper
          sx={{
            backgroundColor: "#FFF",
            borderRadius: "10px",
            color: "#000",
            padding: 3,
          }}
        >
          <Typography variant="body1" component="h4" mb={4}>
            A group of coders living in SLO county. 🙂 Happy coders for a happy
            community.
          </Typography>
          <Typography variant="body1" component="p" mb={4}>
            SLO County Coders is a group of programmers, developers, software
            engineers, etc. who live and play in SLO county. We promote having a
            healthy work/life balance to support ourselves and therefore our
            community and industry. We hope to host a wide range of events that
            brew inspiration and creativity and leave us ready to tackle our
            next coding challenge.
          </Typography>
          <Typography variant="body1" component="p" mb={4}>
            We welcome and love all kinds of coders regardless of skill level,
            gender preference, race, skin color, religion, background,
            schooling, disability, age, etc.
          </Typography>
          <Typography variant="body2" component="p">
            If you share the drive and would like to contribute in some way or
            provide feedback or event ideas. (Yay!) You can email us at{" "}
            <Link underline="hover" href="mailto:contact@slocountycoders.com">
              contact@slocountycoders.com
            </Link>
            .
          </Typography>
        </Paper>
      </Layout>
    </>
  );
};

export default HomePage;
