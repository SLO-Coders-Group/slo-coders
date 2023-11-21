import { DateTime } from "luxon";
import { Box, Grid, Typography, Link } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FC } from "react";
import { jobPostings } from "../../data/job-postings";
import { scrollDivStyles } from "../../styles/theme";
import NextLink from "next/link";

export const JobPostingsList: FC = () => {
  return (
    <Box
      sx={{
        borderBottom: `1px solid ${grey[500]}`,
        height: "100%",
      }}
    >
      <Typography variant="h6" component="h4">
        SLO coding positions
      </Typography>
      <Typography variant="body2" component="p" mb={2}>
        Local coding job openings or local coders seeking jobs.
      </Typography>

      <Box sx={scrollDivStyles}>
        <Grid container spacing={3} pb={2}>
          {Object.keys(jobPostings).length > 0 ? (
            Object.entries(jobPostings)
              .sort(
                (a, b) =>
                  (b[1].datePosted?.toMillis() ?? 0) -
                  (a[1].datePosted?.toMillis() ?? 0),
              )
              .map(([key]) => {
                const {
                  companyOrCoderName,
                  jobTitle,
                  url,
                  description,
                  datePosted,
                  websiteDisplayName,
                } = jobPostings[key];
                return (
                  <Grid item key={key} xs={12}>
                    <Typography variant="body1" component="h5">
                      {companyOrCoderName} - {jobTitle}
                    </Typography>
                    <Typography variant="body2" component="p">
                      <Link
                        component={NextLink}
                        underline="hover"
                        color="secondary"
                        href={url}
                        target="_blank"
                      >
                        {websiteDisplayName ||
                          url
                            .replace(/^https?:\/\//, "")
                            .replace(/\/$/, "")
                            .split("?")[0]}
                      </Link>
                    </Typography>
                    <Typography variant="body2" component="p">
                      {datePosted && (
                        <>
                          <Typography
                            variant="body2"
                            color="primary.main"
                            component="span"
                          >
                            {datePosted?.toLocaleString(
                              DateTime.DATE_MED_WITH_WEEKDAY,
                            ) ?? "It's a mystery! "}
                          </Typography>
                          {" - "}
                        </>
                      )}
                      {description}
                    </Typography>
                  </Grid>
                );
              })
          ) : (
            <Grid item xs={12}>
              <Typography>
                🦗 Nothing right now. Add a new listing or check back later.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};
