import { Box, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FC } from "react";
import { recruiters } from "../../data/recruiters";
import { Link } from "../link";
import { LinkIcon } from "../link-icon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { scrollDivStyles } from "../../styles/theme";

export const RecruitersList: FC = () => {
  return (
    <Box
      sx={{
        borderBottom: `1px solid ${grey[500]}`,
        height: "100%",
      }}
    >
      <Typography variant="h6" component="h4" mb={2}>
        Recruiters
      </Typography>
      <Box sx={scrollDivStyles}>
        <Grid container spacing={3} pb={2}>
          {Object.keys(recruiters)
            .sort()
            .map((key) => {
              const {
                displayName,
                websiteUrl,
                websiteDisplayName,
                linkedInJobsUrl,
              } = recruiters[key];
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
                  {/* get better icons and use svgs and SvgIcon from MUI */}
                  {linkedInJobsUrl && (
                    <LinkIcon
                      href={linkedInJobsUrl}
                      text="LinkedIn Jobs"
                      fontSize={16}
                      iconButtonSize="small"
                      icon={<LinkedInIcon fontSize="inherit" color="inherit" />}
                    />
                  )}
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </Box>
  );
};
