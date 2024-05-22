import {
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
  useLocation,
} from "react-router-dom";
import { Box, Button, Paper, Typography } from "@mui/material";

export default function Error() {
  const navigate = useNavigate();
  const location = useLocation();
  const error = useRouteError() as Error;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "var(--page-background)",
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={2}
    >
      <Typography
        variant="h5"
        component="h1"
        sx={{
          fontWeight: 500,
        }}
      >
        {isRouteErrorResponse(error)
          ? "Page Not Found"
          : "Oops! Something went wrong"}
      </Typography>

      {isRouteErrorResponse(error) && (
        <Typography>
          The requested URL {location.pathname} does not exist.
        </Typography>
      )}

      <Button
        onClick={() => navigate("/")}
        variant="contained"
        sx={{ margin: "0 auto" }}
      >
        Back to home
      </Button>
    </Box>
  );
}
