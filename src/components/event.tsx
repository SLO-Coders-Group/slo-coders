import { Box, Link, Typography, useTheme } from "@mui/material";

type EventProps = {
  title: string;
  when: string[];
  details: string;
};

export const Event = (props: EventProps) => {
  const theme = useTheme();
  const { title, when, details } = props;

  return (
    <>
      <Typography variant="h6" component="h4" mb={0.5}>
        {title}
      </Typography>

{when.map((item, index) => (
      <Typography variant="body2" component="p" mb={when.length-1 === index ? 1 : 0} key={item}>
          <Box
          component="span"
          sx={{
            display: "inline",
            // fontWeight: theme.typography.fontWeightRegular,
          }}
        >{item}</Box>
      </Typography>))}


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
