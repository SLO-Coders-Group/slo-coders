import { Box, Grid, Typography, Link } from "@mui/material";
import { FC } from "react";
import { codingSpaces } from "../../data/coding-spaces";
import { grey } from "@mui/material/colors";
import { scrollDivStyles } from "../../styles/theme";

export const CodingSpacesList: FC = () => {
  return (
    <Box
      sx={{
        borderBottom: `1px solid ${grey[500]}`,
        height: "100%",
      }}
    >
      <Typography variant="h6" component="h4">
        Best Coding Spots in SLO County
      </Typography>
      <Typography variant="body2" component="p" mb={2}>
        Our favorite places in SLO County for coding or remote work.
      </Typography>

      <Box sx={scrollDivStyles}>
        <Grid container spacing={3} pb={2}>
          {Object.entries(codingSpaces)
            .sort((a, b) => b[1].displayName.localeCompare(a[1].displayName))
            .map(([key, value]) => {
              const { displayName, websiteUrl, cityNames } = value;

              return (
                <Grid item key={key} xs={12} sm={6} md={4} xl={3}>
                  <Typography variant="body1" component="h4">
                    {displayName}
                  </Typography>

                  <Typography
                    component="p"
                    color="text.secondary"
                    sx={{
                      fontSize: 13,
                    }}
                  >
                    {cityNames.join(", ")}
                  </Typography>

                  <Typography
                    variant="body1"
                    component="p"
                    noWrap
                    color="secondary.main"
                  >
                    <Link
                      underline="hover"
                      color="inherit"
                      href={websiteUrl}
                      target="_blank"
                    >
                      {
                        websiteUrl
                          .replace(/^https?:\/\//, "")
                          .replace(/\/$/, "")
                          .split("?")[0]
                      }
                    </Link>
                  </Typography>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </Box>
  );
};
