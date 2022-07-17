import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import { jobResources } from "../../data/job-resources";
import { Link } from "../link";

export const JobResourcesList: FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" component="h4">
          Job Resources
        </Typography>
      </Grid>
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
  );
};
