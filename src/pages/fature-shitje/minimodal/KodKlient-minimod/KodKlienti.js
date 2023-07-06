import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ButtonGroup from "@mui/material/ButtonGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import axios from "axios";
import Shteti from "../KodKlient-minimod/Shteti";
import Qyteti from "../KodKlient-minimod/Qyteti";
import PercentIcon from "@mui/icons-material/Percent";
// import { Radio } from 'antd';
import { Dialog } from "primereact/dialog";
import Form from "react-bootstrap/Form";
import Button from "@mui/material/Button";
import { Checkbox, TextField } from "@mui/material";
import { border, borderRadius } from "@mui/system";

const KodKlienti = ({ fetchKKlienti }) => {
  const [furnitor, setFurnitoret] = useState([]);
  const [qytetet, setQytetet] = useState([]);
  const [shtetet, setShtetet] = useState([]);
  const [testKodi, setTestKodi] = useState([]);

  const fetchPost = async () => {
    try {
      const response = await axios(
        `${process.env.REACT_APP_API_KEY}/fatura/shitje/data`
      );

      // setFurnitoret(response.data[0].Furnitoret)
      setShtetet(response?.data.Shtetet);
      setQytetet(response?.data.Qytetet);
      setTestKodi(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);

  const defaultState = {
    Kodi: "",
    BarKodi: "",
    Shenim: "",
    Nipt: "",
    Llogari: "",
    FperMallra: "",
    Shteti: "",
    Qyteti: "",
    Adresa: "",
    Aktiv: "",
    Cel: "",
    Skonto: "",
    Email: "",
    PersonKontakti: "",
    MetodaPErfitimit: "",
    Active: "",
  };

  const [showData, setSHowData] = useState([]);
  console.log("showdata", showData);

  const submitHanlder = () => {
    try {
      axios.post(`${process.env.REACT_APP_API_KEY}/klient/`, {
        Kodi: state.Kodi,
        BarKod: state.BarKodi,
        Pershkrim: state.Shenim,
        Nipt: state.Nipt,
        NrLL: state.Llogari,
        Cel: state.Cel,
        Email: state.Email,
        EmerKontakti: state.PersonKontakti,
        MetodaPerfitimit: state.MetodaPerfitimit,
        Aktiv: state.Active,
        Adresa: state.Adresa,
        Shteti_Kodi: state.Shteti,
        Qyteti_Kodi: state.Qyteti,
        // FperMallra:state.FperMallra
        Skonto: state.Skonto,
      });
      setTimeout(() => {
        fetchKKlienti();
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
  const [check, setCheck] = useState(false);

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

  // perdoren per radio buton
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  // ploteso fushat e furnitor type
  const handleFurnitorType = (e) => {
    const value = e.target.value;
    const nipt = furnitor.find((item) => item.Kodi === value).Nipt;
    // const qytet = qytetet.find(item=>item.Pershkrim===value).Qytetet

    setState((state) => {
      return {
        ...state,
        furnitorType: value,
        furnitorId: value,
        Nipt: nipt,
        // Qytetet:value,
        // Qytetet:qytet,
      };
    });
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
        header="Klient"
        visible={displayResponsive}
        onHide={() => onHide("displayResponsive")}
        breakpoints={{ "960px": "75vw" }}
        style={{ width: "38vw" }}
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

        <div className="flex border p-2 gap-4">
          <div>
            <TextField
              disabled={disabled}
              type="text"
              variant="outlined"
              label="Kodi"
              value={state?.Kodi}
              onChange={(e) => handleChange("Kodi", e.target.value)}
              size="small"
            />
            <br />
            <TextField
              disabled={disabled}
              type="text"
              variant="outlined"
              label="Bar Kodi"
              value={state?.BarKodi}
              onChange={(e) => handleChange("BarKodi", e.target.value)}
              size="small"
              className="mt-2"
            />

            <br />

            <TextField
              disabled={disabled}
              size="small"
              type="text"
              variant="outlined"
              label="Pershkrim"
              value={state?.Shenim}
              onChange={(e) => handleChange("Shenim", e.target.value)}
              className=" mt-2 mb-1"
            />

            <br />
            <div className="flex justify-start items-center  ">
              <Form.Select
                required
                className="mt-1.5"
                size="sm"
                value={state?.Cmimi ?? ""}
                disabled={disabled}
                onChange={(e) => handleFurnitorType(e)}
              >
                <option label="Cmimi"></option>
                <option>Cmimi1</option>
                <option>Cmimi2</option>
                <option>Cmimi3</option>
                <option>Cmimi4</option>
                <option>Cmimi5</option>
                <option>Cmimi6</option>
                <option>Cmimi8</option>
                <option>Cmimi9</option>
                <option>Cmimi10</option>
              </Form.Select>

              <TextField
                style={{ marginLeft: "1rem", width: "18rem" }}
                disabled={disabled}
                type="text"
                variant="outlined"
                label=" Apliko Skonto "
                value={state?.Skonto}
                onChange={(e) => handleChange("Skonto", e.target.value)}
                size="small"
              />
              <h2 className="ml-2 ">
                {" "}
                <h2 style={{ color: "#1d71c0" }} /> %{" "}
              </h2>
            </div>

            <div className="flex justify-start items-center">
              <Shteti />
              <Form.Select
                style={{ width: "12.7rem" }}
                disabled={disabled}
                className="mt-2"
                size="sm"
                value={state?.Shteti}
                onChange={(e) => handleChange("Shteti", e.target.value)}
              >
                <option label="Shteti" />
                {shtetet.map((list) => {
                  return (
                    <option key={list.Kodi} value={list.Kodi}>
                      {list.Pershkrim}
                    </option>
                  );
                })}
              </Form.Select>
            </div>

            <div className="flex justify-start items-center">
              <Qyteti />
              <Form.Select
                size="sm"
                style={{ width: "12.7rem" }}
                disabled={disabled}
                value={state?.Qyteti}
                onChange={(e) => handleChange("Qyteti", e.target.value)}
                className="mt-2"
              >
                <option label="Qyteti" />
                {qytetet.map((list) => {
                  return (
                    <option key={list.Kodi} value={list.Kodi}>
                      {list.Pershkrim}
                    </option>
                  );
                })}
              </Form.Select>
            </div>
            <TextField
              disabled={disabled}
              type="number"
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
              type="number"
              variant="outlined"
              label="Cel"
              size="small"
              value={state?.Cel}
              onChange={(e) => handleChange("Cel", e.target.value)}
              className="mt-2"
            />
            <br />
            <TextField
              disabled={disabled}
              type="text"
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
              type="text"
              variant="outlined"
              label="Person Kontakti"
              size="small"
              value={state?.PersonKontakti}
              onChange={(e) => handleChange("PersonKontakti", e.target.value)}
              className="mt-2"
            />
            <br />
            <TextField
              disabled={disabled}
              type="text"
              variant="outlined"
              label="Nipt"
              size="small"
              inputProps={{ maxLength: 20 }}
              value={state?.Nipt}
              onChange={(e) => handleChange("Nipt", e.target.value)}
              className="mt-2"
            />

            <br />
            <TextField
              disabled={disabled}
              type="text"
              variant="outlined"
              label="Llogari"
              size="small"
              value={state?.Llogari}
              onChange={(e) => handleChange("Llogari", e.target.value)}
              className="mt-2"
            />
          </div>
          <div className="mt-96 ">
            <h4>Metoda e Perfitimit</h4>

            {/* <Radio.Group style={{background:'	rgb(232,232,232)', borderRadius:'2px' ,padding:'5px' }} 
      disabled={disabled} 
      onChange={(e)=> handleChange("MetodaPerfitimit",e.target.value)}
       value={state?.MetodaPerfitimit}>
      <Radio value={1}>Sipas Cmimit te Percaktuar</Radio>
      <br/>
      <Radio value={2}>Me Pike </Radio>
      <br/>
      <Radio value={3}>Me Perqindje</Radio>
      <Radio value={4}>Progresive Sipas Vlerave</Radio>
    </Radio.Group> */}
            <FormControlLabel
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

export default KodKlienti;
