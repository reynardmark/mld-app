import { Box, IconButton, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { paths } from "../constants";
import MenuIcon from "@mui/icons-material/Menu";

interface MainPageHeaderProps {
  toggleOpenMobile: () => void;
}

export default function MainPageHeader({
  toggleOpenMobile,
}: MainPageHeaderProps) {
  const location = useLocation();

  return (
    <Box display="flex" alignItems="center">
      <IconButton
        onClick={toggleOpenMobile}
        sx={{
          display: { sm: "none" },
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
        }}
      >
        {paths.filter((path) => location.pathname === path.pathname)[0].name}
      </Typography>
    </Box>
  );
}
