import { FC, ReactNode } from "react";
import { Box, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Footer } from "./footer";
import { Header } from "./header";
import { Navigation } from "./navigation";
import { wrapperStyle } from "../styles/theme";

interface Props {
  children: ReactNode;
  page: string;
}

export const Layout: FC<Props> = ({ children }) => {
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
        overflow: "scroll",
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
      <Header />
      <Box
        sx={{
          flexGrow: 1,
          mb: 2,
          ...wrapperStyle,
          width: "auto",
          maxWidth: "75%",
        }}
      >
        <Navigation />
      </Box>
      <Paper
        elevation={6}
        square
        sx={{
          px: 8,
          py: 10,
          mb: 6,
          ...wrapperStyle,
        }}
      >
        {children}
      </Paper>
      <Footer />
    </Box>
  );
};
