import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import DataTableS from "../SuperMarket/DataTableS";
import Calculator from "./Calculator";
import Button from "@mui/material/Button";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { useNavigate } from "react-router-dom";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const drawerWidth = 240;

export default function PermanentDrawerRight() {
  const navigate = useNavigate();

  const handleClickClose = () => {
    navigate("/home");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ flexDirection: "row-reverse" }}>
          <Button
            onClick={handleClickClose}
            style={{
              height: "3em",
            }}
          >
            <PowerSettingsNewIcon
              sx={{
                backgroundColor: "white",
                borderRadius: "50%",
                width: 36,
                height: 36,
                color: "red",
              }}
            ></PowerSettingsNewIcon>
          </Button>
          <Button
            // onClick={handleClickClose}
            style={{
              height: "3em",
            }}
          >
            <QuestionMarkIcon
              sx={{
                backgroundColor: "white",
                borderRadius: "50%",
                width: 36,
                height: 36,
              }}
            ></QuestionMarkIcon>
            Info
          </Button>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            SuperMarket
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ width: 1300, overflow: "auto", p: 2 }}
        variant="permanent"

        // sx={{
        //
        //   bgcolor: "background.default",

        //
        // }}
      >
        <Toolbar />
        <Typography>
          <DataTableS />
        </Typography>
      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
        }}
        variant="permanent"
        anchor="right"
      >
        <Divider sx={{ flexDirection: "column", padding: 6 }} />

        <Calculator />
      </Drawer>
    </Box>
  );
}
