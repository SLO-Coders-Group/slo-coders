import { IconButton, Grid, Typography, lighten } from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import { techCompanies } from "../../data/tech-companies";
import { Link } from "../link";

export const TechList: FC = () => {
  return (
    <Grid container columnSpacing={3} rowSpacing={6}>
      {Object.keys(techCompanies)
        .sort()
        .map((key) => {
          const {
            displayName,
            websiteUrl,
            linkedInJobsUrl,
            glassdoorReviewsUrl,
            googleMapsUrl,
          } = techCompanies[key];
          return (
            <Grid item key={key} xs={12} sm={6} md={4} lg={3}>
              <Typography>{displayName}</Typography>
              <Typography variant="body2">
                <Link color="secondary" href={websiteUrl} target="_blank">
                  {websiteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </Link>
              </Typography>
              {/* get better icons and use svgs and SvgIcon from MUI */}
              {googleMapsUrl && (
                <Link
                  href={googleMapsUrl}
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
                    Google Maps Office Location
                  </Typography>
                </Link>
              )}
              {glassdoorReviewsUrl && (
                <Link
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
