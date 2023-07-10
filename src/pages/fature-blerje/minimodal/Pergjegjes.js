import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ChangeCircleRoundedIcon from "@mui/icons-material/ChangeCircleRounded";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Checkbox, TextField } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";
import TipPunesimi from "./TipPunesimi";
import Pozicioni from "./Pozicioni";
import moment from "moment/moment";
import { Dialog } from "primereact/dialog";
import Form from "react-bootstrap/Form";

const Pergjegjes = ({ fetchMonedhat }) => {
  const [kategoriSigurimesh, setKategoriSigurimesh] = useState([]);
  const [profesioni, setProfesioni] = useState([]);
  const [pozicioni, setPozicioni] = useState([]);
  const [testim, setTestim] = useState([]);

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

  const fetchPunonjes = async () => {
    try {
      const response = await axios(
        `${process.env.REACT_APP_API_KEY}/fatura/blerje/data`
      );
      setProfesioni(response?.data.Profesioni);
      setPozicioni(response?.data.Pozicioni);
      setKategoriSigurimesh(response?.data.KategoriSigurimesh);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPunonjes();
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
        fetchMonedhat();
      }, 1000);
    } catch (error) {}
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

  //  useState i modaleve brenda kategorive ne fletblerje
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        style={{ width: "30vw" }}
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
              <TipPunesimi
                fetchPunetor={fetchPunonjes}
                kategoriSigurimesh={kategoriSigurimesh}
              />
            </div>
            <Form.Select
              style={{ width: "12.9rem" }}
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
              <Pozicioni fetchPunetor1={fetchPunonjes} pozicioni={pozicioni} />
            </div>
            <Form.Select
              style={{ width: "12.9rem" }}
              placeholder="Pozicioni"
              disabled={disabled}
              className="mt-3"
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

          <div className="flex justify-start items-center space">
            <div style={{ marginLeft: "5px" }}>
              <TextField
                disabled={disabled}
                type="date"
                size="small"
                label="Ditelindja"
                InputLabelProps={{
                  shrink: true,
                }}
                className="mt-2"
                value={state?.DateLindja}
                onChange={(e) => handleChange("DateLindja", e.target.value)}
              />{" "}
            </div>
            <div style={{ marginLeft: "10px" }}>
              <TextField
                style={{ marginRight: "5px" }}
                disabled={disabled}
                type="number"
                size="small"
                className="mt-2 "
                label="Vlere Transporti"
                value={state?.vlereTransporti}
                onChange={(e) =>
                  handleChange("vlereTransporti", e.target.value)
                }
              />

              <Checkbox
                disabled={disabled}
                type="checkbox"
                variant="outlined"
                size="small"
                value={state?.Aktiv}
                onChange={(e) => handleChange("Aktiv", e.target.checked)}
                className="mt-2"
              />
            </div>
          </div>
        </div>
      </Dialog>
    </form>
  );
};

export default Pergjegjes;
