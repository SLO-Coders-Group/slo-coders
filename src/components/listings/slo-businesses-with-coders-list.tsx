import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import { businessesWithCoders } from "../../data/slo-businesses-with-coders";
import { Link } from "../link";
import { LinkIcon } from "../icons/link-icon";
import RoomIcon from "@mui/icons-material/Room";
import { GlassdoorIcon } from "../icons/glassdoor.icon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const SloBusinessesWithCodersList: FC = () => {
  return (
    <>
      <Typography variant="h6" component="h4">
        SLO County Businesses with Coders
      </Typography>
      <Typography variant="body2" component="p" mb={4}>
        They have an office or headquarters in SLO county.
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
              googleMapsLocations,
            } = businessesWithCoders[key];
            return (
              <Grid item key={key} xs={12} lg={6} xl={4} data-testid={key}>
                <Typography
                  variant="body2"
                  component="h5"
                  sx={{
                    fontWeight: (theme) => theme.typography.fontWeightRegular,
                  }}
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
                {/* get better icons and use svgs and SvgIcon from MUI */}
                {googleMapsLocations &&
                  googleMapsLocations.map((googleMapsLocation) => (
                    <LinkIcon
                      key={websiteUrl}
                      href={googleMapsLocation.googleMapsUrl}
                      text={`${googleMapsLocation.cityName}`}
                      fontSize={16}
                      iconButtonSize="small"
                      icon={<RoomIcon fontSize="inherit" color="inherit" />}
                    />
                  ))}
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
    </>
  );
};
