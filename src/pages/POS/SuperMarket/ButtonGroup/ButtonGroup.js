import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import SavingsIcon from "@mui/icons-material/Savings";

const drawerWidth = 100;
export default function ButtonGroupS() {
  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
      ></AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            paddingTop: 12,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Divider />

        <ButtonGroup
          size="large"
          variant="contained"
          orientation="vertical"
          aria-label="vertical contained button group"
        >
          <Button
            style={{
              height: "6em",
            }}
          >
            <PointOfSaleIcon />
            Fiskal
          </Button>
          <Button
            style={{
              height: "6em",
            }}
          >
            <SavingsIcon />
            Arka
          </Button>
          <Button
            style={{
              height: "6em",
            }}
          >
            <DeleteIcon />
            Fshije
          </Button>
          <Button
            style={{
              height: "6em",
            }}
          >
            <AddIcon />
            Shtim
          </Button>
        </ButtonGroup>
        <Divider />
      </Drawer>
    </Box>
  );
}
