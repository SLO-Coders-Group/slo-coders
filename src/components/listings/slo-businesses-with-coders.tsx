import { IconButton, Grid, Typography, lighten } from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import { businessesWithCoders } from "../../data/slo-businesses-with-coders";
import { Link } from "../link";

export const SloBusinessesWithCoders: FC = () => {
  return (
    <Grid container columnSpacing={3} rowSpacing={6}>
      <Grid item xs={12}>
        <Typography variant="h5">SLO County Businesses with Coders</Typography>
        <Typography variant="body2">
          They have an office or headquarters in SLO county.
        </Typography>
      </Grid>
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
                sx={{ fontSize: "1.15rem", fontWeight: 400 }}
              >
                {displayName}
              </Typography>
              <Typography sx={{ fontSize: ".85rem" }}>
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
                  <Link
                    underline="hover"
                    key={websiteUrl}
                    href={googleMapsLocation.googleMapsUrl}
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
                        background: "#b9312c",
                        mt: 0.5,
                      }}
                    >
                      <Image
                        alt="Google Maps"
                        src="/images/google-maps.png"
                        width={12}
                        height={12}
                      />
                    </IconButton>
                    <Typography
                      variant="body2"
                      sx={{ display: "inline", marginLeft: 0.5 }}
                    >
                      {`${googleMapsLocation.cityName}`}
                    </Typography>
                  </Link>
                ))}
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
  );
};
