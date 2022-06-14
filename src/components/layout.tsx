import { FC, ReactNode } from "react";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";

interface Props {
  children: ReactNode;
  page: string;
}

export const Layout: FC<Props> = ({ children, page }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        height: "100%",
        backgroundColor: "#eddbcc",
        backgroundImage:
          "linear-gradient(45deg, #FFF 25%, transparent 25%), linear-gradient(135deg, #FFF 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #FFF 75%), linear-gradient(135deg, transparent 75%, #FFF 75%)",
        backgroundSize: "80px 80px",
        backgroundPosition: "0 0, 40px 0, 40px -40px, 0px 40px",
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.common.white,
          width: "100%",
          minHeight: 6,
          boxShadow: `0 0 0 4px ${theme.palette.secondary.main}, 0 0 0 7px white, 0 0 0 10px black`,
          zIndex: theme.zIndex.tooltip,
          position: "fixed",
          top: "0",
        }}
      />
      <Paper
        elevation={6}
        square
        sx={{
          px: 8,
          py: 3,
          width: "75%",
          mt: 6,
          mb: 2,
          mx: "auto",
          minWidth: 450,
        }}
      >
        <Typography variant="h1" color="primary" align="center">
          SLO Coders
        </Typography>
      </Paper>
      <Paper
        elevation={6}
        square
        sx={{ px: 8, py: 10, width: "75%", mb: 6, mx: "auto", minWidth: 450 }}
      >
        {children}
      </Paper>
      <Box
        sx={{
          backgroundColor: theme.palette.common.white,
          width: "100%",
          px: 8,
          py: 3,
          boxShadow: `0 0 0 4px ${theme.palette.secondary.main}, 0 0 0 7px white, 0 0 0 10px black`,
          color: theme.palette.common.black,
        }}
      >
        <Grid container justifyContent="space-evenly">
          <Grid item>
            <Typography variant="h5">If you are a</Typography>
            <List
              dense
              disablePadding
              sx={{ fontSize: theme.typography.body1.fontSize }}
            >
              <ListItem dense>Software Engineer</ListItem>
              <ListItem dense>Web Developer</ListItem>
              <ListItem dense>Software Engineering Student</ListItem>
              <ListItem dense>Code Enthusiast</ListItem>
              <ListItem dense>Programmer</ListItem>
              <ListItem dense>Front End Developer</ListItem>
              <ListItem dense>Back End Developer</ListItem>
              <ListItem dense>Full Stack Developer</ListItem>
              <ListItem dense>Software Developer</ListItem>
              <ListItem dense>Application Programmer</ListItem>
            </List>
          </Grid>
          <Grid item>
            <Typography variant="h5">and live in</Typography>
            <List
              dense
              disablePadding
              sx={{ fontSize: theme.typography.body1.fontSize }}
            >
              <ListItem dense>Atascadero</ListItem>
              <ListItem dense>Avila Beach</ListItem>
              <ListItem dense>Cambria</ListItem>
              <ListItem dense>Cayucos</ListItem>
              <ListItem dense>Creston</ListItem>
              <ListItem dense>Grover Beach</ListItem>
              <ListItem dense>Harmony</ListItem>
              <ListItem dense>Arroyo Grande</ListItem>
              <ListItem dense>Los Osos</ListItem>
              <ListItem dense>Morro Bay</ListItem>
              <ListItem dense>Nipomo</ListItem>
              <ListItem dense>Oceano</ListItem>
              <ListItem dense>Paso Robles</ListItem>
              <ListItem dense>Pismo Beach</ListItem>
              <ListItem dense>San Luis Obispo</ListItem>
              <ListItem dense>San Miguel</ListItem>
              <ListItem dense>San Simeon</ListItem>
              <ListItem dense>Santa Margarita</ListItem>
              <ListItem dense>Shandon</ListItem>
              <ListItem dense>Templeton</ListItem>
            </List>
          </Grid>
          <Grid item>
            <Typography variant="h5">{`then we would like to be friends! 🙂`}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
