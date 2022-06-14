import { Typography, Paper, Box, Link as MuiLink } from "@mui/material";
import type { NextPage } from "next";
import { useTheme } from "@mui/material/styles";
import Head from "next/head";
import { Layout } from "../components/layout";
import NextLink from "next/link";

const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title key="title">SLO Coders</title>
        <meta key="description" name="description" content="SLO Coders" />
        <link
          key="canonical"
          rel="canonical"
          href="https://www.slocoders.com/"
        />
      </Head>
      <Layout page="home">
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
            Let's show the tech industry what it's like
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
          <Typography mb={4}>
            SLO Coders was started to help find a community of individuals that
            love SLO and coding. We promote a healthy work/life balance to help
            support our community, ourselves, and our industry. We hope to host
            a wide range of events that brew inspiration and creativity and
            leave us ready to tackle our next coding challenge.
          </Typography>
          <Typography mb={4}>
            We welcome and love all kinds of coders regardless of skill level,
            gender preference, race, skin color, religion, background,
            schooling, disability, age, etc.
          </Typography>
          <Typography>
            If you share the drive and would like to contribute in some way or
            provide feedback or event ideas. (Yay!) You can email us at{" "}
            <MuiLink href="mailto:email@email.com">email@email.com</MuiLink>.
          </Typography>
        </Paper>
      </Layout>
    </>
  );
};

export default Home;
