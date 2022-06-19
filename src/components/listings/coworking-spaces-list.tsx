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
          const { displayName, websiteUrl, googleMapsUrls } =
            coworkingSpaces[key];
          return (
            <Grid item key={key} xs={12} sm={6} md={4} lg={3}>
              <Typography>{displayName}</Typography>
              <Typography variant="body2">
                <Link color="secondary" href={websiteUrl} target="_blank">
                  {websiteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </Link>
              </Typography>
              {/* get better icons and use svgs and SvgIcon from MUI */}
              {googleMapsUrls &&
                googleMapsUrls.map((googleMapsUrl) => (
                  <Link
                    key={websiteUrl}
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
                ))}
            </Grid>
          );
        })}
    </Grid>
  );
};
