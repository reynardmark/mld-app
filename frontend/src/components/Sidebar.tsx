import { useEffect, useState } from "react";
import {
  Box,
  Drawer,
  DrawerProps,
  Typography,
  useTheme,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListIcon from "@mui/icons-material/List";
import { useWindowDimensions } from "../hooks";
import { useLocation } from "react-router-dom";
import meralcoLogo from "../assets/meralco-logo.png";
import { PATHS, SIDEBAR_WIDTH } from "../constants";

interface SidebarProps {
  isOpenMobile: boolean;
  toggleOpenMobile: () => void;
  setIsOpenMobile: (desiredValue: boolean) => void;
}

const SIDEBAR_ICONS = [
  <DashboardIcon />,
  <ArrowDropDownCircleIcon />,
  <ListIcon />,
];

const SIDEBAR_ITEMS = PATHS.map((path, idx) => {
  return { ...path, icon: SIDEBAR_ICONS[idx] };
});

export default function Sidebar({
  isOpenMobile,
  toggleOpenMobile,
  setIsOpenMobile,
}: SidebarProps) {
  const theme = useTheme();
  const { width: windowWidth } = useWindowDimensions();
  const [drawerVariant, setDrawerVariant] = useState<DrawerProps["variant"]>(
    windowWidth <= theme.breakpoints.values.sm ? "temporary" : "permanent",
  );
  const location = useLocation();

  useEffect(() => {
    if (windowWidth <= theme.breakpoints.values.sm) {
      setDrawerVariant("temporary");
    } else {
      setDrawerVariant("permanent");
    }
    setIsOpenMobile(false);
  }, [windowWidth]);

  return (
    <Drawer
      variant={drawerVariant}
      open={isOpenMobile}
      PaperProps={{
        sx: {
          width: SIDEBAR_WIDTH,
          position: "fixed",
        },
      }}
      onClose={toggleOpenMobile}
    >
      <Box
        height={64}
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={3}
      >
        <Box
          component="img"
          src={meralcoLogo}
          alt="Meralco Logo"
          sx={{
            height: "48px",
            width: "48px",
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            cursor: "default",
            userSelect: "none",
          }}
        >
          MLD
        </Typography>
      </Box>

      <List>
        {SIDEBAR_ITEMS.map((item) => (
          <ListItem key={item.name}>
            <ListItemButton
              selected={location.pathname === item.pathname}
              href={item.pathname}
              sx={{ borderRadius: 2 }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  sx: {
                    fontWeight: 700,
                  },
                }}
              >
                {item.name}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
