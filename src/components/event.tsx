import { Box, Link, Typography, useTheme } from "@mui/material";

type EventProps = {
  title: string;
  when: string;
  city: string;
  details: string;
};

export const Event = (props: EventProps) => {
  const theme = useTheme();
  const { title, when, city, details } = props;

  return (
    <>
      <Typography variant="h6" component="h4" mb={0.5}>
        {title}
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
        {when}
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
        {city}
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
