import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";
import Checkbox from "antd/lib/checkbox/Checkbox";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ChangeCircleRoundedIcon from "@mui/icons-material/ChangeCircleRounded";
const KategoriSigurimesh = () => {
  const [kategoriSigurimesh, setKategoriSigurimesh] = useState([]);
  const [pozicioni, setPozicioni] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/fatura/blerje/data`)
      .then((response) => {
        setPozicioni(response.data.Pozicioni);
        setKategoriSigurimesh(response.data.KategoriSigurimesh);
      })
      .catch((err) => {
        console.log(err);
      });
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
  };

  const submitHandler = () => {
    axios
      .post(`${process.env.REACT_APP_API_KEY}/paguar/pergjegjes`, {
        NrPersonal: state.Npersonal,
        Emer: state.Emri,
        Mbiemer: state.Mbiemri,
        Datelindja: state.DateLindja,
        Profesioni_ID: state.profesioni,
        Pozicioni_ID: state.Pozicioni,
        TipPunesimi_id: state.Ksigurimesh,
        VlereTransporti: state.Vtransporti,
        Aktiv: state.Aktiv,
      })
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <form onSubmit={() => submitHandler()}>
      <AddIcon fontSize="small" className="cursor-pointer" onClick={handleShow}>
        Open
      </AddIcon>
      <Modal
        centered
        style={{ marginLeft: "1rem", marginTop: "-2rem" }}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header style={{ background: " #1971c2" }}>
          <Modal.Title style={{ color: "white" }}>
            {" "}
            <spna style={{ color: "#d0ebff " }}>Shtim/Modifikim</spna> Tip
            punesimi
          </Modal.Title>
          <div style={{ marginLeft: "10rem" }}>
            <CloseIcon
              onClick={() => handleClose(false)}
              style={{ color: "white" }}
              className="flex  justify-between items-end cursor-pointer"
            />
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
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

            <div>
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
                label="Mbiemri"
                size="small"
                value={state?.Mbiemri}
                onChange={(e) => handleChange("Mbiemri", e.target.value)}
                className="mt-3"
              />

              <div className="flex justify-center items-center">
                <TipPunesimi />
                <Form.Select
                  placeholder="Kategori Sigurimesh"
                  disabled={disabled}
                  className="mt-3"
                  value={state?.Ksigurimesh}
                  onChange={(e) => handleChange("Ksigurimesh", e.target.value)}
                >
                  <option label="Kategori Sigurimesh" />
                  {kategoriSigurimesh.map((list) => {
                    return (
                      <option key={list.ID} value={list.Kodi}>
                        {list.Pershkrim}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>

              <Form.Select
                placeholder="profesioni"
                disabled={disabled}
                className="mt-3"
                value={state?.profesioni}
                onChange={(e) => handleChange("profesioni", e.target.value)}
              >
                <option>profesioni</option>
                {pozicioni.map((list) => {
                  return <option key={list.Id}>{list.Pershkrim}</option>;
                })}
              </Form.Select>

              <div className="flex justify-center items-center">
                <Pozicioni />
                <Form.Select
                  placeholder="Pozicioni"
                  disabled={disabled}
                  className="mt-3"
                  value={state?.Pozicioni}
                  onChange={(e) => handleChange("Pozicioni", e.target.value)}
                >
                  <option>Pozicioni</option>
                </Form.Select>
              </div>

              <TextField
                type="date"
                disabled={disabled}
                size="small"
                className="mt-2"
                value={state?.DateLindja}
                onChange={(e) => handleChange("DateLindja", e.target.value)}
              />

              <Form.Select
                placeholder="Vlere transporti"
                disabled={disabled}
                className="mt-3"
                value={state?.Vtransporti}
                onChange={(e) => handleChange("Vtransporti", e.target.value)}
              >
                <option>Vlere transporti</option>
              </Form.Select>

              <Checkbox
                disabled={disabled}
                type="checkbox"
                variant="outlined"
                size="small"
                value={state?.Aktiv}
                onChange={(e) => setCheck(e.target.checked)}
                className="mt-2"
              />
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </form>
  );
};

export default KategoriSigurimesh;
