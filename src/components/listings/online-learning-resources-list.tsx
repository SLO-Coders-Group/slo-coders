import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import { onlineLearningResources } from "../../data/online-learning-resources";
import { Link } from "../link";

export const OnlineLearningResourcesList: FC = () => {
  return (
    <Grid container columnSpacing={3} rowSpacing={6}>
      <Grid item xs={12}>
        <Typography variant="h5">Online Learning Resources</Typography>
      </Grid>
      {Object.keys(onlineLearningResources)
        .sort()
        .map((key) => {
          const { displayName, websiteUrl, description, websiteDisplayName } =
            onlineLearningResources[key];
          return (
            <Grid item key={key} xs={12} lg={6} xl={4} data-testid={key}>
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
