import { Box, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FC } from "react";
import { learningResources } from "../../data/learning-resources";
import { scrollDivStyles } from "../../styles/theme";
import { Link } from "../link";

export const LearningResourcesList: FC = () => {
  return (
    <Box
      sx={{
        borderBottom: `1px solid ${grey[500]}`,
        height: "100%",
      }}
    >
      <Typography variant="h6" component="h4">
        Local
      </Typography>
      <Typography variant="body2" component="p" mb={2}>
        Places in SLO county to learn more about coding.
      </Typography>

      <Box sx={scrollDivStyles}>
        <Grid container spacing={3} pb={2}>
          {Object.keys(learningResources)
            .sort()
            .map((key) => {
              const {
                displayName,
                websiteUrl,
                description,
                websiteDisplayName,
              } = learningResources[key];
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
