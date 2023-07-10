import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ChangeCircleRoundedIcon from "@mui/icons-material/ChangeCircleRounded";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { Dialog } from "primereact/dialog";

const QytetiMagaz = ({ fetchQytetiMagaz }) => {
  const submitHandler = () => {
    try {
      axios.post(`${process.env.REACT_APP_API_KEY}/tjera/qytet`, {
        Kodi: state.Kodi,
        Pershkrim: state.Pershkrim,
      });
      setTimeout(() => {
        fetchQytetiMagaz();
      }, 1000);
    } catch (error) {}
  };

  const defaultState = {
    Kodi: "",
    Pershkrim: "",
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
    <form onSubmit={() => submitHandler()}>
      <AddIcon
        fontSize="small"
        className="cursor-pointer"
        onClick={() => onClick("displayResponsive")}
      >
        Open
      </AddIcon>

      <Dialog
        header="Shtim/Modifikim Qyteti"
        visible={displayResponsive}
        onHide={() => onHide("displayResponsive")}
        breakpoints={{ "960px": "75vw" }}
        style={{ width: "29vw" }}
      >
        <div className="mt-2 border-t p-1">
          <ButtonGroup size="xl" className="mb-2">
            <Button
              className="p-1.5"
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
            <Button className="p-1.5" disabled={disabled}>
              <DeleteIcon /> Fshije
            </Button>
            <Button
              className="p-1.5"
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
              className="p-1.5"
              onClick={(e) => {
                e.preventDefault();
                submitHandler();
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

        <div className="border p-2 bg-slate-100">
          <TextField
            className="mt-2"
            disabled={disabled}
            type="text"
            label="Kodi"
            inputProps={{ maxLength: 3 }}
            value={state?.Kodi}
            onChange={(e) => handleChange("Kodi", e.target.value)}
            size="small"
          />
          <br />
          <TextField
            className="mt-2"
            disabled={disabled}
            type="text"
            label="Pershkrim"
            value={state?.Pershkrim}
            onChange={(e) => handleChange("Pershkrim", e.target.value)}
            size="small"
          />
        </div>
      </Dialog>
    </form>
  );
};

export default QytetiMagaz;
