import { Box, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FC } from "react";
import { businessesWithCoders } from "../../data/businesses-with-slo-coders";
import { Link } from "../link";
import { LinkIcon } from "../link-icon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GlassdoorIcon } from "../icons/glassdoor.icon";

export const BusinessesWithSloCodersList: FC = () => {
  return (
    <Box
      sx={{
        borderBottom: `1px solid ${grey[500]}`,
        height: "100%",
      }}
    >
      <Typography variant="h6" component="h4">
        Remote Companies
      </Typography>
      <Typography variant="body2" component="p" mb={2}>
        They have coders that work in SLO county.
      </Typography>
      <Box
        sx={{
          borderTop: `1px solid ${grey[500]}`,
          paddingTop: 2,
          maxHeight: 500,
          overflowY: "scroll",
        }}
      >
        <Grid container spacing={3} pb={2}>
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
                    <LinkIcon
                      href={glassdoorReviewsUrl}
                      text="Glassdoor Reviews"
                      fontSize={16}
                      iconButtonSize="small"
                      icon={<GlassdoorIcon fontSize={16} />}
                    />
                  )}
                  {linkedInJobsUrl && (
                    <LinkIcon
                      href={linkedInJobsUrl}
                      text="LinkedIn Jobs"
                      fontSize={16}
                      iconButtonSize="small"
                      icon={<LinkedInIcon fontSize="inherit" color="inherit" />}
                    />
                  )}
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </Box>
  );
};
