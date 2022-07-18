import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import { coworkingSpaces } from "../../data/coworking-spaces";
import { Link } from "../link";
import { LinkIcon } from "../icons/link-icon";

export const CoworkingSpacesList: FC = () => {
  return (
    <Grid container spacing={3}>
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
            <Grid item key={key} xs={12} sm={6} md={4} xl={3}>
              <Typography variant="body1" component="h4">
                {displayName}
              </Typography>
              <Typography variant="body2" component="p">
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
                  <LinkIcon
                    key={websiteUrl}
                    href={googleMapsLocations.googleMapsUrl}
                    text={`${googleMapsLocations.cityName}`}
                    icon={
                      <Image
                        alt="Google Maps"
                        src="/images/google-maps.png"
                        width={12}
                        height={12}
                      />
                    }
                  />
                ))}
            </Grid>
          );
        })}
    </Grid>
  );
};
