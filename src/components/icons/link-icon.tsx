import { IconButton, darken, Typography } from "@mui/material";
import { ReactElement } from "react";
import { UrlType } from "../../data/data.types";
import { Link } from "../link";

export function LinkIcon({
  icon,
  href,
  text,
  fontSize = 24,
  iconButtonSize = "medium",
}: {
  icon: ReactElement;
  href: UrlType;
  text?: string;
  fontSize?: number;
  iconButtonSize?: "small" | "medium" | "large" | undefined;
}) {
  return (
    <Link
      underline="hover"
      href={href}
      target="_blank"
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 0.25,
        "&:hover": {
          "& .MuiIconButton-root": {
            background: (theme) => darken(theme.palette.common.white, 0.1),
          },
        },
        "&:active": {
          "& .MuiIconButton-root": {
            background: (theme) => theme.palette.secondary.main,
            color: (theme) => theme.palette.common.white,
          },
        },
      }}
    >
      <IconButton
        size={iconButtonSize}
        sx={{
          mt: 0.5,
          fontSize,
          color: (theme) => theme.palette.common.black,
        }}
      >
        {icon}
      </IconButton>
      {text && (
        <Typography
          variant="body2"
          component="p"
          sx={{ display: "inline", marginLeft: 0.5 }}
        >
          {text}
        </Typography>
      )}
    </Link>
  );
}
