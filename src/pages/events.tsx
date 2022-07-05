import { Typography, Paper, Box } from "@mui/material";
import type { NextPage } from "next";
import { useTheme } from "@mui/material/styles";
import Head from "next/head";
import { Layout } from "../components/layout";
import { Link } from "../components/link";

const EventsPage: NextPage = () => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title key="title">Events • SLO Coders</title>
        <meta
          key="description"
          name="description"
          content="Are you hoping to get inspired for your next coding project or chat about the latest technologies? Then check out our upcoming events!"
        />
        <link
          key="canonical"
          rel="canonical"
          href="https://slocoders.com/events"
        />
      </Head>
      <Layout page="events">
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
          <Typography mb={4}>
            Are you hoping to get inspired for your next coding project, or chat
            about the latest technologies? Then check out our upcoming events!
          </Typography>
          <Typography component="h4" variant="h6">
            <Link
              href="https://www.meetup.com/slo-coders/events/"
              target="_blank"
            >
              SLO Coders Meetup Events
            </Link>
          </Typography>
          <Typography mb={4}>
            For specific dates and more information on upcoming events, look at
            the events tab on our SLO Coders Meetup page.
          </Typography>
          <Typography variant="body2">
            If you have any new ideas for events or would like to contribute in
            some way, contact us at{" "}
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
          <Typography component="h3" variant="h5" mb={0.5}>
            Code &amp; Coffee
          </Typography>
          <Typography variant="body2" mb={0}>
            <Box component="span" sx={{ display: "inline", fontWeight: 400 }}>
              When:{" "}
            </Box>
            First Thursday of every month from 8 - 9am
          </Typography>
          <Typography variant="body2" mb={1}>
            <Box component="span" sx={{ display: "inline", fontWeight: 400 }}>
              Where:{" "}
            </Box>
            Field Day Coffee in SLO
          </Typography>
          <Typography
            mb={4}
          >{`A very casual morning get together where we enjoy each other's company and our favorite morning beverages. Fun conversation starters could be: a coding challenge you are stuck on, a new technology that just came out, your favorite way to squeeze in exercise mid-week, etc.`}</Typography>

          <Typography component="h3" variant="h5" mb={0.5}>
            Shop Talk
          </Typography>
          <Typography variant="body2" mb={0}>
            <Box component="span" sx={{ display: "inline", fontWeight: 400 }}>
              When:{" "}
            </Box>
            Third Monday of every month from 5 - 6:30pm
          </Typography>
          <Typography variant="body2" mb={1}>
            <Box component="span" sx={{ display: "inline", fontWeight: 400 }}>
              Where:{" "}
            </Box>
            StoryLabs in SLO
          </Typography>
          <Typography
            mb={4}
          >{`A casual meet and greet where we get to talk shop with other developers and engineers. This gives us a chance to get to know each other, learn about new technologies, and get inspired for our next coding adventure.`}</Typography>

          <Typography component="h3" variant="h5" mb={0.5}>
            Code Fights
          </Typography>
          <Typography variant="body2" mb={0}>
            <Box component="span" sx={{ display: "inline", fontWeight: 400 }}>
              When:{" "}
            </Box>
            Second Friday of every season (Spring, Fall, Summer, Winter) from 5
            - 6:30pm
          </Typography>
          <Typography variant="body2" mb={1}>
            <Box component="span" sx={{ display: "inline", fontWeight: 400 }}>
              Where:{" "}
            </Box>
            StoryLabs in SLO
          </Typography>
          <Typography
            mb={4}
          >{`Are you the competitive type? Then this event is for you! Get your keyboard ready and see if you can climb to the top of the SLO Coders leaderboard.`}</Typography>

          <Typography component="h3" variant="h5" mb={0.5}>
            SLO Annual Hackathon
          </Typography>
          <Typography variant="body2" mb={0}>
            <Box component="span" sx={{ display: "inline", fontWeight: 400 }}>
              When:{" "}
            </Box>
            Third weekend of every year from Sat 11am - Sun 3pm
          </Typography>
          <Typography variant="body2" mb={1}>
            <Box component="span" sx={{ display: "inline", fontWeight: 400 }}>
              Where:{" "}
            </Box>
            StoryLabs in SLO
          </Typography>
          <Typography
            mb={4}
          >{`A special two day event where we brainstorm, break up into teams, and collaborate with one another on unique and one-of-a-kind projects. At the end, each team gives a presentation on their project. The judges will then pick one winner. There will also be People's Choice awards given out as well. It is a great chance to meet new people, improve your skills, and show off your individual talents while creating something new. Prizes will vary depending on sponsorship, but SLO Coders aims to support the winning project (to the extent of our ability) in hopes that it will become a real product.`}</Typography>
        </Paper>
      </Layout>
    </>
  );
};

export default EventsPage;
