import { Box, Grid, Typography, Link } from "@mui/material";
import { FC } from "react";
import { coworkingSpaces } from "../../data/coworking-spaces";
import NextLink from "next/link";
import { LinkIcon } from "../link-icon";
import RoomIcon from "@mui/icons-material/Room";
import { grey } from "@mui/material/colors";
import { scrollDivStyles } from "../../styles/theme";

export const CoworkingSpacesList: FC = () => {
  return (
    <Box
      sx={{
        borderBottom: `1px solid ${grey[500]}`,
        height: "100%",
      }}
    >
      <Typography variant="h6" component="h4">
        Shared workspaces
      </Typography>
      <Typography variant="body2" component="p" mb={2}>
        Places to cowork in San Luis Obispo county.
      </Typography>

      <Box sx={scrollDivStyles}>
        <Grid container spacing={3} pb={2}>
          {Object.entries(coworkingSpaces)
            .sort((a, b) => (a[1].displayName > b[1].displayName ? -1 : 1))
            .map(([key, value]) => {
              const {
                displayName,
                websiteUrl,
                websiteDisplayName,
                googleMapsLocations,
              } = value;

              return (
                <Grid item key={key} xs={12} sm={6} md={4} xl={3}>
                  <Typography variant="body1" component="h4">
                    {displayName}
                  </Typography>
                  <Typography variant="body2" component="p">
                    <Link
                      component={NextLink}
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
                        key={`${key}-url`}
                        href={googleMapsLocations.googleMapsUrl}
                        text={`${googleMapsLocations.cityName}`}
                        fontSize={16}
                        iconButtonSize="small"
                        icon={<RoomIcon fontSize="inherit" color="inherit" />}
                      />
                    ))}
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </Box>
  );
};
