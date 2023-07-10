import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import FormControlLabel from "@mui/material/FormControlLabel";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";
import ChangeCircleRoundedIcon from "@mui/icons-material/ChangeCircleRounded";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Dialog } from "primereact/dialog";
import { Checkbox, TextField } from "@mui/material";

const TransportShitje = ({ fetchTShitje }) => {
  const defaultState = {
    Pershkrim: "",
    Qyteti: "",
    Targa: "",
    Adresa: "",
    Nipt: "",
    Active: "",
    Email: "",
    Cel: "",
    Tel: "",
  };

  const submitHanlder = () => {
    try {
      axios.post(`${process.env.REACT_APP_API_KEY}/tjera/transport`, {
        Pershkrim: state.Pershkrim,
        Nipt: state.Nipt,
        Targa_e_Mjetit: state.Targa,
        Adresa: state.Adresa,
        Email: state.Email,
        Cel: state.Cel,
        Tel: state.Tel,
        Aktiv: state.Active,
      });
      setTimeout(() => {
        fetchTShitje();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const [openFurnitor, setOpenFurnitor] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [state, setState] = useState(defaultState);

  const handleChange = (key, value) => {
    setState((state) => {
      return {
        ...state,
        [key]: value,
      };
    });
  };
  console.log({ state });

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
            <Button
              className="p-1"
              onClick={(e) => {
                e.preventDefault();
                setState(defaultState);
              }}
              disabled={disabled}
              type="submit"
            >
              <ChangeCircleRoundedIcon />
              Modifikim
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

        <div className="flex border p-2 gap-4">
          <div>
            <TextField
              disabled={disabled}
              type="text"
              variant="outlined"
              size="small"
              label="Pershkrim"
              value={state?.Pershkrim}
              onChange={(e) => handleChange("Pershkrim", e.target.value)}
              className=" mt-2 mb-2 "
            />

            <div className="flex justify-start items-center">
              <TextField
                disabled={disabled}
                type="text"
                variant="outlined"
                label="NIPT"
                inputProps={{ maxLength: 10 }}
                value={state?.Nipt}
                onChange={(e) => handleChange("Nipt", e.target.value)}
                size="small"
              />
            </div>

            <div className="flex justify-start items-center">
              <TextField
                disabled={disabled}
                type="text"
                variant="outlined"
                className="mt-2"
                label="Targa"
                value={state?.Targa}
                onChange={(e) => handleChange("Targa", e.target.value)}
                size="small"
              />
            </div>
            <div className="flex justify-start items-center">
              <TextField
                disabled={disabled}
                type="text"
                variant="outlined"
                label="Adresa"
                className="mt-2"
                value={state?.Adresa}
                onChange={(e) => handleChange("Adresa", e.target.value)}
                size="small"
              />
            </div>
            <div>
              <TextField
                disabled={disabled}
                type="email"
                variant="outlined"
                label="Email"
                size="small"
                className="mt-2"
                value={state?.Email}
                onChange={(e) => handleChange("Email", e.target.value)}
              />
            </div>
            <div>
              <TextField
                disabled={disabled}
                type="number"
                variant="outlined"
                label="Celular"
                className="mt-2"
                size="small"
                value={state?.Cel}
                onChange={(e) => handleChange("Cel", e.target.value)}
              />
            </div>

            <TextField
              disabled={disabled}
              type="number"
              variant="outlined"
              label="Telefon"
              className="mt-2"
              size="small"
              value={state?.Tel}
              onChange={(e) => handleChange("Tel", e.target.value)}
            />

            <FormControlLabel
              style={{ marginLeft: "5px" }}
              control={
                <Checkbox
                  type="checkbox"
                  variant="outlined"
                  size="small"
                  value={state?.Active}
                  onChange={(e) => handleChange("Active", e.target.checked)}
                />
              }
              className="mt-3"
              label=" Aktiv"
            />
          </div>
        </div>
      </Dialog>
    </form>
  );
};

export default TransportShitje;
