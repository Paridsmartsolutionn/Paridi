import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  memo,
  useMemo,
} from "react";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import moment from "moment";
import axios from "axios";
import Form from "react-bootstrap/Form";
import ModalList from "../components/ListaArtikujve/ModalList";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import ClassIcon from "@mui/icons-material/Class";
import LaunchIcon from "@mui/icons-material/Launch";
import Furnitore from "../components/miniModals/Furnitore";
import Pergjegjes from "../components/miniModals/Pergjegjes";
import Magazina from "../components/miniModals/Magazina";
import Departamenti from "../components/miniModals/Departamenti";
import Transportues from "../components/miniModals/Transportues";
import Klasifikim from "../components/miniModals/Klasifikim";
import Klasifikim2 from "../components/miniModals/Klasifikim2";
import Klasifikim3 from "../components/miniModals/Klasifikim3";
import Klasifikim4 from "../components/miniModals/Klasifikim4";
import Veprime from "../components/miniModals/Veprime";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Q from "../components/miniModals/Q";
import PrimeGrid from "../components/primeReact/PrimeGrid";
import useStorage from "../hooks/useStorage";
import { Panel } from "primereact/panel";
import { Ripple } from "primereact/ripple";
import PrintoPdf from "../components/ReactPDF/PrintoPdf";
import Monedhat from "../components/miniModals/Monedhat";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Draggable from "react-draggable";
import mainAxios, { setAuthToken } from "../services/axios";
import Footer from "../components/Navbar/Footer";
import NavBar from "../components/Navbar/NavBar";
import SideBar from "../components/Navbar/SideBar";
import { setCookie } from "../services/helpers";
const FatureBlerje = ({ hidePupUp, setHidePupUp }) => {
  const [disabled, setDisabled] = useState(true);

  const [rows, setRows] = useState([]);

  const [columns, setColumns] = useState([
    { field: "Kodi", title: "Kodi" },
    { field: "BarKod", title: "BarKod" },
    { field: "Pershkrim", title: "Pershkrim" },
    { field: "Njesi_Kodi", title: "Njesi_Kodi" },
    { field: "Sasia_Print", title: "Sasia_Print" },
    { field: "Sasia", title: "Sasia", allowSum: true },
    { field: "Cmimi_pa_TVSH", title: "Cmimi_pa_TVSH" },
    { field: "Cmimi", title: "Cmimi", allowSum: true },
    { field: "Tvsh_Vlera", title: "Tvsh_Vlera", allowSum: true },
    { field: "Skonto_Vlera", title: "Skonto_Vlera", allowSum: true },
    { field: "DateGarancie", title: "DateGarancie" },
    { field: "NrSerik", title: "NrSerik", filter: "agMultiColumnFilter" },
    { field: "CmimiShites", title: "CmimiShites" },
    { field: "CmimiPeshaKG", title: "CmimiPeshaKG" },
    { field: "Vlera_Pa_Tvsh", title: "Vlera_Pa_Tvsh", allowSum: true },
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
    { field: "Total", title: "Total", allowSum: true },
  ]);

  const [selectedColumns, setSelectedColumns] = useStorage(
    columns,
    "kolonatFatureBlerje"
  );
  let columnData = columns.map((list) => {
    return {
      field: list.field,
      title: list.title.split("_").join(" "),
    };
  });

  const [furnitor, setFurnitoret] = useState([]);
  const [qytetet, setQytetet] = useState([]);
  const [shtetet, setShtetet] = useState([]);
  const [departamenti, setDepartament] = useState([]);
  const [veprime, setVeprim] = useState([]);
  const [magazina, setMagazina] = useState([]);
  const [profesioni, setProfesioni] = useState([]);
  const [pozicioni, setPozicioni] = useState([]);
  const [kategoriSigurimesh, setKategoriSigurimesh] = useState([]);
  const [pergjegjes, setPergjegjes] = useState([]);
  const [arkeBanke, setArkBank] = useState([]);
  const [menyraPageses, setMenyra] = useState([]);
  const [llogari, setLlogari] = useState([]);
  const [skemaVeprimit, setSkemaVeprimit] = useState([]);
  const [monedhat, setMonedhat] = useState([]);
  const [klasifikim1, setKlasifikim1] = useState([]);
  const [klasifikim2, setKlasifikim2] = useState([]);
  const [klasifikim3, setKlasifikim3] = useState([]);
  const [klasifikim4, setKlasifikim4] = useState([]);
  const [transportuesi, setTransportuesi] = useState([]);
  const [konfigurim, setKonfigurim] = useState([]);
  const [testi, setTesti] = useState([]);

  const showData = (item) => {
    testi.map((list) => {
      const { Mon, Id, Data, Kursi, Kodi } = list;
      let newList = [Mon, Id, Data, Kursi, Kodi];
    });
    showData();
  };

  const adresa1 = konfigurim[0]?.Adresa1;
  const nipt1 = konfigurim[0]?.Nipt;

  const fetchPost = async () => {
    try {
      const response = await mainAxios(`/fature/blerje`);
      setTesti(response?.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);

  const defaultState = {
    data: moment().format("yyyy-MM-DD"),
    MagazinaData: moment().format("yyyy-MM-DD"),
    AfatiData: moment().format("yyyy-MM-DD"),
    Deklarimit: moment().format("yyyy-MM-DD"),
    furnitorType: "",
    furnitorId: "",
    Kodi: "",
    shenim: "",
    Kursi: "",
    Monedha: "",
    magazina: "",
    Menyra: "",
    Nipt: "",
    llojiMonedhes: "",
    Qytetet: "",
    NrOrigjine: "",
    Nr: "",
    NrSerial: "",
    Paguar: "",
    Afati: "",
    Pergjegjes: "",
    arkBank: "",
    Departamenti: "",
    Transport: "",
    Targa: "",
    Kls1: "",
    kls2: "",
    Kls3: "",
    Kls4: "",
    veprime: "",
    NiptTransport: "",
    Import: "",
  };

  const [state, setState] = useState(defaultState);

  const handleChange = (key, value) => {
    setState((state) => {
      return {
        ...state,
        [key]: value,
      };
    });
  };

  const aprovoFature = () => {
    const content = {
      ...state,
      items: rows,
    };

    if (state.furnitorType === "") {
      toast.info("Cakto Furnitorin!", {
        draggable: true,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else if (state.magazina === "") {
      toast.info("Cakto Magazinen!", {
        draggable: true,
        position: toast.POSITION.BOTTOM_RIGHT,
        hideProgressBar: true,
      });
    } else {
      axios.post(`${process.env.REACT_APP_API_KEY}/fatura/blerje`, {
        Shenim: state.shenim,
        NrSerik: state.NrSerial,
        Qyteti_Kodi: state.Qytetet,
        Veprimi: state.veprime,
        KLFU_Kodi: state.furnitorId,
        Operator: "A",
        Punonjes_ID: state.Pergjegjes,
        Data: state.data,
        Kursi: state.Kursi,
        Mon: state.Monedha,
        KLFU_Pershkrim: state.furnitorType,
        Targa_e_Mjetit: state.Targa,
        Transportuesi_Id: state.Transport,
        Menyra_Pageses_Id: state.Menyra,
        NIPT: state.Nipt,
        Transportuesi_Nipt: state.NiptTransport,
        Kodi: state.Kodi,
        Afati_PagesesDite: state.Afati,
        Arka_Banka_Kodi: state.arkBank,
        Kodi_ORG: state.NrOrigjine,
        Dep_Kodi: state.Departamenti,
        Afati_PagesesData: state.AfatiData,
        Klasifikim1_ID: state.Kls1,
        Klasifikim2_ID: state.kls2,
        Klasifikim3_ID: state.Kls3,
        Klasifikim4_ID: state.Kls4,
        Data_deklarimit: state.Deklarimit,
        Magazina_Kodi: state.magazina,
        Paguar: state.Paguar,
        Import: state.Import,
        Flete_Hyrje_ID: null,
        Flete_Hyrje_KODI: null,
        Flete_Hyrje_DATA: null,
        Aktiv: null,
        // Nr:state.Nr
        // MagazinaData:state.MagazinaData
        content,
      });
    }
  };

  const calculateData = (item) => {
    let { Tvsh, Cmimi_pa_TVSH, Sasia, Cmimi, Tvsh_Vlera, Skonto_Vlera, Total } =
      item;
    Total = parseFloat(Tvsh * Sasia);
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
  const shtoArtikull = (artikull) => {
    if (!artikull) return;
    let currObj = rows.find((row) => row.Id === artikull?.Id);
    if (currObj) {
      return;
    }
    setRows((rows) => {
      return [
        {
          ...artikull,
          Sasia: 0,
          Cmimi_pa_TVSH: 0,
          Tvsh: 0,
          Tvsh_Vlera: 0,
          Skonto_Vlera: 0,
          Vlera_Pa_Tvsh: 0,
          Total: 0,
        },
        ...rows,
      ];
    });
  };

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  //plotso fushat perkatse te furnitorType
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
  const handleKursiType = (e) => {
    const value = e.target.value;
    const kursi = monedhat.find((item) => item.Kodi === value).Kursi;
    // const qytet = qytetet.find(item=>item.Pershkrim===value).Qytetet

    setState((state) => {
      return {
        ...state,
        Monedha: value,
        Kursi: kursi,
      };
    });
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
        <span className={titleClassName}>Fature Blerje</span>
      </div>
    );
  };

  const popUpConfirm = (
    <Draggable>
      <div
        style={{ left: 570, top: 200 }}
        className="bg-white border-b-8 absolute rounded-sm border h-40 w-80 pup_up p-2 items-center z-50 drop-shadow-lg pupup cursor-pointer"
      >
        <div className="flex flex-col items-center">
          <ErrorOutlineIcon
            className="animate-bounce mt-3"
            style={{ color: "#1971c2" }}
          />
          <div>
            <h2
              className="text-center font-semibold cursor-context-menu p-2"
              style={{ color: "#1971c2", fontSize: "18px" }}
            >
              Anullo ndryshimet ne dokument!
            </h2>
          </div>

          <div className="flex justify-center gap-4 mt-2 p-2 drop-shadow-sm">
            <Button
              onClick={() => {
                setHidePupUp(false);
                setState(defaultState);
                setDisabled(true);
              }}
              variant="outlined"
            >
              Po
            </Button>
            <Button
              onClick={() => {
                setHidePupUp(false);
              }}
              variant="outlined"
            >
              Jo
            </Button>
          </div>
        </div>
      </div>
    </Draggable>
  );

  const anulloFatureBlerje = () => {
    let excludeData = ["AfatiData", "Deklarimit", "MagazinaData", "data"];
    let hasValue = Object.keys(state)?.find(
      (key) => !excludeData.includes(key) && state[key] != ""
    );
    if (hasValue) setHidePupUp(true);
  };

  return (
    <div>
      <NavBar />

      <div className="flex">
        <div>
          <SideBar />
        </div>

        <div className="p-1 main-container ">
          {hidePupUp && popUpConfirm}

          <Panel headerTemplate={template} toggleable className="">
            <div className="form_panel bg-white">
              <div className="flex gap-40 border-b p-1">
                <ButtonGroup size="xl" className="mb-2 shadow-sm">
                  <Button
                    className="p-1"
                    onClick={(e) => {
                      e.preventDefault();
                      setDisabled(false);
                    }}
                  >
                    <PostAddIcon /> Shtim
                  </Button>
                  <Button className="p-1" disabled={disabled}>
                    <DeleteIcon /> Fshije
                  </Button>
                  <Button
                    className="p-1"
                    onClick={(e) => {
                      e.preventDefault();
                      anulloFatureBlerje();
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
                </ButtonGroup>

                <ButtonGroup size="xl" className="mb-2 shadow-sm">
                  <Button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                    disabled={disabled}
                  >
                    Furnitor
                    <PeopleIcon />
                  </Button>
                  <Button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                    disabled={disabled}
                  >
                    Paguar
                    <AttachMoneyIcon />
                  </Button>
                  <Button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                    disabled={disabled}
                  >
                    Magazina
                    <WarehouseIcon fontSize="medium" />
                  </Button>
                  <Button
                    className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(4)}
                    disabled={disabled}
                  >
                    Tjera
                    <AutoAwesomeMotionIcon />
                  </Button>
                  <Button
                    className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(5)}
                    disabled={disabled}
                  >
                    Kls
                    <ClassIcon />
                  </Button>
                </ButtonGroup>

                <PrintoPdf
                  className="print"
                  state={state}
                  rows={rows}
                  adresa1={adresa1}
                  nipt1={nipt1}
                />
              </div>

              <div className="fBlerje dtlblerje border-separate flex p-4 gap-24 border-t">
                <div className="grid gap-2">
                  <div className="flex justify-center items-center gap-2">
                    <TextField
                      fullWidth
                      disabled={disabled}
                      type="date"
                      label="Date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                      value={state?.data}
                      onChange={(e) => handleChange("data", e.target.value)}
                      size="small"
                    />

                    <TextField
                      fullWidth
                      disabled={disabled}
                      value={state?.NrOrigjine}
                      type="number"
                      variant="outlined"
                      label="Nr Origjines"
                      onChange={(e) =>
                        handleChange("NrOrigjine", e.target.value)
                      }
                      size="small"
                    />
                  </div>

                  <div className="flex gap-2">
                    <div className="flex flex-col gap-2 ">
                      <TextField
                        disabled={disabled}
                        type="number"
                        label="Kursi"
                        value={state?.Kursi}
                        onChange={(e) => handleChange("Kursi", e.target.value)}
                        variant="outlined"
                        size="small"
                        className="relative"
                      />

                      <div className="flex justify-center items-center relative">
                        {/* ////// MIniModal /////// */}
                        <div
                          className="absolute  hover:scale-110 transition-all"
                          style={{ left: 173, top: 5 }}
                        >
                          <Monedhat fetchMonedhat={fetchPost} />
                        </div>
                        {/* ///////////// */}
                        <Form.Select
                          disabled={disabled}
                          value={state?.Monedha}
                          onChange={(e) => {
                            handleKursiType(e);
                          }}
                        >
                          <option label="Monedha"></option>
                          {monedhat.map((monedha) => {
                            return (
                              <option value={monedha.Kodi}>
                                {monedha.Pershkrim}
                              </option>
                            );
                          })}
                        </Form.Select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <TextField
                        disabled={disabled}
                        value={state?.Nr}
                        type="number"
                        label="Nr"
                        variant="outlined"
                        onChange={(e) => handleChange("Nr", e.target.value)}
                        size="small"
                      />

                      <TextField
                        disabled={disabled}
                        value={state?.NrSerial}
                        Konfigurim
                        type="number"
                        label="Serial numer"
                        onChange={(e) =>
                          handleChange("NrSerial", e.target.value)
                        }
                        variant="outlined"
                        size="small"
                      />
                    </div>
                  </div>

                  <div className="flex">
                    <ModalList
                      disabled={disabled}
                      shtoArtikull={!disabled && shtoArtikull}
                    />
                  </div>
                </div>
                {/* /////////////////////////////////////////////////////////////// */}
                {/* /////////////////////////////////////////////////////////////// */}
                <div>
                  {/* tab1 */}
                  <div
                    className={
                      toggleState === 1 ? "content  active-content" : "content"
                    }
                  >
                    <div className="flex gap-4 ">
                      <div className="flex flex-col">
                        <TextField
                          disabled={disabled}
                          value={state?.furnitorId}
                          onChange={(e) =>
                            handleChange("furnitorId", e.target.value)
                          }
                          label="FurnitorId"
                          variant="outlined"
                          size="small"
                        />

                        <div className="flex justify-center items-center relative">
                          {/* //////MiniModal */}
                          <div
                            className="absolute  hover:scale-110 transition-all"
                            style={{ left: 173, top: 10 }}
                          >
                            <Furnitore fetchMonedhat={fetchPost} />
                          </div>
                          {/* //////// */}
                          <Form.Select
                            required
                            className="mt-1.5"
                            size="sm"
                            value={state?.furnitorType ?? ""}
                            disabled={disabled}
                            onChange={(e) => handleFurnitorType(e)}
                          >
                            <option label="Furnitor"></option>
                            {furnitor.map((furnitor) => {
                              return (
                                <option key={furnitor.ID} value={furnitor.Kodi}>
                                  {furnitor.Pershkrim}
                                </option>
                              );
                            })}
                          </Form.Select>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <TextField
                          disabled={disabled}
                          type="text"
                          value={state?.Nipt}
                          onChange={(e) => handleChange("Nipt", e.target.value)}
                          label="Nipt"
                          variant="outlined"
                          size="small"
                        />

                        <div className="flex justify-start items-center relative">
                          {/* //////// MIniModal */}
                          <div
                            className="absolute  hover:scale-110 transition-all"
                            style={{ left: 250, top: 7 }}
                          >
                            <Q fetchMonedhat={fetchPost} qytetet={qytetet} />
                          </div>
                          {/* ////////////////// */}
                          <Form.Select
                            disabled={disabled}
                            className="mt-1.5 "
                            label="Qytetet"
                            value={state?.Qytetet ?? ""}
                            size="sm"
                            onChange={(e) => {
                              handleChange("Qytetet", e.target.value);
                            }}
                          >
                            <option label="Qytetet" />
                            {qytetet.map((qytetet, index) => {
                              return (
                                <option key={index} value={qytetet.Kodi}>
                                  {qytetet.Pershkrim}
                                </option>
                              );
                            })}
                          </Form.Select>
                        </div>

                        <textarea
                          // fullWidth
                          disabled={disabled}
                          cols="38"
                          rows="3"
                          value={state?.shenim}
                          onChange={(e) =>
                            handleChange("shenim", e.target.value)
                          }
                          placeholder="Shenim"
                          className="shenim resize-none mt-2 rounded-md"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* ///////////////// */}

                  {/* tab2 */}
                  <div
                    className={
                      toggleState === 2 ? "content  active-content" : "content"
                    }
                  >
                    <div style={{ marginTop: "-1rem" }}>
                      <Form.Select
                        size="sm"
                        disabled={disabled}
                        label="Menyra"
                        value={state?.Menyra ?? ""}
                        onChange={(e) => {
                          handleChange("Menyra", e.target.value);
                        }}
                      >
                        <option label="Menyra" />
                        {menyraPageses.map((menyra) => {
                          return (
                            <option key={menyra.Id} value={menyra.Id}>
                              {menyra.Pershkrim}
                            </option>
                          );
                        })}
                      </Form.Select>

                      <Form.Select
                        size="sm"
                        className="mt-2"
                        disabled={disabled}
                        value={state?.arkBank ?? ""}
                        onChange={(e) => {
                          handleChange("arkBank", e.target.value);
                        }}
                      >
                        <option label="Arke/Banke" />
                        {arkeBanke.map((arkBnk) => {
                          return (
                            <option key={arkBnk.Id} value={arkBnk.Kodi}>
                              {arkBnk.Pershkrim}
                            </option>
                          );
                        })}
                      </Form.Select>
                      <div>
                        <TextField
                          className="mt-2"
                          label="Paguar"
                          disabled={disabled}
                          type="number"
                          size="small"
                          variant="outlined"
                          value={state?.Paguar}
                          onChange={(e) =>
                            handleChange("Paguar", e.target.value)
                          }
                        />
                        <TextField
                          style={{ marginLeft: "0.5rem" }}
                          className="mt-2"
                          disabled={disabled}
                          type="date"
                          label="Afati"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          value={state?.AfatiData}
                          onChange={(e) =>
                            handleChange("AfatiData", e.target.value)
                          }
                          size="small"
                        />
                      </div>

                      <div className="flex justify-end ">
                        <span className="flex mr-2 ml-2 justify-center items-center">
                          {" "}
                          Ose per{" "}
                        </span>

                        <TextField
                          className="mt-2"
                          disabled={disabled}
                          style={{ width: "5rem" }}
                          type="number"
                          size="small"
                          value={state?.Afati}
                          onChange={(e) =>
                            handleChange("Afati", e.target.value)
                          }
                        />
                        <span className="flex ml-4 justify-center items-center">
                          {" "}
                          Dite
                        </span>
                      </div>
                      <div className="flex justify-center items-center relative">
                        {/* ////// MiniModal */}
                        <div
                          className="absolute  hover:scale-110 transition-all"
                          style={{ left: 340, top: 9 }}
                        >
                          <Pergjegjes fetchMonedhat={fetchPost} />
                        </div>
                        {/* //////////// */}
                        <Form.Select
                          size="sm"
                          className="mt-2"
                          disabled={disabled}
                          value={state?.Pergjegjes ?? ""}
                          onChange={(e) => {
                            handleChange("Pergjegjes", e.target.value);
                          }}
                        >
                          <option label="Pergjegjes" />
                          {pergjegjes.map((pergjegjes) => {
                            return (
                              <option key={pergjegjes.Id} value={pergjegjes.Id}>
                                {" "}
                                {pergjegjes.Emer} {pergjegjes.Mbiemer}
                              </option>
                            );
                          })}
                        </Form.Select>
                      </div>
                    </div>
                  </div>
                  {/* ////////////////////////////////////////////////// */}

                  {/* tab3 */}
                  <div
                    className={
                      toggleState === 3 ? "content  active-content" : "content"
                    }
                  >
                    <Button className="shadow-sm" variant="outlined" size="sm">
                      <LaunchIcon />
                      Flete Hyrje
                    </Button>
                    <div className="flex flex-col justify-center items-center relative">
                      {/* ///////// MiniModal */}
                      <div
                        className="absolute  hover:scale-110 transition-all"
                        style={{ left: 115, top: 12 }}
                      >
                        <Magazina fetchMonedhat={fetchPost} />
                      </div>
                      {/* //////////// */}
                      <Form.Select
                        size="md"
                        className="mt-2"
                        disabled={disabled}
                        value={state?.magazina ?? ""}
                        onChange={(e) => {
                          handleChange("magazina", e.target.value);
                        }}
                      >
                        <option label="Magazina" />
                        {magazina.map((magazina) => {
                          return (
                            <option key={magazina.Id} value={magazina.Kodi}>
                              {magazina.Pershkrim}
                            </option>
                          );
                        })}
                      </Form.Select>

                      <div>
                        <TextField
                          className="mt-2  "
                          disabled={disabled}
                          type="date"
                          label="Date"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          value={state?.MagazinaData}
                          onChange={(e) =>
                            handleChange("MagazinaData", e.target.value)
                          }
                          size="small"
                        />
                      </div>
                    </div>
                  </div>

                  {/* tab4 */}

                  <div
                    className={
                      toggleState === 4 ? "content  active-content" : "content"
                    }
                  >
                    <div className="flex flex-col justify-start">
                      <div className="flex  gap-2 items-center relative">
                        {/* ////// MiniModal */}
                        <div
                          className="absolute  hover:scale-110 transition-all"
                          style={{ left: 187, top: 5 }}
                        >
                          <Veprime />
                        </div>
                        {/* ///////// */}

                        <Form.Select
                          size="sm "
                          disabled={disabled}
                          label="Veprimi"
                          value={state?.veprime ?? ""}
                          onChange={(e) => {
                            handleChange("veprime", e.target.value);
                          }}
                        >
                          <option label="Veprim" />
                          {veprime.map((veprim) => {
                            return (
                              <option value={veprim.Kodi}>
                                {veprim.Pershkrim} | {veprim.Kodi}
                              </option>
                            );
                          })}
                        </Form.Select>

                        <div className="flex items-center ">
                          <TextField
                            disabled={disabled}
                            type="date"
                            value={state?.Deklarimit}
                            label="Data e deklarimit"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            onChange={(e) =>
                              handleChange("Deklarimit", e.target.value)
                            }
                            size="small"
                          />
                        </div>
                      </div>

                      <div className="flex  mt-1.5 gap-x-12 items-center relative">
                        {/* ////// MiniModal */}
                        <div
                          className="absolute  hover:scale-110 transition-all"
                          style={{ left: 187, top: 5 }}
                        >
                          <Departamenti fetchMonedhat={fetchPost} />
                        </div>
                        {/* /////////// */}
                        <Form.Select
                          size="sm"
                          style={{ width: "16.9em" }}
                          disabled={disabled}
                          value={state?.Departamenti ?? ""}
                          onChange={(e) => {
                            handleChange("Departamenti", e.target.value);
                          }}
                        >
                          <option label="Departamenti"></option>
                          {departamenti.map((depart) => {
                            return (
                              <option key={depart.Kodi}>
                                {depart.Pershkrim}
                              </option>
                            );
                          })}
                        </Form.Select>
                        <div>
                          <FormControlLabel
                            control={
                              <Checkbox
                                disabled={disabled}
                                type="checkbox"
                                size="small"
                                value={state?.Import}
                                onChange={(e) =>
                                  handleChange("Import", e.target.checked)
                                }
                              />
                            }
                            label="Import"
                          />
                        </div>
                      </div>

                      <div className="flex  mt-1.5  gap-4 items-center relative">
                        {/* ////// MiniModal */}
                        <div
                          className="absolute  hover:scale-110 transition-all"
                          style={{ left: 187, top: 5 }}
                        >
                          <Transportues fetchMonedhat={fetchPost} />
                        </div>
                        {/* //////// */}
                        <Form.Select
                          size="sm"
                          style={{ width: "17em" }}
                          disabled={disabled}
                          value={state?.Transport ?? ""}
                          onChange={(e) => {
                            handleChange("Transport", e.target.value);
                          }}
                        >
                          <option label="Transportuesi" />
                          {transportuesi?.map((transport) => {
                            return (
                              <option value={transport.Id}>
                                {transport.Pershkrim}
                              </option>
                            );
                          })}
                        </Form.Select>
                        <Button variant="contained">Shperndaje</Button>
                      </div>
                      <div className="mt-1.5 flex ">
                        <TextField
                          style={{ width: "15rem", marginRight: "7px" }}
                          disabled={disabled}
                          type="text"
                          label="Nipt Transportuesi"
                          value={state?.NiptTransport}
                          onChange={(e) =>
                            handleChange("NiptTransport", e.target.value)
                          }
                          size="small"
                        />

                        <TextField
                          style={{ width: "10rem" }}
                          disabled={disabled}
                          type="text"
                          label="Targa"
                          value={state?.Targa}
                          onChange={(e) =>
                            handleChange("Targa", e.target.value)
                          }
                          size="small"
                        />
                      </div>
                    </div>
                  </div>
                  {/* tab5 */}

                  <div
                    className={
                      toggleState === 5 ? "content  active-content" : "content"
                    }
                  >
                    <div className="flex justify-center items-center relative">
                      {/* /////// MiniModal */}
                      <div
                        className="absolute  hover:scale-110 transition-all"
                        style={{ left: 267, top: 8 }}
                      >
                        <Klasifikim fetchMonedhat={fetchPost} />
                      </div>
                      {/* //////// */}
                      <Form.Select
                        size="sm"
                        className="mt-2 w-80"
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
                    </div>

                    <div className="flex justify-center items-center relative">
                      {/* /////// MiniModal */}
                      <div
                        className="absolute  hover:scale-110 transition-all"
                        style={{ left: 267, top: 8 }}
                      >
                        <Klasifikim2 fetchMonedhat={fetchPost} />
                      </div>
                      {/* //////////// */}
                      <Form.Select
                        size="sm"
                        className="mt-2"
                        disabled={disabled}
                        value={state?.kls2 ?? ""}
                        onChange={(e) => {
                          handleChange("kls2", e.target.value);
                        }}
                      >
                        <option label="klasifikim2" />
                        {klasifikim2.map((kls) => {
                          return (
                            <option value={kls.ID}>{kls.Pershkrim}</option>
                          );
                        })}
                      </Form.Select>
                    </div>
                    <div className="flex justify-center items-center relative">
                      {/* ////// MiniModal */}
                      <div
                        className="absolute  hover:scale-110 transition-all"
                        style={{ left: 267, top: 8 }}
                      >
                        <Klasifikim3 fetchMonedhat={fetchPost} />
                      </div>
                      {/* //////////// */}
                      <Form.Select
                        size="sm"
                        className="mt-2"
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
                    </div>
                    <div className="flex justify-center items-center relative">
                      {/* /////// MiniModal */}
                      <div
                        className="absolute  hover:scale-110 transition-all"
                        style={{ left: 267, top: 8 }}
                      >
                        <Klasifikim4 fetchMonedhat={fetchPost} />
                      </div>
                      {/* /////////// */}
                      <Form.Select
                        size="sm"
                        className="mt-2"
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Panel>

          <ToastContainer />
          <div className="mt-3">
            <PrimeGrid
              // items={items}
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
      </div>

      <Footer />
    </div>
  );
};

export default memo(FatureBlerje);
