import { IconButton, Grid, Typography, lighten } from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import { coworkingSpaces } from "../../data/coworking-spaces";
import { Link } from "../link";

export const CoworkingSpacesList: FC = () => {
  return (
    <Grid container columnSpacing={3} rowSpacing={6}>
      {Object.keys(coworkingSpaces)
        .sort()
        .map((key) => {
          const {
            displayName,
            websiteUrl,
            websiteDisplayName,
            googleMapsLocations,
          } = coworkingSpaces[key];
          return (
            <Grid item key={key} xs={12} sm={6} md={4} lg={3}>
              <Typography>{displayName}</Typography>
              <Typography variant="body2">
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
                googleMapsLocations.map((googleMapsLocations) => (
                  <Link
                    underline="hover"
                    key={websiteUrl}
                    href={googleMapsLocations.googleMapsUrl}
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
                      {`${googleMapsLocations.cityName}`}
                    </Typography>
                  </Link>
                ))}
            </Grid>
          );
        })}
    </Grid>
  );
};
