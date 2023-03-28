import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";
import { Dialog } from "primereact/dialog";

const Transportues = ({ fetchMonedhat }) => {
  const defaultState = {
    Pershkrim: "",
    Nipt: "",
    Targa: "",
    Adresa: "",
    Email: "",
    Celular: "",
    Telefon: "",
    Aktiv: "",
  };
  const [openFurnitor, setOpenFurnitor] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [state, setState] = useState(defaultState);

  const submitHanlder = () => {
    try {
      axios.post(`${process.env.REACT_APP_API_KEY}/tjera/transport`, {
        Pershkrim: state.Pershkrim,
        Nipt: state.Nipt,
        Targa_e_Mjetit: state.Targa,
        Adresa: state.Adresa,
        Email: state.Email,
        Cel: state.Celular,
        Tel: state.Telefon,
        Aktiv: state.Aktiv,
      });
      setTimeout(() => {
        fetchMonedhat();
      }, 1000);
    } catch (error) {}
  };

  const handleChange = (key, value) => {
    setState((state) => {
      return {
        ...state,
        [key]: value,
      };
    });
  };

  //  useState i modaleve brenda kategorive ne fletblerje
  const [displayResponsive, setDisplayResponsive] = useState(false);
  const [position, setPosition] = useState("center");

  const dialogFuncMap = {
    displayResponsive: setDisplayResponsive,
  };

  const onClick = (Pershkrim, position) => {
    dialogFuncMap[`${Pershkrim}`](true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (Pershkrim) => {
    dialogFuncMap[`${Pershkrim}`](false);
  };

  return (
    <form onSubmit={() => submitHanlder()}>
      <AddIcon
        fontSize="small"
        className="cursor-pointer"
        onClick={() => onClick("displayResponsive")}
      >
        Open
      </AddIcon>
      <Dialog
        header="Transportuesi"
        visible={displayResponsive}
        onHide={() => onHide("displayResponsive")}
        breakpoints={{ "960px": "75vw" }}
        style={{ width: "24.5vw" }}
      >
        <div className=" mt-2">
          <ButtonGroup size="xl" className="mb-2">
            <Button
              className="p-2"
              onClick={(e) => {
                e.preventDefault();
                setDisabled(false);
              }}
            >
              <PostAddIcon /> Shtim
            </Button>
            <Button className="p-2" disabled={disabled}>
              <DeleteIcon /> Fshije
            </Button>
            <Button
              className="p-2"
              onClick={(e) => {
                e.preventDefault();
                setState(defaultState);
              }}
              disabled={disabled}
            >
              <ClearIcon />
              Anullim
            </Button>
            <Button
              className="p-2"
              onClick={(e) => {
                e.preventDefault();
                submitHanlder();
                setState(defaultState);
              }}
              disabled={disabled}
              type="submit"
            >
              <AppRegistrationIcon />
              Rregjistrim
            </Button>
          </ButtonGroup>
        </div>

        <div className="border p-2">
          <TextField
            disabled={disabled}
            type="text"
            variant="outlined"
            label="Nipt"
            inputProps={{ maxLength: "10" }}
            size="small"
            value={state?.Nipt}
            onChange={(e) => handleChange("Nipt", e.target.value)}
            className="mt-2"
          />
          <br />
          <TextField
            disabled={disabled}
            variant="outlined"
            label="Pershkrim"
            type="text"
            value={state?.Pershkrim}
            onChange={(e) => handleChange("Pershkrim", e.target.value)}
            size="small"
            className="mt-2"
          />

          <br />
          <TextField
            disabled={disabled}
            type="text"
            variant="outlined"
            label="Targa"
            size="small"
            value={state?.Targa}
            onChange={(e) => handleChange("Targa", e.target.value)}
            className="mt-2"
          />

          <br />
          <TextField
            disabled={disabled}
            type="text"
            variant="outlined"
            label="Adresa"
            size="small"
            value={state?.Adresa}
            onChange={(e) => handleChange("Adresa", e.target.value)}
            className="mt-2"
          />

          <br />

          <TextField
            disabled={disabled}
            type="email"
            variant="outlined"
            label="Email"
            size="small"
            value={state?.Email}
            onChange={(e) => handleChange("Email", e.target.value)}
            className="mt-2"
          />

          <br />

          <TextField
            disabled={disabled}
            type="number"
            variant="outlined"
            label="Celular"
            size="small"
            value={state?.Celular}
            onChange={(e) => handleChange("Celular", e.target.value)}
            className="mt-2"
          />
          <br />

          <TextField
            disabled={disabled}
            type="number"
            variant="outlined"
            label="Telefon"
            size="small"
            value={state?.Telefon}
            onChange={(e) => handleChange("Telefon", e.target.value)}
            className="mt-2"
          />

          <FormControlLabel
            style={{ marginTop: "0.5rem", marginLeft: "0.5rem" }}
            control={
              <Checkbox
                disabled={disabled}
                type="checkbox"
                variant="outlined"
                size="small"
                value={state?.Aktiv}
                onChange={(e) => handleChange("Aktiv", e.target.checked)}
              />
            }
            label="Aktiv"
          />
        </div>
      </Dialog>
    </form>
  );
};

export default Transportues;
