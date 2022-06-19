import { IconButton, Grid, Typography, lighten } from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import { techRecruiters } from "../../data/tech-recruiters";
import { Link } from "../link";

export const TechRecruitersList: FC = () => {
  return (
    <Grid container columnSpacing={3} rowSpacing={6}>
      {Object.keys(techRecruiters)
        .sort()
        .map((key) => {
          const { displayName, websiteUrl, linkedInJobsUrl } =
            techRecruiters[key];
          return (
            <Grid item key={key} xs={12} sm={6} md={4} lg={3}>
              <Typography>{displayName}</Typography>
              <Typography variant="body2">
                <Link color="secondary" href={websiteUrl} target="_blank">
                  {websiteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </Link>
              </Typography>
              {/* get better icons and use svgs and SvgIcon from MUI */}
              {linkedInJobsUrl && (
                <Link
                  href={linkedInJobsUrl}
                  target="_blank"
                  sx={{
                    display: "block",
                    "&:hover": {
                      "& .MuiIconButton-root": {
                        background: lighten("#0e50b4", 0.25),
                      },
                    },
                  }}
                >
                  <IconButton
                    sx={{
                      background: "#0e50b4",
                    }}
                  >
                    <Image
                      alt="LinkedIn"
                      src="/images/linkedin.png"
                      width={12}
                      height={12}
                    />
                  </IconButton>
                  <Typography
                    variant="body2"
                    sx={{ display: "inline", marginLeft: 0.5 }}
                  >
                    LinkedIn Jobs
                  </Typography>
                </Link>
              )}
            </Grid>
          );
        })}
    </Grid>
  );
};
