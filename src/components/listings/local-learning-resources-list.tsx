import { Box, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FC } from "react";
import { localLearningResources } from "../../data/local-learning-resources";
import { Link } from "../link";

export const LocalLearningResourcesList: FC = () => {
  return (
    <Box
      sx={{
        borderBottom: `1px solid ${grey[500]}`,
        height: "100%",
      }}
    >
      <Typography variant="h6" component="h4" mb={2}>
        Local
      </Typography>
      <Box sx={scrollDivStyles}>
        <Grid container spacing={3} pb={2}>
          {Object.keys(localLearningResources)
            .sort()
            .map((key) => {
              const {
                displayName,
                websiteUrl,
                description,
                websiteDisplayName,
              } = localLearningResources[key];
              return (
                <Grid item key={key} xs={12}>
                  <Typography variant="body1" component="h5">
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
                  <Typography variant="body2" component="p">
                    {description}
                  </Typography>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </Box>
  );
};
