import { Box, Link, Typography, useTheme } from "@mui/material";

type EventProps = {
  title: string;
  time: string;
  day: string;
  details: string;
};

export const Event = (props: EventProps) => {
  const theme = useTheme();
  const { title, day, time, details } = props;

  return (
    <>
      <Typography variant="h6" component="h4" mb={0.5}>
        {title}
      </Typography>

      <Typography variant="body2" component="p" mb={1}>
        <Box
          component="span"
          sx={{
            display: "inline",
            fontWeight: "400",
          }}
        >
          &#11049; {day}
        </Box>
        <Box
          component="span"
          sx={{
            display: "inline",
          }}
        >
          {` of every month from `}
        </Box>
        <Box
          component="span"
          sx={{
            display: "inline",
            fontWeight: "400",
          }}
        >
          {time}
        </Box>
      </Typography>

      <Typography
        variant="body2"
        component="p"
        mb={1}
        sx={{ fontWeight: theme.typography.fontWeightRegular }}
      >
        <Link
          underline="hover"
          href="https://www.meetup.com/slocountycoders/events/"
          target="_blank"
        >
          RSVP on Meetup.com for location details
        </Link>
      </Typography>
      <Typography variant="body1" component="p" mb={4}>
        {details}
      </Typography>
    </>
  );
};
