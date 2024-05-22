import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { paths } from "../constants";

export default function MainPageHeader() {
  const location = useLocation();

  return (
    <Box display="flex">
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
