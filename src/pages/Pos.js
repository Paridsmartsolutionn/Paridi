import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Supermarket from "./POS/SuperMarket/SuperMarket";
import Restorant from "./POS/Restaurant/Restorant";

const Pos = () => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    handleClose();
  };

  return (
    <div>
      {!selectedOption && (
        <Button variant="contained" onClick={handleOpen}>
          Open Components
        </Button>
      )}
      {selectedOption === "restaurant" && (
        <div>
          <Restorant />
        </div>
      )}
      {selectedOption === "supermarket" && (
        <div>
          <Supermarket />
        </div>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Choose Component</DialogTitle>
        <DialogContent>
          <Button onClick={() => handleSelectOption("restaurant")}>
            Restaurant
          </Button>
          <Button onClick={() => handleSelectOption("supermarket")}>
            Supermarket
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Pos;
