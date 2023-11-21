import { Typography, Paper, Box, useMediaQuery, Link } from "@mui/material";
import type { NextPage } from "next";
import { useTheme } from "@mui/material/styles";
import Head from "next/head";
import { Layout } from "../components/layout";
import NextLink from "next/link";
import { Event } from "../components/event";

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
          content="A group of coders, developers, and programmers in San Luis Obispo county gathering for friendship, support, fun, and inspiration."
        />
        <link
          key="canonical"
          rel="canonical"
          href="https://www.slocountycoders.com/"
        />
      </Head>
      <Layout
        tagline="A group of coders in San Luis Obispo county"
        link="Resources"
      >
        <Typography
          variant={xsBreakpoint || smBreakpoint ? "h5" : "h4"}
          component="h3"
          color="primary"
          align="center"
          mb={8}
          sx={{
            color: theme.palette.common.white,
            px: 1.5,
          }}
        >
          <Box
            component="span"
            sx={{
              display: "block",
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
              {"Let's show the tech industry what it's like"}
            </Box>
          </Box>
          <Box
            component="span"
            sx={{
              display: "block",
            }}
          >
            <Box
              component="span"
              sx={{
                transform: "translate(0, 10px)",
                display: "inline-block",
                borderBottom: `1px solid #eddbcc`,
                px: 1.5,
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
                px: 1.5,
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
                px: 1.5,
                borderBottom: `1px solid #eddbcc`,
              }}
            >
              down
            </Box>
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
            A community of coders, developers, and programmers gathering for
            friendship, support, fun, and inspiration. 🙂 We love our beautiful
            county and this wild and fun profession. We hope you&apos;ll join us
            for the ride.
          </Typography>

          <Typography
            variant="h5"
            component="p"
            mb={4}
            sx={{
              width: "100%",
              textAlign: "center",
              fontWeight: "500",
              color: "#eddbcc",
            }}
          >
            {`</> </> </>`}
          </Typography>

          <Event
            title="Shop Talk"
            when="Third Monday of every month from 5:30 pm to 6:30 pm"
            city="San Luis Obispo"
            details="Shop Talk is our nightly monthly gathering with a different topic or presentation each time. Afterwards there will be a general discussion, where we can “talk shop” and get to know each other."
          />
          <Event
            title="Code &amp; Coffee"
            when="Second Saturday of every month from 10 am to 11:30 am"
            city="San Luis Obispo"
            details="A very casual Saturday morning working session where we get together to code and chat about code. Be inspired to work on a fun side project, or chat about some new skills you learned."
          />
          <Event
            title="Coffee Break"
            when="First Thursday of every month from 8 am to 9 am"
            city="San Luis Obispo"
            details="Coffee Break is a relaxing pre-work morning get-together where we enjoy good conversation, each other's company, and our favorite morning beverages. Fun conversation starters could be a coding bug you are stuck on, a new technology that just came out, your favorite way to get organized, etc."
          />

          <Typography
            variant="h5"
            component="p"
            mb={4}
            sx={{ width: "100%", textAlign: "center", color: "#eddbcc" }}
          >
            {`</> </> </>`}
          </Typography>

          <Typography variant="body2" component="p">
            If you share the drive and would like to contribute in some way or
            provide feedback or event ideas. (Yay! 🎉) You can email us at{" "}
            <Link
              component={NextLink}
              underline="hover"
              href="mailto:contact@slocountycoders.com"
            >
              contact@slocountycoders.com
            </Link>{" "}
            or message us on Discord (link is in the Meetup comments/discussion
            section, email if you need help finding it!).
          </Typography>
        </Paper>
      </Layout>
    </>
  );
};

export default HomePage;
