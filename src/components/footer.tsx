import { FC } from "react";
import Image from "next/image";
import {
  Box,
  Grid,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "./link";

export const Footer: FC = () => {
  const theme = useTheme();
  const mdAndDownBreakpoint = useMediaQuery(theme.breakpoints.down("md"));

  const footerTextAlignment = mdAndDownBreakpoint ? "center" : "left";

  const listItemStyle = {
    justifyContent: footerTextAlignment,
    textAlign: footerTextAlignment,
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.common.white,
          width: "100%",
          px: 8,
          py: 3,
          boxShadow: `0 0 0 4px ${theme.palette.secondary.main}, 0 0 0 7px white, 0 0 0 10px black`,
          color: theme.palette.common.black,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          color="primary"
          align="center"
          mb={1}
        >
          <Box
            component="span"
            sx={{
              display: "inline-block",
              px: 2.5,
              mx: 0.5,
              color: theme.palette.primary.main,
              borderBottom: `1px solid ${theme.palette.common.black}`,
            }}
          >
            Sponsors
          </Box>
        </Typography>
        <Typography variant="body2" mb={6}>
          Want to become a sponsor? Email us at{" "}
          <Link underline="hover" href="mailto:contact@slocountycoders.com">
            contact@slocountycoders.com
          </Link>
          .
        </Typography>
        <Link
          underline="hover"
          href="https://www.storylabs.work/"
          target="_blank"
        >
          <Image
            alt="StoryLabs"
            src="/images/storylabs-logo.png"
            width={255}
            height={150}
          />
        </Link>
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.common.white,
          width: "100%",
          px: 8,
          py: 3,
          color: theme.palette.common.black,
          borderTop: "1px dashed black",
        }}
      >
        <Grid
          container
          justifyContent="space-evenly"
          gap={3}
          textAlign={footerTextAlignment}
        >
          <Grid item xs={12} sm={6} md="auto">
            <Typography variant="h5" sx={{ mb: 1 }}>
              If you are a
            </Typography>
            <List
              dense
              disablePadding
              sx={{ fontSize: theme.typography.body1.fontSize }}
            >
              <ListItem dense sx={listItemStyle}>
                Software Engineer
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Web Developer
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Software Engineering Student
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Application Developer
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Code Enthusiast
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Programmer
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Front-End Developer
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                DevOps Engineer
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Back-End Developer
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Mobile Developer
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Full-Stack Developer
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Software Developer
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Data Developer
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                iOS Developer
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Application Programmer
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Computer Programmer
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Game Programmer
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} sm={6} md="auto">
            <Typography variant="h5" sx={{ mb: 1 }}>
              and live in
            </Typography>
            <List
              dense
              disablePadding
              sx={{ fontSize: theme.typography.body1.fontSize }}
            >
              <ListItem dense sx={listItemStyle}>
                Atascadero
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Avila Beach
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Cambria
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Cayucos
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Creston
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Grover Beach
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Harmony
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Arroyo Grande
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Los Osos
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Morro Bay
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Nipomo
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Oceano
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Paso Robles
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Pismo Beach
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                San Luis Obispo
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                San Miguel
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                San Simeon
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Santa Margarita
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Shandon
              </ListItem>
              <ListItem dense sx={listItemStyle}>
                Templeton
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} sm={12} md="auto">
            <Typography
              variant="h5"
              sx={{ mb: 1 }}
            >{`then we would like to be friends! 😎`}</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
