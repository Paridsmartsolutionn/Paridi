import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import moment from "moment";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";
import KatgSigHyrje from "./PergjegjesMagazinaHyrje/KatgSigHyrje";
import PozicioniHyrje from "./PergjegjesMagazinaHyrje/PozicioniHyrje";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";

import { Dialog } from "primereact/dialog";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
// import KategoriSigurim from './KategoriSigurim';
const PergjegjesMagazina = ({ PergjegjesMagazina }) => {
  const [profesioni, setProfesioni] = useState([]);
  const [pozicioni, setPozicioni] = useState([]);
  const [kategoriSigurimesh, setKategoriSigurimesh] = useState([]);

  const [testim, setTestim] = useState([]);
  // console.log({testim})

  const fetchiPost2 = async () => {
    try {
      const response = await axios(
        `${process.env.REACT_APP_API_KEY}/flete/hyrje/data`
      );

      setKategoriSigurimesh(response.data.KategoriSigurimesh);
      setPozicioni(response.data.Pozicioni);
      setProfesioni(response.data.Profesioni);
      setTestim(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchiPost2();
  }, []);

  const defaultState = {
    Npersonal: "",
    Emri: "",
    Mbiemri: "",
    Ksigurimesh: "",
    profesioni: "",
    Pozicioni: "",
    Vtransporti: "",
    DateLindja: moment().format("yyyy-MM-DD"),
    Aktiv: "",
  };

  const [check, setCheck] = useState();

  const submitHandler = () => {
    try {
      axios.post(`${process.env.REACT_APP_API_KEY}/paguar/pergjegjes`, {
        NrPersonal: state.Npersonal,
        Emer: state.Emri,
        Mbiemer: state.Mbiemri,
        Datelindja: state.DateLindja,
        Profesioni_ID: state.profesioni,
        Pozicioni_ID: state.Pozicioni,
        TipPunesimi_id: state.Ksigurimesh,
        VlereTransporti: state.Vtransporti,
        Aktiv: state.Aktiv,
      });
      setTimeout(() => {
        PergjegjesMagazina();
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
    <form onSubmit={() => submitHandler()}>
      <AddIcon
        fontSize="small"
        className="cursor-pointer"
        onClick={() => onClick("displayResponsive")}
      >
        Open
      </AddIcon>

      <Dialog
        header="Punonjes"
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

        <div className="border p-2">
          <TextField
            disabled={disabled}
            type="text"
            variant="outlined"
            label="Nr.personal"
            value={state?.Npersonal}
            onChange={(e) => handleChange("Npersonal", e.target.value)}
            size="small"
          />

          <br />

          <TextField
            disabled={disabled}
            type="text"
            variant="outlined"
            label="Emri"
            size="small"
            value={state?.Emri}
            onChange={(e) => handleChange("Emri", e.target.value)}
            className="mt-2"
          />

          <br />

          <TextField
            disabled={disabled}
            type="text"
            variant="outlined"
            label="Mbiemri"
            size="small"
            value={state?.Mbiemri}
            onChange={(e) => handleChange("Mbiemri", e.target.value)}
            className="mt-2"
          />
          <div className="flex justify-start items-center">
            <Form.Select
              disabled={disabled}
              className="mt-2"
              style={{ width: "14rem" }}
              value={state?.profesioni}
              onChange={(e) => handleChange("profesioni", e.target.value)}
            >
              <option label="Profesioni" />
              {profesioni.map((list) => {
                return (
                  <option key={list.ID} value={list.ID}>
                    {list.Pershkrim}
                  </option>
                );
              })}
            </Form.Select>
          </div>
          <div className="flex justify-start items-center">
            <KatgSigHyrje KatgSigHyrje={fetchiPost2} />
            <Form.Select
              placeholder="Kategori Sigurimesh"
              disabled={disabled}
              className="mt-2"
              style={{ width: "12.7rem" }}
              value={state?.Ksigurimesh}
              onChange={(e) => handleChange("Ksigurimesh", e.target.value)}
            >
              <option label="Kategori Sigurimesh" />
              {kategoriSigurimesh.map((list) => {
                return (
                  <option key={list.ID} value={list.ID}>
                    {list.Pershkrim}
                  </option>
                );
              })}
            </Form.Select>
          </div>

          <div className="flex justify-start items-center">
            <PozicioniHyrje KatgSigHyrje={fetchiPost2} />
            <Form.Select
              placeholder="Pozicioni"
              disabled={disabled}
              className="mt-2"
              style={{ width: "12.7rem" }}
              value={state?.Pozicioni}
              onChange={(e) => handleChange("Pozicioni", e.target.value)}
            >
              <option label="Pozicioni" />
              {pozicioni.map((list) => {
                return (
                  <option key={list.ID} value={list.ID}>
                    {list.Pershkrim}
                  </option>
                );
              })}
            </Form.Select>
          </div>

          <TextField
            type="date"
            size="small"
            label="Datelindja"
            className="mt-2"
            style={{ width: "14rem" }}
            InputLabelProps={{
              shrink: true,
            }}
            value={state?.DateLindja}
            onChange={(e) => handleChange("DateLindja", e.target.value)}
          />

          <br />

          <TextField
            size="small"
            type="number"
            label="Vlere transporti"
            disabled={disabled}
            className="mt-2"
            value={state?.Vtransporti}
            onChange={(e) => handleChange("Vtransporti", e.target.value)}
          ></TextField>

          <FormControlLabel
            style={{ marginLeft: "0.5rem", marginTop: "0.7rem" }}
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

export default PergjegjesMagazina;
