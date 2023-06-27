import React, { useState, useEffect, useRef, useMemo } from "react";

import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  Box,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import SideBarDialog from "./SideBarDialog";
import ButtonSubmit from "./ButtonSubmit";
import "../RestorantCss/Dialog.scss";
import MenuDialog from "./MenuDialog";
import DataTableComponent from "../../service/DataTableF";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomDialog = ({ open, handleClose, numberOfTables }) => {
  const [menuData, setMenuData] = useState([]);

  const handleMenuDialogClick = (title, itemCount) => {
    const newMenuData = { title, itemCount };
    setMenuData((prevMenuData) => [...prevMenuData, newMenuData]);
  };

  // const handleSearchChange = (e) => {
  //   setSearchText(e.target.value);
  // };

  // const handleMenuDialogClick = (title, itemCount) => {
  //   const newColumn = { title, field: title.toLowerCase().replace(" ", "_") };
  //   setTableColumns((prevColumns) => [...prevColumns, newColumn]);

  //   const newData = { title, itemCount };
  //   setTableData((prevData) => [...prevData, newData]);
  // };

  return (
    <>
      <Dialog
        sx={{ padding: 0 }}
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{ position: "relative" }}
          style={{ padding: 0 }}
          className="app-Bar"
        >
          <Toolbar className="dialog-title">
            <Typography
              edge="start"
              color="gray"
              sx={{ padding: 0, ml: 0, flex: 1 }}
              variant="h6"
            >
              Parid
            </Typography>
            <TextField
              className="search-product"
              label="Search"
              variant="outlined"
              // value={searchText}
              // onChange={handleSearchChange}
              sx={{ mb: 0, mt: 0, mr: 20, ml: -10 }}
            />
            <Typography
              className="title-table"
              edge="end"
              sx={{ ml: 95, flex: 1 }}
              variant="h6"
              component="div"
            >
              <div>{`Table A${numberOfTables}`}</div>
              <div>
                <IconButton
                  sx={{ ml: 30, flex: 1 }}
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </div>
            </Typography>
          </Toolbar>
        </AppBar>

        <Box sx={{ display: "flex" }}>
          <SideBarDialog />

          <Box className="boxMain" sx={{ flex: 1 }}>
            <div>
              <h1 className="title-artikujt">Artikujt</h1>
              <hr className="line-hr" />
              <div>
                <MenuDialog
                  title="Alcohol"
                  itemCount={2}
                  onClick={() => handleMenuDialogClick("Alcohol", 2)}
                />
                <MenuDialog
                  title="Cola "
                  itemCount={2}
                  onClick={() => handleMenuDialogClick("Cola", 2)}
                />
                <MenuDialog
                  title="Alcohol"
                  itemCount={2}
                  onClick={() => handleMenuDialogClick("Alcohol", 2)}
                />
                <MenuDialog
                  title="Cola "
                  itemCount={2}
                  onClick={() => handleMenuDialogClick("Cola", 2)}
                />
                <MenuDialog
                  title="Alcohol"
                  itemCount={2}
                  onClick={() => handleMenuDialogClick("Alcohol", 2)}
                />
                <MenuDialog
                  title="Cola "
                  itemCount={2}
                  onClick={() => handleMenuDialogClick("Cola", 2)}
                />
                <MenuDialog
                  title="Alcohol"
                  itemCount={2}
                  onClick={() => handleMenuDialogClick("Drinks", 7)}
                />
                <MenuDialog
                  title="Caj "
                  itemCount={4}
                  onClick={() => handleMenuDialogClick("Caj", 4)}
                />

                <MenuDialog
                  title="Fanta "
                  itemCount={5}
                  onClick={() => handleMenuDialogClick("Fanta", 5)}
                />
              </div>

              <>
                <DataTableComponent menuData={menuData} />
              </>
            </div>
          </Box>

          <ButtonSubmit />
        </Box>
      </Dialog>
    </>
  );
};

export default CustomDialog;
