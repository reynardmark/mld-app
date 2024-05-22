import { Box } from "@mui/material";
import { MainPageHeader, Sidebar } from "../components";
import { useToggle } from "../hooks";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  const [isOpenMobile, toggleOpenMobile, setIsOpenMobile] = useToggle(false);

  return (
    <Box display="flex">
      <Sidebar
        isOpenMobile={isOpenMobile}
        toggleOpenMobile={toggleOpenMobile}
        setIsOpenMobile={setIsOpenMobile}
      />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "var(--page-background)",
        }}
        display="flex"
        flexDirection="column"
        padding={2}
        gap={4}
      >
        <MainPageHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
