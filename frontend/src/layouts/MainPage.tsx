import { Box } from "@mui/material";
import { MainPageHeader, Sidebar } from "../components";
import { useToggle } from "../hooks";
import { Outlet } from "react-router-dom";
import { SIDEBAR_WIDTH } from "../constants";

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
          maxHeight: "100vh",
          width: "100%",
          backgroundColor: "var(--page-background)",
          marginLeft: `${SIDEBAR_WIDTH}px`,
        }}
        display="flex"
        flexDirection="column"
        padding={2}
        gap={4}
      >
        <MainPageHeader toggleOpenMobile={toggleOpenMobile} />
        <Outlet />
      </Box>
    </Box>
  );
}
