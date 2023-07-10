import React, { useEffect, useState, useCallback, useRef } from "react";
import { Checkbox, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Form from "react-bootstrap/Form";
import moment from "moment";
import { Panel } from "primereact/panel";
import dummyData from "../../demo-data/dummyData.json";
import PrimeGrid from "../../components/primeReact/PrimeGrid";
import useStorage from "../../hooks/useStorage";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import ClassIcon from "@mui/icons-material/Class";
import { PrintSharp } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { ReactToPrint, useReactToPrint } from "react-to-print";
import { Ripple } from "primereact/ripple";
import ModalList from "../../components/ListaArtikujve/ModalList";
import axios from "axios";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
// import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import Klasifikim from "../fature-blerje/minimodal/Klasifikim";
import Klasifikim2 from "../fature-blerje/minimodal/Klasifikim2";
import Klasifikim3 from "../fature-blerje/minimodal/Klasifikim3";
import Klasifikim4 from "../fature-blerje/minimodal/Klasifikim4";
import MagazinaDalje from "./minimodals/MagazinaDalje";
import TransportDalje from "./minimodals/TransportuesiDalje/TransportDalje";
// import { Radio } from 'antd';
// import TotalFooter from "../../components/FaqetEprintimit/TotalFooter";
// import Footer from "../../components/Navbar/Footer";
import NavBar from "../../components/Navbar/NavBar";
import SideBar from "../../components/Navbar/SideBar";
import "./FleteDalje.scss";
import ChangeCircleRoundedIcon from "@mui/icons-material/ChangeCircleRounded";
const FleteDalje = () => {
  const [disabled, setDisabled] = useState(true);

  const defaultState = {
    NrSerial: "",
    NrOrigjine: "",
    Magazina: "",
    data: moment().format("yyyy-MM-DD"),
    Nr: "",
    veprime: "",
    Shenim1: "",
    MagazinaOrg: "",
    Shenim2: "",
    FLDID: "",
    Kls1: "",
    Kls2: "",
    Kls3: "",
    Kls4: "",
    departamenti: "",
    Transportues: "",
    NiptTransport: "",
    shenimTransport: "",
    Targa: "",
    Koha: moment().format("YYYY-MM-DD HH:mm:ss"),
    Pronesia: "",
  };
  const [state, setState] = useState(defaultState);

  const [magazina, setMagazina] = useState([]);
  const [magazinaorg, setMagazinaOrg] = useState([]);
  const [skemaveprimit, setSkemaVeprimit] = useState([]);
  const [klasifikim1, setKlasifikim1] = useState([]);
  const [klasifikim2, setKlasifikim2] = useState([]);
  const [klasifikim3, setKlasifikim3] = useState([]);
  const [klasifikim4, setKlasifikim4] = useState([]);
  const [departament, setDepartament] = useState([]);
  const [transportues, setTransportues] = useState([]);

  const [test, setTest] = useState([]);
  // console.log({test})

  const fetchFleteDalje = async () => {
    try {
      const response = await axios(
        `${process.env.REACT_APP_API_KEY}/flete/dalje/data`
      );

      setSkemaVeprimit(response?.data?.Skema_Veprimit);
      setDepartament(response?.data?.Departament);
      setTransportues(response?.data?.Transportues);
      setMagazina(response?.data?.Magazina);
      setMagazinaOrg(response.data.Magazina_Origjine);
      setKlasifikim1(response?.data?.Klasifikim1);
      setKlasifikim2(response?.data?.Klasifikim2);
      setKlasifikim3(response?.data?.Klasifikim3);
      setKlasifikim4(response?.data?.Klasifikim4);

      setTest(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFleteDalje();
  }, []);

  const aprovoFature = () => {
    const content = {
      ...state,
      items: rows,
    };

    //  if(state.magazina === ""){

    //     toast.info('Cakto Magazinen!',{
    //       draggable:true,
    //       position:toast.POSITION.BOTTOM_RIGHT,
    //       hideProgressBar:true
    //     })

    //   }else{

    axios.post(`${process.env.REACT_APP_API_KEY}/flete/dalje/data`, {
      NrSerik: state.NrSerial,
      Kodi_ORG: state.NrOrigjine,
      Magazina_Kodi: state.Magazina,
      Veprimi: state?.veprime,
      Shenim_1: state.Shenim1,
      Shenim_2: state.Shenim2,
      Data: state.data,
      Dep_Kodi: state.departamenti,
      Flete_Hyrje_Id: state.FLDID,
      Transportuesi_Pershkrim: state.Transportues,
      Transport_Shenim: state.shenimTransport,
      Transportuesi_Nipt: state.NiptTransport,
      Transport_Data: state.Koha,
      FLH_Magazina_Kodi: state.MagazinaOrg,
      Klasifikim1_ID: state.Kls1,
      Klasifikim2_ID: state.Kls2,
      Klasifikim3_ID: state.Kls3,
      Klasifikim4_ID: state.Kls4,
      Targa_e_Mjetit: state.Targa,
      Kodi: state.Nr,
      fisVehicleOwnershipType: state.Pronesia,

      Operator: "A",

      content,
    });
  };

  const [rows, setRows] = useState([]);

  const [columns, setColumns] = useState([
    { field: "Kodi", title: "Kodi" },
    { field: "BarKod", title: "BarKod" },
    { field: "Pershkrim", title: "Pershkrim" },
    { field: "Njesi_Kodi", title: "Njesi_Kodi" },
    { field: "Sasia_Print", title: "Sasia_Print" },
    { field: "Sasia", title: "Sasia" },
    { field: "Cmimi_pa_TVSH", title: "Cmimi_pa_TVSH" },
    { field: "Cmimi", title: "Cmimi" },
    { field: "Tvsh_Vlera", title: "Tvsh_Vlera" },
    { field: "Skonto_Vlera", title: "Skonto_Vlera" },
    { field: "DateGarancie", title: "DateGarancie" },
    { field: "NrSerik", title: "NrSerik" },
    { field: "CmimiShites", title: "CmimiShites" },
    { field: "CmimiPeshaKG", title: "CmimiPeshaKG" },
    { field: "Vlera_Pa_Tvsh", title: "Vlera_Pa_Tvsh" },
    { field: "SasiaPak", title: "SasiaPak" },
    { field: "DataSk", title: "DataSk" },
    { field: "CmimiShitesMarzhi", title: "CmimiShitesMarzhi" },
    { field: "Volumi", title: "Volumi" },
    { field: "Tipi", title: "Tipi" },
    { field: "TipVlere_ID", title: "TipVlere_ID" },
    { field: "TipPaketimi_Kodi", title: "TipPaketimi_Kodi" },
    { field: "LlojiMallit_ID", title: "LlojiMallit_ID" },
    { field: "Dep_Kodi", title: "Dep_Kodi" },
    { field: "Tvsh", title: "Tvsh" },
    { field: "Kodi1", title: "Kodi1" },
    { field: "Kodi2", title: "Kodi2" },
    { field: "Kodi3", title: "Kodi3" },
    { field: "Kodi4", title: "Kodi4" },
    { field: "Magazina_Kodi", title: "Magazina_Kodi" },
    { field: "Klasifikim1_ID", title: "Klasifikim1_ID" },
    { field: "Klasifikim2_ID", title: "Klasifikim2_ID" },
    { field: "Klasifikim3_ID", title: "Klasifikim3_ID" },
    { field: "Klasifikim4_ID", title: "Klasifikim4_ID" },
    { field: "Selektuar", title: "Selektuar" },
    { field: "Total", title: "Total" },
  ]);

  const [selectedColumns, setSelectedColumns] = useStorage(
    columns,
    "kolonatFletDalje"
  );

  const shtoArtikull = (artikull) => {
    if (!artikull) return;
    let currObj = rows.find((row) => row.Id === artikull?.Id);
    if (currObj) {
      setRows((rows) => {
        return rows.map((row) => {
          if (currObj.Id == row.Id) {
            return { ...row, Sasia: parseFloat(row.Sasia) + 1 };
          }
          return row;
        });
      });
      return;
    }
    setRows((rows) => {
      return [
        {
          ...artikull,
          Sasia: 1,
          Cmimi_pa_TVSH: 1,
          Tvsh: 1,
          Tvsh_Vlera: 1,
          Skonto_Vlera: 1,
          Total: 0,
        },
        ...rows,
      ];
    });
  };

  const handleChange = (key, value) => {
    setState((state) => {
      return {
        ...state,
        [key]: value,
      };
    });
  };

  const [toggleState, setToggleState] = useState(4);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const componentsRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentsRef.current,
    documentTitle: "Document i ri",
  });

  const calculateData = (item) => {
    let { Tvsh, Cmimi_pa_TVSH, Sasia, Cmimi, Tvsh_Vlera, Skonto_Vlera, Total } =
      item;
    Total = parseFloat(Tvsh * Sasia);

    // console.log({Total})

    return {
      ...item,
      Cmimi_pa_TVSH,
      Sasia,
      Cmimi,
      Tvsh_Vlera,
      Skonto_Vlera,
      Total,
    };
  };
  const template = (options) => {
    const toggleIcon = options.collapsed
      ? "pi pi-chevron-down"
      : "pi pi-chevron-up";
    const className = `${options.className} justify-content-start`;
    const titleClassName = `${options.titleClassName} pl-1`;

    return (
      <div className={className}>
        <button
          className={options.togglerClassName}
          onClick={options.onTogglerClick}
        >
          <span className={toggleIcon}></span>
          <Ripple />
        </button>
        <span className={titleClassName}>Flete Dalje</span>
      </div>
    );
  };

  return (
    <div>
      <NavBar />

      <div className="template">
        <SideBar />

        <div className=" p-1">
          <form
            className="drop-shadow-lg mr-4 mb-3"
            onSubmit={(e) => aprovoFature(e.preventDefault())}
          >
            <Panel headerTemplate={template} toggleable>
              <div className="form_panel ">
                <div className="flex gap-40">
                  <ButtonGroup size="xl" className="mb-2">
                    <Button
                      className="p-1"
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
                    <Button className="p-1" disabled={disabled}>
                      <DeleteIcon /> Fshije
                    </Button>
                    <Button
                      className="p-1"
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
                      className="p-1"
                      onClick={(e) => {
                        e.preventDefault();
                        aprovoFature();
                        setState(defaultState);
                      }}
                      disabled={disabled}
                      type="submit"
                    >
                      <AppRegistrationIcon />
                      Rregjistrim
                    </Button>
                    <div></div>
                  </ButtonGroup>

                  <ButtonGroup size="xl" className="mb-2 ">
                    <Button
                      className={
                        toggleState === 4 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(4)}
                      disabled={disabled}
                    >
                      {" "}
                      Tjera
                      <AutoAwesomeMotionIcon />
                    </Button>
                    <Button
                      className={
                        toggleState === 5 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(5)}
                      disabled={disabled}
                    >
                      {" "}
                      Trans
                      <DirectionsBusIcon />
                    </Button>
                    <Button
                      className={
                        toggleState === 6 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(6)}
                      disabled={disabled}
                    >
                      {" "}
                      Klasifikime <ClassIcon />
                    </Button>
                  </ButtonGroup>

                  {/* <PrintSharp style={{color:"#1971c2",cursor:"pointer"}} onClick={handlePrint}>Printo</PrintSharp> */}
                  <PopupState variant="popover" popupId="demo-popup-popover">
                    {(popupState) => (
                      <div>
                        <Button {...bindTrigger(popupState)}>
                          <PrintSharp />
                        </Button>
                        <Popover
                          style={{ marginTop: "15px" }}
                          {...bindPopover(popupState)}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                          }}
                        >
                          <Typography
                            style={{
                              padding: "1rem",
                              display: "grid",
                              flexDirection: "row",
                            }}
                          >
                            <Button
                              style={{
                                color: "#1971c2",
                                cursor: "pointer",
                                margin: "5px",
                              }}
                              onClick={handlePrint}
                            >
                              {" "}
                              <div style={{ fontSize: "12px" }}>
                                Printo Faturen 1
                              </div>
                              <PrintSharp style={{ blockSize: "17px" }} />{" "}
                            </Button>
                            <Button
                              style={{
                                color: "#1971c2",
                                cursor: "pointer",
                                margin: "5px",
                              }}
                            >
                              {" "}
                              <div style={{ fontSize: "12px" }}>
                                Printo Faturen 2
                              </div>
                              <PrintSharp style={{ blockSize: "17px" }} />{" "}
                            </Button>
                            <Button
                              style={{
                                color: "#1971c2",
                                cursor: "pointer",
                                margin: "5px",
                              }}
                            >
                              <div style={{ fontSize: "12px" }}>
                                Printo Faturen 3
                              </div>
                              <PrintSharp style={{ blockSize: "17px" }} />{" "}
                            </Button>
                            <Button
                              style={{
                                color: "#1971c2",
                                cursor: "pointer",
                                margin: "5px",
                              }}
                            >
                              <div style={{ fontSize: "12px" }}>
                                Printo Faturen 4
                              </div>
                              <PrintSharp style={{ blockSize: "17px" }} />{" "}
                            </Button>
                          </Typography>
                        </Popover>
                      </div>
                    )}
                  </PopupState>
                </div>
                <div className="fBlerje dtlblerje border-separate flex p-2 gap-24">
                  <div className="grid gap-2">
                    <div className="flex justify-center items-center gap-2">
                      <TextField
                        disabled={disabled}
                        type="number"
                        variant="outlined"
                        label="Nr Serial"
                        value={state?.NrSerial}
                        onChange={(e) =>
                          handleChange("NrSerial", e.target.value)
                        }
                        size="small"
                      />

                      <TextField
                        style={{ width: "10rem" }}
                        disabled={disabled}
                        type="number"
                        variant="outlined"
                        label="Nr Origjines"
                        value={state?.NrOrigjine}
                        onChange={(e) =>
                          handleChange("NrOrigjine", e.target.value)
                        }
                        size="small"
                      />
                    </div>

                    <div className="bg-gray-100 rounded-tr-lg rounded-br-lg w-full flex justify-center items-center relative">
                      <Form.Select
                        disabled={disabled}
                        value={state?.Magazina}
                        onChange={(e) => {
                          handleChange("Magazina", e.target.value);
                        }}
                      >
                        <option label="Magazina"></option>
                        {magazina.map((list) => {
                          return (
                            <option key={list.Id} value={list?.Kodi}>
                              {list.Pershkrim}
                            </option>
                          );
                        })}
                      </Form.Select>
                      <div className="  hover:scale-110 transition-all">
                        {" "}
                        <MagazinaDalje fetchMagazinaDalje={fetchFleteDalje} />
                      </div>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                      <TextField
                        disabled={disabled}
                        type="date"
                        label="Data"
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={state?.data}
                        onChange={(e) => handleChange("data", e.target.value)}
                        size="small"
                      />

                      <TextField
                        disabled={disabled}
                        type="number"
                        label="Nr"
                        variant="outlined"
                        value={state?.Nr}
                        onChange={(e) => handleChange("Nr", e.target.value)}
                        size="small"
                      />
                    </div>

                    <div className="flex">
                      <ModalList shtoArtikull={shtoArtikull} />
                    </div>
                  </div>

                  {/* /////////////////////////////////////////////////////////////// */}

                  <div style={{ marginLeft: "2.3rem" }}>
                    {/* tab1 */}

                    <div
                      className={
                        toggleState === 4
                          ? "content  active-content"
                          : "content"
                      }
                    >
                      <div className="grid gap-2 grid-cols-2 ">
                        {/* <VeprimiHyrje/> */}

                        <Form.Select
                          disabled={disabled}
                          label="Veprimi"
                          value={state?.veprime ?? ""}
                          onChange={(e) => {
                            handleChange("veprime", e.target.value);
                          }}
                        >
                          <option label="Veprim" />
                          {skemaveprimit.map((list) => {
                            return (
                              <option value={list?.Kodi}>
                                {list.Pershkrim} | {list?.Kodi}{" "}
                              </option>
                            );
                          })}
                        </Form.Select>
                        <div className="bg-gray-100 rounded-tr-lg rounded-br-lg w-full flex justify-center items-center relative">
                          <Form.Select
                            disabled={disabled}
                            type="text"
                            value={state?.MagazinaOrg}
                            onChange={(e) =>
                              handleChange("MagazinaOrg", e.target.value)
                            }
                          >
                            <option label="Magazina Origjine" />
                            {magazinaorg.map((list) => {
                              return (
                                <option key={list.Id} value={list?.Kodi}>
                                  {list.Pershkrim}
                                </option>
                              );
                            })}
                          </Form.Select>
                          <div className="  hover:scale-110 transition-all">
                            <MagazinaDalje
                              fetchMagazinaDalje={fetchFleteDalje}
                            />
                          </div>
                        </div>
                        <TextField
                          disabled={disabled}
                          type="text"
                          variant="outlined"
                          label="Shënim 1"
                          value={state?.Shenim1}
                          onChange={(e) =>
                            handleChange("Shenim1", e.target.value)
                          }
                          size="small"
                        />
                        <TextField
                          size="small"
                          disabled={disabled}
                          type="text"
                          variant="outlined"
                          label="Shënim 2"
                          value={state?.Shenim2}
                          onChange={(e) =>
                            handleChange("Shenim2", e.target.value)
                          }
                        />

                        <TextField
                          disabled={disabled}
                          type="text"
                          label="FLD ID"
                          value={state?.FLDID}
                          onChange={(e) =>
                            handleChange("FLDID", e.target.value)
                          }
                          size="small"
                        />
                        <Button variant="contained">Fletë Hyrje</Button>
                      </div>
                    </div>

                    {/* tab5 */}
                    <div
                      className={
                        toggleState === 5
                          ? "content  active-content"
                          : "content"
                      }
                    >
                      <div className="grid grid-cols-2 gap-2  ">
                        <div className="bg-gray-100 rounded-tr-lg rounded-br-lg w-full flex justify-center items-center relative">
                          <Form.Select
                            disabled={disabled}
                            label="Transportuesi"
                            value={state?.Transportues ?? ""}
                            onChange={(e) => {
                              handleChange("Transportues", e.target.value);
                            }}
                          >
                            <option label="Transportuesi" />
                            {transportues.map((veprim) => {
                              return (
                                <option value={veprim.Kodi}>
                                  {veprim.Pershkrim}
                                </option>
                              );
                            })}
                          </Form.Select>
                          <div className="hover:scale-110 transition-all">
                            <TransportDalje TransportDalje={fetchFleteDalje} />
                          </div>
                        </div>

                        <TextField
                          disabled={disabled}
                          type="text"
                          label="Nipt Tans"
                          inputProps={{ maxLength: 10 }}
                          value={state?.NiptTransport}
                          onChange={(e) =>
                            handleChange("NiptTransport", e.target.value)
                          }
                          size="small"
                        />

                        <TextField
                          disabled={disabled}
                          type="text"
                          label="Targa"
                          value={state?.Targa}
                          onChange={(e) =>
                            handleChange("Targa", e.target.value)
                          }
                          size="small"
                        />

                        <TextField
                          disabled={disabled}
                          type="datetime-local"
                          label="Koha"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          value={state?.Koha}
                          onChange={(e) => handleChange("Koha", e.target.value)}
                          size="small"
                        />
                        <textarea
                          disabled={disabled}
                          cols="38"
                          rows="3"
                          value={state?.shenimTransport}
                          onChange={(e) =>
                            handleChange("shenimTransport", e.target.value)
                          }
                          placeholder="Shënim"
                          className=" border  mt-2 p-2 rounded-md w-72"
                        ></textarea>

                        <div className="flex justify-center items-center">
                          <h4>Pronësia e Mjetit</h4>
                        </div>
                      </div>
                    </div>
                    {/* tab 6 */}

                    <div
                      className={
                        toggleState === 6
                          ? "content  active-content"
                          : "content"
                      }
                    >
                      <div className=" grid grid-cols-2 gap-2 w-96">
                        <div className="bg-gray-100 rounded-tr-lg rounded-br-lg w-full flex justify-center items-center relative">
                          <Form.Select
                            disabled={disabled}
                            value={state?.Kls1 ?? ""}
                            onChange={(e) => {
                              handleChange("Kls1", e.target.value);
                            }}
                          >
                            <option label="klasifikim1" />

                            {klasifikim1.map((kls) => {
                              return (
                                <option value={kls.ID}>{kls.Pershkrim}</option>
                              );
                            })}
                          </Form.Select>
                          <div className="hover:scale-110 transition-all">
                            {" "}
                            <Klasifikim fetchMonedhat={fetchFleteDalje} />
                          </div>
                        </div>

                        <div className="bg-gray-100 rounded-tr-lg rounded-br-lg w-full flex justify-center items-center relative">
                          <Form.Select
                            disabled={disabled}
                            value={state?.Kls2 ?? ""}
                            onChange={(e) => {
                              handleChange("Kls2", e.target.value);
                            }}
                          >
                            <option label="klasifikim2" />
                            {klasifikim2.map((kls) => {
                              return (
                                <option value={kls.ID}>{kls.Pershkrim}</option>
                              );
                            })}
                          </Form.Select>
                          <div className="hover:scale-110 transition-all">
                            {" "}
                            <Klasifikim2 fetchMonedhat={fetchFleteDalje} />
                          </div>
                        </div>
                        <div className="bg-gray-100 rounded-tr-lg rounded-br-lg w-full flex justify-center items-center relative">
                          <Form.Select
                            disabled={disabled}
                            value={state?.Kls3 ?? ""}
                            onChange={(e) => {
                              handleChange("Kls3", e.target.value);
                            }}
                          >
                            <option label="klasifikim3" />
                            {klasifikim3.map((kls) => {
                              return (
                                <option value={kls.ID}>{kls.Pershkrim}</option>
                              );
                            })}
                          </Form.Select>
                          <div className="hover:scale-110 transition-all">
                            <Klasifikim3 fetchMonedhat={fetchFleteDalje} />
                          </div>
                        </div>
                        <div className="bg-gray-100 rounded-tr-lg rounded-br-lg w-full flex justify-center items-center relative">
                          <Form.Select
                            disabled={disabled}
                            value={state?.Kls4 ?? ""}
                            onChange={(e) => {
                              handleChange("Kls4", e.target.value);
                            }}
                          >
                            <option label="klasifikim4" />
                            {klasifikim4.map((kls) => {
                              return (
                                <option value={kls.ID}>{kls.Pershkrim}</option>
                              );
                            })}
                          </Form.Select>
                          <div className="hover:scale-110 transition-all">
                            <Klasifikim4 fetchMonedhat={fetchFleteDalje} />
                          </div>
                        </div>

                        <Form.Select
                          disabled={disabled}
                          value={state?.departamenti ?? ""}
                          onChange={(e) => {
                            handleChange("departamenti", e.target.value);
                          }}
                        >
                          <option label="Depratamenti" />
                          {departament.map((list) => {
                            return (
                              <option key={list.ID} value={list.Kodi}>
                                {list.Pershkrim}
                              </option>
                            );
                          })}
                        </Form.Select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Panel>
          </form>

          <PrimeGrid
            gridKey="FatureBlerje"
            isEditable={true}
            columns={columns}
            setColumns={setColumns}
            rows={rows}
            setRows={setRows}
            selectedColumns={selectedColumns}
            setSelectedColumns={setSelectedColumns}
            calculateData={calculateData}
          />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default FleteDalje;
