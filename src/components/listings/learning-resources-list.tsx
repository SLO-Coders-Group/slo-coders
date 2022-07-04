import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import { learningResources } from "../../data/learning-resources";
import { Link } from "../link";

export const LearningResourcesList: FC = () => {
  return (
    <Grid container columnSpacing={3} rowSpacing={6}>
      {Object.keys(learningResources)
        .sort()
        .map((key) => {
          const { displayName, websiteUrl, description, websiteDisplayName } =
            learningResources[key];
          return (
            <Grid item key={key} xs={12} md={6}>
              <Typography>{displayName}</Typography>
              <Typography variant="body2">
                <Link color="secondary" href={websiteUrl} target="_blank">
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
