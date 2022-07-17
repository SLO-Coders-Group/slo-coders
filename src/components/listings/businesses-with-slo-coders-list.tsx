import { IconButton, Grid, Typography, lighten } from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import { businessesWithCoders } from "../../data/businesses-with-slo-coders";
import { Link } from "../link";

export const BusinessesWithSloCodersList: FC = () => {
  return (
    <>
      <Typography variant="h6" component="h4">
        Businesses with coders in SLO County
      </Typography>
      <Typography variant="body2" component="p" mb={4}>
        They have coders that work in SLO county.
      </Typography>
      <Grid container spacing={3}>
        {Object.keys(businessesWithCoders)
          .sort()
          .map((key) => {
            const {
              displayName,
              websiteUrl,
              websiteDisplayName,
              linkedInJobsUrl,
              glassdoorReviewsUrl,
            } = businessesWithCoders[key];
            return (
              <Grid item key={key} xs={12} data-testid={key}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: (theme) => theme.typography.fontWeightRegular,
                  }}
                  component="h5"
                >
                  {displayName}
                </Typography>
                <Typography variant="body1" component="p">
                  <Link
                    underline="hover"
                    color="secondary"
                    href={websiteUrl}
                    target="_blank"
                  >
                    {websiteDisplayName ||
                      websiteUrl
                        .replace(/^https?:\/\//, "")
                        .replace(/\/$/, "")
                        .split("?")[0]}
                  </Link>
                </Typography>
                {glassdoorReviewsUrl && (
                  <Link
                    underline="hover"
                    href={glassdoorReviewsUrl}
                    target="_blank"
                    sx={{
                      display: "block",
                      mb: 0.25,
                      "&:hover": {
                        "& .MuiIconButton-root": {
                          background: lighten("#0caa41", 0.25),
                        },
                      },
                    }}
                  >
                    <IconButton
                      sx={{
                        background: "#0caa41",
                        mt: 0.5,
                      }}
                    >
                      <Image
                        alt="Glassdoor"
                        src="/images/glassdoor.png"
                        width={12}
                        height={12}
                      />
                    </IconButton>
                    <Typography
                      variant="body2"
                      component="p"
                      sx={{ display: "inline", marginLeft: 0.5 }}
                    >
                      Glassdoor Reviews
                    </Typography>
                  </Link>
                )}
                {linkedInJobsUrl && (
                  <Link
                    underline="hover"
                    href={linkedInJobsUrl}
                    target="_blank"
                    sx={{
                      display: "block",
                      "&:hover": {
                        "& .MuiIconButton-root": {
                          background: lighten("#0e50b4", 0.25),
                        },
                      },
                    }}
                  >
                    <IconButton
                      sx={{
                        background: "#0e50b4",
                        mt: 0.5,
                      }}
                    >
                      <Image
                        alt="LinkedIn"
                        src="/images/linkedin.png"
                        width={12}
                        height={12}
                      />
                    </IconButton>
                    <Typography
                      variant="body2"
                      component="p"
                      sx={{ display: "inline", marginLeft: 0.5 }}
                    >
                      LinkedIn Jobs
                    </Typography>
                  </Link>
                )}
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};
