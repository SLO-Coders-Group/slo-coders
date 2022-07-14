import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import { localLearningResources } from "../../data/local-learning-resources";
import { Link } from "../link";

export const LocalLearningResourcesList: FC = () => {
  return (
    <Grid container columnSpacing={3} rowSpacing={6}>
      <Grid item xs={12}>
        <Typography variant="h5">Local Learning Resources</Typography>
      </Grid>
      {Object.keys(localLearningResources)
        .sort()
        .map((key) => {
          const { displayName, websiteUrl, description, websiteDisplayName } =
            localLearningResources[key];
          return (
            <Grid item key={key} xs={12}>
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
              <Typography variant="body2">{description}</Typography>
            </Grid>
          );
        })}
    </Grid>
  );
};
