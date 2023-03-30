import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";
import { Dialog } from "primereact/dialog";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import { Checkbox, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./Monedhat.scss";
const Monedhat = ({ fetchMonedhat }) => {
  const defaultState = {
    Kodi: "",
    Pershkrim: "",
    Simboli: "",
    Qindarka: "",
    Kursi: "",
    MonedheBaze: 1,
    Aktiv: 1,
    CheckAktiv: 1,
    RoutingNumber: "",
    NrLL: "",
    Banka: "",
  };
  const [banka, setBanka] = useState([]);

  const fetchPost = async () => {
    try {
      const response = await axios(
        `${process.env.REACT_APP_API_KEY}/fatura/blerje/data`
      );

      setBanka(response?.data.Banka);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const submitHanlder = async (e) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/tjera/monedhat`,
        {
          Kodi: state?.Kodi,
          Pershkrim: state?.Pershkrim,
          Simboli: state?.Simboli,
          Qindarka: state?.Qindarka,
          Monedhe_Baze: state?.MonedheBaze,
          Kursi: state?.Kursi,
          Check_AccountNumber: state?.NrLL,
          Check_RoutingNumber: state?.RoutingNumber,
          Check_Banka_Pershkrim: state?.Banka,
          Check_Eshte: state?.CheckAktiv,
          Aktiv: state?.Aktiv,
        }
      );
      setTimeout(() => {
        fetchMonedhat();
      }, 1000);
    } catch (error) {}
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
  const [check, setCheck] = useState(false);
  const [monedhebaze, setMonedheBaze] = useState(false);
  const [aktiv, setAktiv] = useState(false);

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
    <form onSubmit={(e) => submitHanlder(e)}>
      <AddIcon
        fontSize="small"
        className="cursor-pointer"
        onClick={() => onClick("displayResponsive")}
      >
        Open
      </AddIcon>
      <Dialog
        header="Shtim/Modifikim Monedhat"
        visible={displayResponsive}
        onHide={() => onHide("displayResponsive")}
        breakpoints={{ "960px": "75vw" }}
        style={{ width: "30vw" }}
      >
        <div className="mt-2">
          <ButtonGroup size="xl" className="mb-2 border-t p-1">
            <Button
              className="p-1.5"
              onClick={(e) => {
                e.preventDefault();
                setDisabled(false);
              }}
            >
              <PostAddIcon />
              <span className="phone-text">Shtim</span>
            </Button>
            <Button className="p-1.5" disabled={disabled}>
              <DeleteIcon />
              <span className="phone-text">Fshije</span>
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
              <span className="phone-text">Anullim</span>
            </Button>
            <Button
              className="p-1.5"
              onClick={(e) => {
                e.preventDefault();
                submitHanlder();
                setState(defaultState);
              }}
              disabled={disabled}
              type="submit"
            >
              <AppRegistrationIcon />
              <span className="phone-text">Rregjistrim</span>
            </Button>
          </ButtonGroup>
        </div>

        <div className="gird p-2">
          <div className="flex items-center gap-2 ">
            <TextField
              disabled={disabled}
              type="text"
              variant="outlined"
              inputProps={{ maxLength: 3 }}
              label="Kodi"
              value={state?.Kodi}
              onChange={(e) => handleChange("Kodi", e.target.value)}
              size="small"
            />

            <FormControlLabel
              className="mt-2"
              control={
                <Checkbox
                  disabled={disabled}
                  type="checkbox"
                  variant="outlined"
                  size="small"
                  value={state?.MonedheBaze}
                  onChange={(e) => setMonedheBaze(e.target.checked)}
                />
              }
              label="Monedha Baze"
            />
          </div>
          <div className="grid w-56">
            <TextField
              disabled={disabled}
              type="text"
              variant="outlined"
              label="Pershkrim"
              value={state?.Pershkrim}
              onChange={(e) => handleChange("Pershkrim", e.target.value)}
              size="small"
              className="mt-2"
            />

            <TextField
              disabled={disabled}
              type="text"
              variant="outlined"
              label="Simboli"
              size="small"
              value={state?.Simboli}
              onChange={(e) => handleChange("Simboli", e.target.value)}
              className="mt-2"
            />
          </div>
          <TextField
            disabled={disabled}
            type="text"
            variant="outlined"
            label="Qindarka"
            size="small"
            value={state?.Qindarka}
            onChange={(e) => handleChange("Qindarka", e.target.value)}
            className="mt-2"
          />

          <div className="flex items-center mt-2 gap-2">
            <TextField
              disabled={disabled}
              type="text"
              variant="outlined"
              label="Kursi"
              value={state?.Kursi}
              onChange={(e) => handleChange("Kursi", e.target.value)}
              size="small"
            />

            <FormControlLabel
              control={
                <Checkbox
                  disabled={disabled}
                  type="checkbox"
                  variant="outlined"
                  size="small"
                  value={state?.Aktiv}
                  onChange={(e) => setAktiv(e.target.checked)}
                />
              }
              label="Aktiv"
            />
          </div>

          <div className="flex justify-start items-center gap-2">
            <FormControlLabel
              control={
                <Checkbox
                  disabled={disabled}
                  type="checkbox"
                  variant="outlined"
                  size="small"
                  value={state?.CheckAktiv}
                  onChange={(e) => setCheck(e.target.checked)}
                />
              }
              label="Check Aktiv"
            />
          </div>

          <div className="grid w-56">
            <TextField
              disabled={disabled}
              type="text"
              variant="outlined"
              label="Routing Number"
              size="small"
              value={state?.Adresa}
              onChange={(e) => handleChange("Adresa", e.target.value)}
              className="mt-2"
            />

            <TextField
              disabled={disabled}
              type="text"
              variant="outlined"
              label="Nr Llogarie"
              size="small"
              value={state?.Adresa}
              onChange={(e) => handleChange("Adresa", e.target.value)}
              className="mt-2"
            />
          </div>
          <Form.Select
            disabled={disabled}
            value={state?.Banka}
            className="mt-2 w-56"
            onChange={(e) => handleChange("Banka", e.target.value)}
          >
            <option label="Banka"></option>
            {banka.map((monedha) => {
              return (
                <option value={monedha?.Pershkrim}>{monedha?.Pershkrim}</option>
              );
            })}
          </Form.Select>
        </div>
      </Dialog>
    </form>
  );
};

export default Monedhat;
