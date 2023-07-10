import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Checkbox } from "primereact/checkbox";
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
import Modal from "react-bootstrap/Modal";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Reorder } from "@mui/icons-material";
import { Dialog } from "primereact/dialog";
import ChangeCircleRoundedIcon from "@mui/icons-material/ChangeCircleRounded";
const Grupi = ({ setSelektGrup, selektGrup }) => {
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

  //     const submitHanlder = () => {
  //       try{

  //         axios.post(`${process.env.REACT_APP_API_KEY}/tjera/transport`,{
  //           Pershkrim:state.Pershkrim,
  //           Nipt:state.Nipt,
  //           Targa_e_Mjetit:state.Targa,
  //           Adresa:state.Adresa,
  //           Email:state.Email,
  //           Cel:state.Celular,
  //           Tel:state.Telefon,
  //           Aktiv:state.Aktiv
  //         })
  //         setTimeout(() => {
  //           fetchMonedhat();
  //         }, 1000);
  //   }
  //   catch (error) {

  //   }}

  const handleChange = (key, value) => {
    setState((state) => {
      return {
        ...state,
        [key]: value,
      };
    });
  };

  const [cities, setCities] = useState([]);

  const onCityChange = (e) => {
    let selectedCities = [...cities];

    if (e.checked) selectedCities.push(e.value);
    else selectedCities.splice(selectedCities.indexOf(e.value), 1);

    setCities(selectedCities);
  };
  const Rrjeshtat = selektGrup?.Grup;
  const rekorde = `${Rrjeshtat ? Rrjeshtat.length : ""} Rekorde`;

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
    <div>
      <form>
        <AddIcon
          fontSize="small"
          className="cursor-pointer"
          onClick={() => onClick("displayResponsive")}
        >
          Open
        </AddIcon>

        <Dialog
          header="Shtim/Modifikim Klasifikim 1"
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

          <div className="border p-2">
            <TextField
              disabled={disabled}
              type="text"
              variant="outlined"
              label="Kodi"
              inputProps={{ maxLength: "10" }}
              size="small"
              value={Rrjeshtat?.Kodi}
              onChange={(e) => handleChange("Kodi", e.target.value)}
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
            <div className="flex gap-2  ">
              <Form.Select
                disabled={disabled}
                value={state?.MasterKodi}
                className="mt-2 w-56"
                onChange={(e) => handleChange("MasterKodi", e.target.value)}
              >
                <option label="Master Kodi" />
              </Form.Select>

              <div className="flex items-center">
                <Checkbox
                  inputId="cb1"
                  value="Aktiv"
                  onChange={onCityChange}
                  checked={cities.includes("Aktiv")}
                ></Checkbox>
                <label
                  style={{ marginLeft: "5px", fontWeight: 500 }}
                  htmlFor="cb2"
                  className="p-checkbox-label"
                >
                  Aktiv
                </label>
              </div>
            </div>

            <TextField
              disabled={disabled}
              type="number"
              variant="outlined"
              label="Rendit"
              size="small"
              value={state?.Rendit}
              onChange={(e) => handleChange("Rendit", e.target.value)}
              className="mt-2"
            />
          </div>
          <div className="flex mt-3 justify-between ">
            <div className="border rounded-md  ">
              <KeyboardDoubleArrowLeftIcon className="border-r-2 hover:bg-slate-300 hover:cursor-pointer " />
              <KeyboardDoubleArrowRightIcon className="border-l-2 hover:bg-slate-300 hover:cursor-pointer " />
            </div>
            <span>
              <b>{rekorde}</b>
            </span>
          </div>
        </Dialog>
      </form>
    </div>
  );
};

export default Grupi;
