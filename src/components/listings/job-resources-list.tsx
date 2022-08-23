import { Box, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FC } from "react";
import { jobResources } from "../../data/job-resources";
import { scrollDivStyles } from "../../styles/theme";
import { Link } from "../link";

export const JobResourcesList: FC = () => {
  return (
    <Box
      sx={{
        borderBottom: `1px solid ${grey[500]}`,
        height: "100%",
      }}
    >
      <Typography variant="h6" component="h4" mb={2}>
        Job Resources
      </Typography>
      <Box sx={scrollDivStyles}>
        <Grid container spacing={3} pb={2}>
          {Object.keys(jobResources)
            .sort()
            .map((key) => {
              const { displayName, websiteUrl, websiteDisplayName } =
                jobResources[key];
              return (
                <Grid item key={key} xs={12} lg={6} xl={4} data-testid={key}>
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
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </Box>
  );
};
