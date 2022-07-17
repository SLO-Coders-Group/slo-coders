import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import { onlineLearningResources } from "../../data/online-learning-resources";
import { Link } from "../link";

export const OnlineLearningResourcesList: FC = () => {
  return (
    <>
      <Typography variant="h6" component="h4" mb={4}>
        Online Learning Resources
      </Typography>
      <Grid container spacing={3}>
        {Object.keys(onlineLearningResources)
          .sort()
          .map((key) => {
            const { displayName, websiteUrl, description, websiteDisplayName } =
              onlineLearningResources[key];
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
                <Typography variant="body2" component="p">
                  {description}
                </Typography>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};
