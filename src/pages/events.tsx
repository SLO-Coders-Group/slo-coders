import { Typography, Paper, Box, useMediaQuery } from "@mui/material";
import type { NextPage } from "next";
import { useTheme } from "@mui/material/styles";
import Head from "next/head";
import { Layout } from "../components/layout";
import { Link } from "../components/link";
import { Event } from "../components/event";

const EventsPage: NextPage = () => {
  const theme = useTheme();
  const xsBreakpoint = useMediaQuery(theme.breakpoints.only("xs"));
  const smBreakpoint = useMediaQuery(theme.breakpoints.only("sm"));

  return (
    <>
      <Head>
        <title key="title">Events • SLO County Coders</title>
        <meta
          key="description"
          name="description"
          content="Are you hoping to get inspired for your next coding project or chat about the latest technologies? Then check out our upcoming events!"
        />
        <link
          key="canonical"
          rel="canonical"
          href="https://slocountycoders.com/events"
        />
      </Head>
      <Layout page="events">
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
              px: 1.5,
            }}
          >
            Events
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
            Are you hoping to get inspired for your next coding project, or chat
            about the latest technologies? Then check out our upcoming events!
          </Typography>
          <Typography variant="body1" component="p">
            For specific dates and more information on upcoming events, look at
            the events tab on our SLO County Coders Meetup page:
          </Typography>
          <Typography variant="h6" component="p" mb={4}>
            <Link
              underline="hover"
              href="https://www.meetup.com/slocountycoders/events/"
              target="_blank"
            >
              Upcoming Events (Meetup.com)
            </Link>
          </Typography>
          <Typography variant="body2" component="p">
            Members, if you have ideas for new events then{" "}
            <Link
              underline="hover"
              href="https://www.meetup.com/slocountycoders/discussions/6755397671812670/chat/"
              target="_blank"
            >
              let us know on Slack
            </Link>
            ! If you are not a member, but would like to contribute in some way
            then email us at{" "}
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
          <Event
            title="Coffee Break"
            when="First Thursday of every month from 8 am to 9 am"
            city="San Luis Obispo"
            details="Coffee Break is a relaxing pre-work morning get-together where we enjoy good conversation, each other's company, and our favorite morning beverages. Fun conversation starters could be a coding bug you are stuck on, a new technology that just came out, your favorite way to get organized, etc."
          />
          <Event
            title="Code &amp; Coffee"
            when="Second Saturday of every month from 10 am to 11:30 am"
            city="San Luis Obispo"
            details="A very casual Saturday morning working session where we get together and code. Be inspired to work on a fun side project, learn some new skills, or get caught up at your day job."
          />
          <Event
            title="Shop Talk"
            when="Third Monday of every month from 5 pm to 6 pm"
            city="San Luis Obispo"
            details="Shop Talk is our nightly monthly gathering with a different topic or presentation each time. Afterwards there will be a general discussion, where we can “talk shop” and get to know each other."
          />
        </Paper>
      </Layout>
    </>
  );
};

export default EventsPage;
