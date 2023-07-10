import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";
import { TextField } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ChangeCircleRoundedIcon from "@mui/icons-material/ChangeCircleRounded";
import { Dialog } from "primereact/dialog";

const Njesia = ({ selektNjesia, data }) => {
  const defaultState = {
    Kodi: "",
    Pershkrim: "",
  };

  //   const submitHanlder = () =>{
  //     try{

  //       axios.post(`${process.env.REACT_APP_API_KEY}/tjera/klasifikim/1`,{
  //         Pershkrim:state.Pershkrim

  //       })
  //       setTimeout(() => {
  //         // fetchMonedhat();
  //       }, 1000);
  // }
  // catch (error) {

  // }}

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

  const rekordet = selektNjesia?.Njesia;
  const rekorde = `${rekordet ? rekordet.length : 0} Rekorde`;
  console.log({ rekorde });

  function goToNextPage() {
    // setQytetet((qytetet) => qytetet + 1)
  }

  function goToPreviousPage() {
    // setQytetet((furnitor) => qytetet - 1)
  }

  function changePage(event) {
    // not yet implemented
  }

  return (
    <form>
      <AddIcon
        fontSize="small"
        className="cursor-pointer"
        onClick={() => onClick("displayResponsive")}
      >
        Open
      </AddIcon>

      <Dialog
        header="Shtim/Modifikim Njesia"
        visible={displayResponsive}
        onHide={() => onHide("displayResponsive")}
        breakpoints={{ "960px": "75vw" }}
        style={{ width: "24.5vw" }}
      >
        <div className="mt-2">
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
                setDisabled(true);
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

        <div className=" border  p-2 flex flex-col ">
          <TextField
            disabled={disabled}
            type="text"
            size="small"
            variant="outlined"
            label="Kodi"
            value={state?.Kodi}
            onChange={(e) => handleChange("Kodi", e.target.value)}
            className=" mt-3"
          ></TextField>

          <TextField
            disabled={disabled}
            type="text"
            size="small"
            variant="outlined"
            label="Pershkrim"
            value={state?.Pershkrim}
            onChange={(e) => handleChange("Pershkrim", e.target.value)}
            className="mt-3"
          ></TextField>
        </div>

        <div className="flex mt-3 justify-between ">
          <div className="border rounded-md  ">
            <KeyboardDoubleArrowLeftIcon
              onClick={goToNextPage}
              className="border-r-2 hover:bg-slate-300 hover:cursor-pointer "
            />
            <KeyboardDoubleArrowRightIcon
              onClick={goToNextPage}
              className="border-l-2 hover:bg-slate-300 hover:cursor-pointer "
            />
          </div>
          <span>
            <b>{rekorde}</b>
          </span>
        </div>
      </Dialog>
    </form>
  );
};

export default Njesia;
