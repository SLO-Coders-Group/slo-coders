import { Divider, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FC } from "react";
import { listContainerStyle } from ".";
import { onlineLearningResources } from "../../data/online-learning-resources";
import { Link } from "../link";

export const OnlineLearningResourcesList: FC = () => {
  return (
    <>
      <Typography variant="h6" component="h4" mb={2} noWrap>
        Online
      </Typography>
      <Divider variant="fullWidth" color={grey[400]} />
      <Grid container spacing={3} mt={0} sx={listContainerStyle}>
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
                <Typography variant="body2" component="p" mb={2}>
                  {description}
                </Typography>
              </Grid>
            );
          })}
      </Grid>
      <Divider variant="fullWidth" color={grey[400]} />
    </>
  );
};
