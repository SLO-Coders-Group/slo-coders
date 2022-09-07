import { Typography, Paper, Box, useMediaQuery } from "@mui/material";
import type { NextPage } from "next";
import { useTheme } from "@mui/material/styles";
import Head from "next/head";
import { Layout } from "../components/layout";
import { Link } from "../components/link";

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
              href="https://www.meetup.com/slo-county-coders/events/"
              target="_blank"
            >
              Upcoming Events (Meetup.com)
            </Link>
          </Typography>
          <Typography variant="body2" component="p">
            If you have any new ideas for events or would like to contribute in
            some way, contact us at{" "}
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
          <Typography variant="h6" component="h4" mb={0.5}>
            Code &amp; Coffee
          </Typography>
          <Typography variant="body2" component="p" mb={0}>
            <Box
              component="span"
              sx={{
                display: "inline",
                fontWeight: theme.typography.fontWeightRegular,
              }}
            >
              When:{" "}
            </Box>
            First Thursday of every month from 8 am to 9 am
          </Typography>
          <Typography variant="body2" component="p" mb={1}>
            <Box
              component="span"
              sx={{
                display: "inline",
                fontWeight: theme.typography.fontWeightRegular,
              }}
            >
              Where:{" "}
            </Box>
            San Luis Obispo
          </Typography>
          <Typography
            variant="body2"
            component="p"
            mb={1}
            sx={{ fontWeight: theme.typography.fontWeightRegular }}
          >
            RSVP on Meetup.com for location details -{" "}
            <Link
              underline="hover"
              href="https://www.meetup.com/slo-coders/events/288212202/"
              target="_blank"
            >
              Thursday, Oct 6
            </Link>
          </Typography>
          <Typography
            variant="body1"
            component="p"
            mb={1}
          >{`* We are considering moving this to Saturday mornings. Members, let us know your thoughts on Slack! (currently still on Thursdays)`}</Typography>
          <Typography
            variant="body1"
            component="p"
            mb={4}
          >{`A very casual morning get-together where we enjoy each other's company and our favorite morning beverages. Fun conversation starters could be a coding challenge you are stuck on, a new technology that just came out, your favorite way to squeeze in exercise mid-week, etc.`}</Typography>

          <Typography component="p" variant="h6" mb={0.5}>
            Shop Talk
          </Typography>
          <Typography variant="body2" component="p" mb={0}>
            <Box
              component="span"
              sx={{
                display: "inline",
                fontWeight: theme.typography.fontWeightRegular,
              }}
            >
              When:{" "}
            </Box>
            Third Monday of every month from 5 pm to 6:30 pm
          </Typography>
          <Typography variant="body2" component="p" mb={1}>
            <Box
              component="span"
              sx={{
                display: "inline",
                fontWeight: theme.typography.fontWeightRegular,
              }}
            >
              Where:{" "}
            </Box>
            San Luis Obispo
          </Typography>
          <Typography
            variant="body2"
            component="p"
            mb={1}
            sx={{ fontWeight: theme.typography.fontWeightRegular }}
          >
            RSVP on Meetup.com for location details -{" "}
            <Link
              underline="hover"
              href="https://www.meetup.com/slo-coders/events/287078911/"
              target="_blank"
            >
              Monday, Sept 19
            </Link>
          </Typography>
          <Typography
            variant="body1"
            component="p"
            mb={4}
          >{`A casual meet and greet where we get to talk shop with other developers and engineers. This gives us a chance to get to know each other, learn about new technologies, and get inspired for our next coding adventure.`}</Typography>
        </Paper>
      </Layout>
    </>
  );
};

export default EventsPage;
