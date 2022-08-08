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
              SLO County Coders Meetup Events
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
            First Thursday of every month from 7 - 8am
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
            Field Day Coffee in SLO
          </Typography>
          <Typography
            variant="body2"
            component="p"
            mb={1}
            sx={{ fontWeight: theme.typography.fontWeightRegular }}
          >
            <Link
              underline="hover"
              href="https://www.meetup.com/slo-county-coders/events/287077776/"
              target="_blank"
            >
              RSVP
            </Link>
          </Typography>
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
            Third Monday of every month from 5 - 6:30pm
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
            StoryLabs in SLO
          </Typography>
          <Typography
            variant="body2"
            component="p"
            mb={1}
            sx={{ fontWeight: theme.typography.fontWeightRegular }}
          >
            <Link
              underline="hover"
              href="https://www.meetup.com/slo-county-coders/events/287078905/"
              target="_blank"
            >
              RSVP
            </Link>
          </Typography>
          <Typography
            variant="body1"
            component="p"
            mb={4}
          >{`A casual meet and greet where we get to talk shop with other developers and engineers. This gives us a chance to get to know each other, learn about new technologies, and get inspired for our next coding adventure.`}</Typography>

          <Typography component="h4" variant="h6" mb={0.5}>
            Code Fights
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
            Second Friday of every season (Spring, Fall, Summer, Winter) from 5
            - 6:30pm
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
            Online
          </Typography>
          <Typography
            variant="body2"
            component="p"
            mb={1}
            sx={{ fontWeight: theme.typography.fontWeightRegular }}
          >
            <Link
              underline="hover"
              href="https://www.meetup.com/slo-county-coders/events/287094084/"
              target="_blank"
            >
              RSVP
            </Link>
          </Typography>
          <Typography
            variant="body1"
            component="p"
            mb={1}
          >{`Are you the competitive type? Then this event is for you! Get your keyboard ready and see if you can climb to the top of the SLO County Coders leaderboard. We will be hosting code fights open to all coders in SLO county, which can be joined either in-person or virtually.`}</Typography>
          <Typography
            variant="body1"
            component="p"
            mb={4}
            sx={{ fontWeight: "fontWeightBold" }}
          >{`We are still investigating the best platform to use, if you have opinions, let us know!`}</Typography>

          {/* <Typography component="h4" variant="h6" mb={0.5}>
            SLO County Coders Annual Hackathon
          </Typography>
          <Typography variant="body2" component="p" mb={0}>
            <Box component="span" sx={{ display: "inline", fontWeight: theme.typography.fontWeightRegular }}>
              When:{" "}
            </Box>
            Third weekend of every year from Sat 11am - Sun 3pm
          </Typography>
          <Typography variant="body2" component="p" mb={1}>
            <Box component="span" sx={{ display: "inline", fontWeight: theme.typography.fontWeightRegular }}>
              Where:{" "}
            </Box>
            TBD
          </Typography>
          <Typography variant="body2" component="p" mb={1} sx={{ fontWeight: theme.typography.fontWeightRegular }}>
            <Link underline="hover" href="mailto:contact@slocountycoders.com">
              Interested in sponsoring or volunteering? Email us!
            </Link>
          </Typography>
          <Typography variant="body1" component="p"
            mb={1.5}
          >{`A special two-day event where any SLO County Coders can get together and brainstorm, break up into teams and collaborate with one another on unique and one-of-a-kind projects. At the end of the event, each team gives a presentation on their project. The judges will then pick one winning team. People's Choice awards will also be given out as well and can be voted on by anybody in the community that watched the presentations either virtually or in person.`}</Typography>
          <Typography variant="body1" component="p"
            mb={1.5}
          >{`It is a great chance to meet new people, improve your skills, work with cool technologies, and show off your individual talents while creating something new and exciting. There will be a new theme every year to fuel inspiration and fun. Prizes will vary depending on sponsorship, but SLO County Coders aims to support the winning project (to the extent of our ability) in hopes that it will become a real product.`}</Typography>
          <Typography variant="body1" component="p"
            mb={4}
          >{`We welcome all ages and skill levels of coders! Not a coder but want to join in on the competition? Teams can always use assistance with ideas, graphic design, testing, presentations, and more. So there are tons of other ways to contribute to a project! Want to help the cause in other ways? We can always use volunteers to help plan and host the event as well as corporate sponsorship or help find sponsorship.`}</Typography> */}
        </Paper>
      </Layout>
    </>
  );
};

export default EventsPage;
