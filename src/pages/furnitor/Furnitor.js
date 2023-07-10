import React, { useState, useEffect } from "react";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { TabView, TabPanel } from "primereact/tabview";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import moment from "moment";
import axios from "axios";
import Transportues from "../fature-blerje/minimodal/Transportues";
import Klasifikim1 from "./minimodal/Klasifikim1";
import Klasifikim2 from "./minimodal/Klasifikim2";
import Klasifikim3 from "./minimodal/Klasifikim3";
import Klasifikim4 from "./minimodal/Klasifikim4";
import Klasifikim5 from "./minimodal/Klasifikim5";
import dummydata from "../../demo-data/dummyData.json";
import "react-toastify/dist/ReactToastify.css";
import PrimeGrid from "../../components/primeReact/PrimeGrid";
import { Panel } from "primereact/panel";
import KeyboardDoubleArrowLeftRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
import Autocomplete from "@mui/material/Autocomplete";
import Shtet from "../fature-blerje/minimodal/Shtet";
import Qytet from "../fature-blerje/minimodal/Qytet";
import NavBar from "../../components/Navbar/NavBar";
import SideBar from "../../components/Navbar/SideBar";
import Footer from "../../components/Navbar/Footer";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import ChangeCircleRoundedIcon from "@mui/icons-material/ChangeCircleRounded";
const Furnitor = () => {
  const [checked, setChecked] = useState(false);
  const [hidePupUp, setHidePupUp] = useState(false);
  const toast = useRef(null);
  const defaultState = {
    Kodi: "",
    Pershkrim: "",
    NIPT: "",
    Cmimi: "",
    NrLL: "",
    Aktiv: false,
    Tel: "",
    Cel: "",
    Shtet: "",
    Qytet: "",
    Emer_Kontakti: "",
    Email: "",
    Adresa: "",
    Shenim: "",
    Limitvlere: "",
    LimitDite: "",
    Kls1: "",
    Kls2: "",
    Kls3: "",
    Kls4: "",
  };

  const [state, setState] = useState(defaultState);
  console.log({ state });

  const [rows, setRows] = useState([state]);

  const [columns, setColumns] = useState([
    { field: "Kodi", title: "Kodi" },
    { field: "ID", title: "ID" },
    { field: "Pershkrim", title: "Pershkrim" },
    { field: "NIPT", title: "NIPT" },
    { field: "Emer_Kontakti", title: "Emer_Kontakti" },
    { field: "Shtet", title: "Shtet" },
    { field: "Qytet", title: "Qytet" },
    { field: "Cmimi", title: "Cmimi" },
    { field: "Cel", title: "Cel" },
    { field: "Adresa", title: "Adresa" },
    { field: "Email", title: "Email" },
    { field: "Tel", title: "Tel" },
    { field: "NrLL", title: "NrLL" },
    { field: "Aktiv", title: "Aktiv" },
  ]);

  const handleChange = (key, value) => {
    setState((state) => {
      return {
        ...state,
        [key]: value,
      };
    });
  };

  let {
    Kodi,
    Pershkrim,
    NIPT,
    Cmimi,
    NrLL,
    Tel,
    Cel,
    Shtet,
    Qytet,
    Emer_Kontakti,
    Email,
    Adresa,
    Shenim,
    Limitvlere,
    LimitDite,
    Kls1,
    Kls2,
    Kls3,
    Kls4,
  } = state;

  const handleChangeArr = () => {
    setRows([...rows, state]);

    console.log("data qe do futen", state);
    setState({
      Kodi: "",
      ID: "",
      Pershkrim: "",
      NIPT: "",
      Emer_Kontakti: "",
      Shtet: "",
      Qytet: "",
      Cmimi: "",
      Cel: "",
      Adresa: "",
      Email: "",
      Tel: "",
      NrLL: "",
      Aktiv: "",
    });
  };

  useEffect(() => {
    handleChangeArr();
  }, []);

  const [disabled, setDisabled] = useState(true);

  const template = (options) => {
    const className = `${options.className} justify-content-start`;
    const titleClassName = `${options.titleClassName} pl-1`;

    return (
      <div className={className}>
        <span className={titleClassName}>Furnitor</span>
      </div>
    );
  };

  const anulloFatureBlerje = () => {
    let excludeData = ["AfatiData", "Deklarimit", "MagazinaData", "data"];
    let hasValue = Object.keys(state)?.find(
      (key) => !excludeData.includes(key) && state[key] != ""
    );
    if (hasValue) setHidePupUp(true);
  };

  const cmimi = [
    { title: "50Leke", value: 1 },
    { title: "Cmimi 2", value: 2 },
    { title: "Cmimi 3", value: 3 },
    { title: "Cmimi 4", value: 4 },
    { title: "Cmimi 5", value: 5 },
    { title: "Cmimi 6", value: 6 },
  ];

  const llogari = [
    { title: "Zhvlersim i materialeve te para", value: 1 },
    { title: "Zhvlersim i materialeve te dyta", value: 2 },
    { title: "Zhvlersim i materialeve te treta", value: 3 },
    { title: "Zhvlersim i materialeve te katerta", value: 4 },
    { title: "Zhvlersim i materialeve te pesta", value: 5 },
    { title: "Zhvlersim i materialeve te gjashta", value: 6 },
  ];

  const qyteti = [
    { title: "Berat", value: 1 },
    { title: "Shkoder", value: 2 },
    { title: "Diber", value: 3 },
  ];
  const shteti = [
    { title: "Itali", value: 1 },
    { title: "Shqiperi", value: 2 },
    { title: "Gjermani", value: 3 },
  ];

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [toShow, SetToshow] = useState(false);

  const submitHanlder = (e) => {
    try {
      // axios.post(`${process.env.REACT_APP_API_KEY}/furnitor/`,{
      //   Kodi: state.Kodi,
      //   Pershkrim: state.Shenim,
      //   Nipt:state.Nipt,
      //   NrLL:state.Llogari,
      //   Aktiv:state.Aktiv,
      //   Adresa:state.Adresa,
      //   Shteti_Kodi:state.Shteti,
      //   Qyteti_Kodi:state.Qyteti,
      // })
      // setTimeout(() => {
      //   fetchMonedhat();
      // }, 1000);
    } catch (error) {}
  };

  const addRow = () => {
    let newRow = {};
    columns.forEach((column) => {
      if (column?.allowSum) newRow[column.field] = 0;
      else {
        newRow[column.Id] = null;
      }
    });
    setRows((rows) => {
      return [newRow, ...rows];
    });
  };
  const deleteRow = (row) => {
    let filteredRows = [...rows];
    filteredRows = filteredRows.filter((p) => p.Id !== row.Id);

    toast.current.show({
      severity: "error",
      summary: "Rrjeshti u fshi",
      detail: row.field,
    });
    setRows(filteredRows);
  };

  return (
    <div>
      <NavBar />

      <div className="flex  ">
        <div>
          <SideBar />
        </div>
        <div>
          <Panel headerTemplate={template}>
            <ButtonGroup size="xl" className="mb-2 shadow-sm">
              <Button
                className="p-1"
                onClick={(e) => {
                  e.preventDefault();
                  setDisabled(false);
                  addRow();
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
              <Button
                className="p-1"
                disabled={disabled}
                onClick={(e) => {
                  e.preventDefault();
                  deleteRow();
                }}
              >
                <DeleteIcon /> Fshije
              </Button>
              <Button
                className="p-1"
                onClick={(e) => {
                  e.preventDefault();
                  anulloFatureBlerje();
                  setDisabled(true);
                }}
                disabled={disabled}
              >
                <ClearIcon />
                Anullim
              </Button>
              <Button
                className="p-1"
                onClick={(e) => {
                  e.preventDefault();
                }}
                disabled={disabled}
                type="submit"
              >
                <AppRegistrationIcon />
                Rregjistrim
              </Button>
              <button onClick={handleChangeArr}> Futi </button>
            </ButtonGroup>

            <TabView>
              <TabPanel
                className={toggleState === 1}
                onClick={() => toggleTab(1)}
                disabled={disabled}
                header="Furnitor"
              >
                <div className="flex w-full gap-2">
                  <TextField
                    disabled={disabled}
                    type="text"
                    label="Kodi"
                    inputProps={{
                      maxLength: 10,
                    }}
                    size="small"
                    value={state.Kodi}
                    onChange={(e) => handleChange("Kodi", e.target.value)}
                  />

                  <TextField
                    disabled={disabled}
                    type="text"
                    label="Pershkrim"
                    size="small"
                    value={state.Pershkrim}
                    onChange={(e) => handleChange("Pershkrim", e.target.value)}
                  />

                  <TextField
                    disabled={disabled}
                    type="text"
                    label="NIPT"
                    inputProps={{
                      maxLength: 10,
                    }}
                    size="small"
                    value={state.NIPT}
                    onChange={(e) => handleChange("NIPT", e.target.value)}
                  />

                  <Autocomplete
                    className="w-56"
                    options={cmimi.map((option) => option.title)}
                    value={state.Cmimi}
                    onChange={(e, v) => handleChange("Cmimi", v)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        size="small"
                        onChange={({ target }) =>
                          handleChange("Cmimi", target.value)
                        }
                        label="Cmimi"
                      />
                    )}
                  />

                  <Autocomplete
                    className="w-56"
                    options={llogari.map((option) => option.title)}
                    value={state.Llogari}
                    onChange={(e, v) => handleChange("NrLL", v)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        size="small"
                        onChange={({ target }) =>
                          handleChange("NrLL", target.value)
                        }
                        label="Llogari"
                      />
                    )}
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        disabled={disabled}
                        value={state.Aktiv}
                        onChange={(e) =>
                          handleChange("Aktiv", e.target.checked)
                        }
                      />
                    }
                    label="Aktiv"
                  />
                </div>
              </TabPanel>
              <TabPanel
                className={toggleState === 2}
                onClick={() => toggleTab(2)}
                disabled={disabled}
                header="Te tjera"
              >
                <div className="flex gap-2">
                  <div>
                    <div className="flex gap-2 mb-2">
                      <TextField
                        disabled={disabled}
                        type="text"
                        label="Emer Kontakti"
                        size="small"
                        value={state.Emer_Kontakti}
                        onChange={(e) =>
                          handleChange("Emer_Kontakti", e.target.value)
                        }
                      />
                      <TextField
                        disabled={disabled}
                        type="number"
                        label="Tel"
                        inputProps={{
                          maxLength: 15,
                        }}
                        size="small"
                        value={state.Tel}
                        onChange={(e) => handleChange("Tel", e.target.value)}
                      />
                    </div>
                    <div className="flex gap-2">
                      <TextField
                        disabled={disabled}
                        type="email"
                        label="Email"
                        size="small"
                        value={state.Email}
                        onChange={(e) => handleChange("Email", e.target.value)}
                      />

                      <TextField
                        disabled={disabled}
                        type="number"
                        label="Cel"
                        inputProps={{
                          maxLength: 15,
                        }}
                        size="small"
                        value={state.Cel}
                        onChange={(e) => handleChange("Cel", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center ">
                      <Shtet
                      //  shtetet={shtetet} setShtetet={setShtetet} fetchUpdate={fetchFurnitor}
                      />
                      <Autocomplete
                        className="w-56"
                        options={shteti.map((option) => option.title)}
                        value={state.Shteti}
                        onChange={(e, v) => handleChange("Shtet", v)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            size="small"
                            onChange={({ target }) =>
                              handleChange("Shtet", target.value)
                            }
                            label="Shteti"
                          />
                        )}
                      />
                    </div>
                    <div className="flex items-center">
                      <Qytet
                      // fetchUpdate={fetchFurnitor} qytetet={qytetet}
                      />
                      <Autocomplete
                        className="w-56"
                        options={qyteti.map((option) => option.title)}
                        value={state.Qytet}
                        onChange={(e, v) => handleChange("Qytet", v)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            size="small"
                            onChange={({ target }) =>
                              handleChange("Qyteti", target.value)
                            }
                            label="Qyteti"
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <TextField
                      disabled={disabled}
                      type="text"
                      label="Adresa"
                      size="small"
                      value={state.Adresa}
                      onChange={(e) => handleChange("Adresa", e.target.value)}
                    />
                    <textarea
                      disabled={disabled}
                      cols="38"
                      rows="2"
                      placeholder="Shenim"
                      className="shenim w-56 resize-none  rounded-md"
                      value={state.Shenim}
                      onChange={(e) => handleChange("Shenim", e.target.value)}
                    ></textarea>
                  </div>
                  <div className="grid gap-2 border-l-4 border-blue-300">
                    <div className="grid ml-2">
                      <TextField
                        disabled={disabled}
                        type="text"
                        label="Limit Vlere"
                        size="small"
                        value={state.Limitvlere}
                        onChange={(e) =>
                          handleChange("Limitvlere", e.target.value)
                        }
                      />
                      <TextField
                        disabled={disabled}
                        type="email"
                        label="Limit Dite"
                        size="small"
                        value={state.LimitDite}
                        onChange={(e) =>
                          handleChange("LimitDite", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel
                className={toggleState === 3}
                onClick={() => toggleTab(3)}
                disabled={disabled}
                header="Grup Klasifikime"
              >
                <div className="flex  gap-2 ">
                  <div className="flex items-center">
                    <Klasifikim1 />
                    <TextField
                      disabled={disabled}
                      type="text"
                      label="Klasifikim 1"
                      size="small"
                      value={state.Kls1}
                      onChange={(e) => handleChange("Kls1", e.target.value)}
                    />
                  </div>
                  <div className="flex items-center">
                    <Klasifikim2 />
                    <TextField
                      disabled={disabled}
                      type="text"
                      label="Klasifikim 2"
                      size="small"
                      value={state.Kls2}
                      onChange={(e) => handleChange("Kls2", e.target.value)}
                    />
                  </div>
                  <div className="flex items-center">
                    <Klasifikim3 />
                    <TextField
                      disabled={disabled}
                      type="text"
                      label="Klasifikim 3"
                      size="small"
                      value={state.Kls3}
                      onChange={(e) => handleChange("Kls3", e.target.value)}
                    />
                  </div>
                  <div className="flex items-center">
                    <Klasifikim4 />
                    <TextField
                      disabled={disabled}
                      type="text"
                      label="Klasifikim 4"
                      size="small"
                      value={state.Kls4}
                      onChange={(e) => handleChange("Kls4", e.target.value)}
                    />
                  </div>
                  <div className="flex items-center">
                    <Klasifikim5 />
                    <TextField
                      disabled={disabled}
                      type="text"
                      label="Klasifikim 5"
                      size="small"
                      value={state.Kls5}
                      onChange={(e) => handleChange("Kls5", e.target.value)}
                    />
                  </div>
                </div>
              </TabPanel>
            </TabView>
          </Panel>
          <Panel className="mt-2">
            <PrimeGrid
              //  style={{height:'40rem'}}

              gridKey="Furnitor"
              isEditable={true}
              columns={columns}
              setColumns={setColumns}
              rows={rows}

              //  setRows={setRows}
              //  selectedColumns={selectedColumns}
              //  setSelectedColumns={setSelectedColumns}
              //  calculateData={calculateData}
            />
          </Panel>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Furnitor;
