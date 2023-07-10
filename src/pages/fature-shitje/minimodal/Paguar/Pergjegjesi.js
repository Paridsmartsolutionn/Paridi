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
import TipPunesimii from "./TipPunesimii";
import Pozicion from "./Pozicion";
import moment from "moment/moment";
import ChangeCircleRoundedIcon from "@mui/icons-material/ChangeCircleRounded";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Dialog } from "primereact/dialog";

const Pergjegjesi = ({ fetchKKlienti }) => {
  const [kategoriSigurimesh, setKategoriSigurimesh] = useState([]);
  const [profesioni, setProfesioni] = useState([]);
  const [pozicioni, setPozicioni] = useState([]);
  const [testpergj, setTestpergj] = useState([]);
  //    console.log('testprgj',testpergj)

  const fetchPergjegjsi = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_KEY}/fatura/shitje/data`
      );

      setKategoriSigurimesh(response.data.KategoriSigurimesh);
      setPozicioni(response.data.Pozicioni);
      setProfesioni(response.data.Profesioni);
      setTestpergj(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPergjegjsi();
  }, []);

  const defaultState = {
    Npersonal: "",
    Emri: "",
    Mbiemer: "",
    Ksigurimesh: "",
    profesioni: "",
    Pozicioni: "",
    vlereTransporti: "",
    Aktiv: "",
    DateLindja: moment().format("yyyy-MM-DD"),
  };

  const submitHandler = () => {
    try {
      axios.post(`${process.env.REACT_APP_API_KEY}/paguar/pergjegjes`, {
        NrPersonal: state.Npersonal,
        Emer: state.Emri,
        Mbiemer: state.Mbiemer,
        Datelindja: state.DateLindja,
        Profesioni_ID: state.profesioni,
        Pozicioni_ID: state.Pozicioni,
        TipPunesimi_id: state.Ksigurimesh,
        VlereTransporti: state.vlereTransporti,
        Aktiv: state.Aktiv,
      });

      setTimeout(() => {
        fetchKKlienti();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const [check, setCheck] = useState();

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
            className="mt-3"
          />

          <br />

          <TextField
            disabled={disabled}
            type="text"
            variant="outlined"
            label="Mbiemer"
            size="small"
            value={state?.Mbiemer}
            onChange={(e) => handleChange("Mbiemer", e.target.value)}
            className="mt-3"
          />

          <Form.Select
            style={{ width: "14rem" }}
            placeholder="profesioni"
            disabled={disabled}
            className="mt-3"
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
          <div className="flex justify-start items-center">
            <div className="mt-2">
              <TipPunesimii tippunsimi={fetchPergjegjsi} />
            </div>
            <Form.Select
              style={{ width: "12.7rem" }}
              placeholder="Kategori Sigurimesh"
              disabled={disabled}
              className="mt-3"
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
            <div className="mt-2">
              <Pozicion tippunsimi={fetchPergjegjsi} />
            </div>
            <Form.Select
              placeholder="Pozicioni"
              disabled={disabled}
              className="mt-3"
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
            style={{ width: "14rem" }}
            id="outlined-date"
            label="Datelindja"
            type="date"
            className="mt-3"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            value={state?.DateLindja}
            onChange={(e) => handleChange("DateLindja", e.target.value)}
          />

          <div>
            <TextField
              disabled={disabled}
              type="number"
              size="small"
              className="mt-2 "
              label="Vlere Transporti"
              value={state?.vlereTransporti}
              onChange={(e) => handleChange("vlereTransporti", e.target.value)}
            />

            <FormControlLabel
              style={{ marginLeft: "1rem", marginTop: "0.7rem" }}
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
        </div>
      </Dialog>
    </form>
  );
};

export default Pergjegjesi;
