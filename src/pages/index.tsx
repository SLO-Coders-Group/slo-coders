import { Typography, Paper, Box, useMediaQuery, Link } from "@mui/material";
import type { NextPage } from "next";
import { useTheme } from "@mui/material/styles";
import Head from "next/head";
import { Layout } from "../components/layout";
import NextLink from "next/link";
import { Event } from "../components/event";
import { addStructuredData } from "./_document";

const HomePage: NextPage = () => {
  const theme = useTheme();
  const xsBreakpoint = useMediaQuery(theme.breakpoints.only("xs"));
  const smBreakpoint = useMediaQuery(theme.breakpoints.only("sm"));

  return (
    <>
      <Head>
        <title key="title">
          SLO County Coders | A group of coders in San Luis Obispo
        </title>
        <meta
          key="og-title"
          property="og:title"
          content="A group of coders in San Luis Obispo"
        />
        <meta
          key="description"
          name="description"
          content="A community of coders, developers, and programmers gathering for friendship, support, fun, and inspiration."
        />
        <meta
          key="og-description"
          property="og:description"
          content="A community of coders, developers, and programmers gathering for friendship, support, fun, and inspiration."
        />
        <link
          key="canonical"
          rel="canonical"
          href="https://www.slocountycoders.com/"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addStructuredData("home")}
          key="product-jsonld"
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
            when={["Third Monday of every month from 5:30 pm to 6:30 pm"]}
            details="Shop Talk is a casual monthly gathering held after work, featuring a different topic or presentation each time. This allows us to 'talk shop' and foster meaningful discussions, building inspiration and connection."
          />
          <Event
            title="Code &amp; Coffee"
            when={[
              "First Thursday of every month from 8 am to 9 am",
              "Second Saturday of every month from 10 am to 11:30 am",
            ]}
            details="A very casual Saturday morning get-together where we chat about all things coding. Come mingle with some fellow developers while enjoying a morning beverage."
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
            or message us on Discord (link is in the{" "}
            <Link
              target="_blank"
              href="https://www.meetup.com/slocountycoders/#discussions-section"
            >
              Meetup comments/discussion section
            </Link>
            , email if you need help finding it!).
          </Typography>
        </Paper>
      </Layout>
    </>
  );
};

export default HomePage;
