import { Box, Grid, Theme, Typography, Link } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FC } from "react";
import { businessesWithCoders } from "../../data/businesses-with-coders";
import { scrollDivStyles } from "../../styles/theme";

export const BusinessesWithCodersList: FC = () => {
  return (
    <Box
      sx={{
        borderBottom: `1px solid ${grey[500]}`,
        height: "100%",
      }}
    >
      <Typography variant="h6" component="h4">
        SLO Companies
      </Typography>
      <Typography variant="body2" component="p" mb={2}>
        Businesses that have an office or headquarters in San Luis Obispo county
        with coders.
      </Typography>
      <Box sx={scrollDivStyles}>
        <Grid container spacing={3} pb={2}>
          {Object.keys(businessesWithCoders)
            .sort()
            .map((key) => {
              const { displayName, websiteUrl, cityNames } =
                businessesWithCoders[key];
              return (
                <Grid item key={key} xs={12} lg={6} xl={4} data-testid={key}>
                  <Typography
                    variant="body2"
                    component="h5"
                    sx={{
                      fontWeight: (theme: Theme) =>
                        theme.typography.fontWeightRegular,
                    }}
                  >
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
