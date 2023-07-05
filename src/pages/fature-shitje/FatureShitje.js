import React, { useEffect, useState, useCallback, useRef, memo } from "react";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import moment from "moment";
import Form from "react-bootstrap/Form";
import dummyData from "../../demo-data/dummyData.json";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import ClassIcon from "@mui/icons-material/Class";
import PeopleIcon from "@mui/icons-material/People";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import axios from "axios";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import KodKlienti from "./minimodal/KodKlient-minimod/KodKlienti";
import Magazina from "./minimodal/Magazina/Magazina";
import Departamenti from "./minimodal/Tetjera/Departamenti";
import TransportShitje from "./minimodal/Transportuesi/TransportShitje";
import Klasifikim from "../fature-blerje/minimodal/Klasifikim";
import Klasifikim2 from "../fature-blerje/minimodal/Klasifikim2";
import Klasifikim3 from "../fature-blerje/minimodal/Klasifikim3";
import Klasifikim4 from "../fature-blerje/minimodal/Klasifikim4";
import Q from "../fature-blerje/minimodal/Q";
import Pergjegjesi from "./minimodal/Paguar/Pergjegjesi";
import VeprimeSh from "./minimodal/Tetjera/VeprimeSh";
import PrimeGrid from "../../components/primeReact/PrimeGrid";
import useStorage from "../../hooks/useStorage";
import { Panel } from "primereact/panel";
import { Ripple } from "primereact/ripple";
import ModalList from "../../components/ListaArtikujve/ModalList";
import { PrintSharp } from "@mui/icons-material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { ReactToPrint, useReactToPrint } from "react-to-print";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import PrintoPdf1 from "../../components/ReactPDF/PrintoPdf1";
import Monedhat from "../fature-blerje/minimodal/Monedhat";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import { AutoComplete } from "primereact/autocomplete";
import TotalFooter from "../../components/FaqetEprintimit/TotalFooter";
import Footer from "../../components/Navbar/Footer";
import NavBar from "../../components/Navbar/NavBar";
import SideBar from "../../components/Navbar/SideBar";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Draggable from "react-draggable";
import "./FatureShitje.scss";
import mainAxios from "../../services/axios";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

const FatureShitje = ({ hidePupUp, setHidePupUp }) => {
  const [disabled, setDisabled] = useState(true);

  const [rows, setRows] = useState([]);

  const [klient, setKlient] = useState([]);

  const [countries, setCountries] = useState([]);
  const [selectedCountry2, setSelectedCountry2] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(null);

  const [filteredItems, setFilteredItems] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filteredCities, setFilteredCities] = useState(null);

  console.log({ countries });

  const [qytetet, setQytetet] = useState([]);
  const [shtetet, setShtetet] = useState([]);
  const [magazina, setMagazina] = useState([]);
  const [profesioni, setProfesioni] = useState([]);
  const [pozicioni, setPozicioni] = useState([]);
  const [kategoriSigurimesh, setKategoriSigurimesh] = useState([]);
  const [pergjegjes, setPergjegjes] = useState([]);
  const [arkeBanke, setArkBank] = useState([]);
  const [menyraPageses, setMenyra] = useState([]);
  const [llogari, setLlogari] = useState([]);
  const [veprime, setVeprim] = useState([]);
  const [skemaVeprimit, setSkemaVeprimit] = useState([]);
  const [monedhat, setMonedhat] = useState([]);
  const [klasifikim1, setKlasifikim1] = useState([]);
  const [klasifikim2, setKlasifikim2] = useState([]);
  const [klasifikim3, setKlasifikim3] = useState([]);
  const [klasifikim4, setKlasifikim4] = useState([]);
  const [transportuesi, setTransportuesi] = useState([]);
  const [departamenti, setDepartament] = useState([]);

  const [test, setTest] = useState([]);
  console.log({ test });

  const fetchFShitje = async () => {
    try {
      const response = await mainAxios(`/fature/shitje`);
      console.log(response, "RESPONSE");
      setKlient(response?.data.Klient);
      setQytetet(response?.data.Qytetet);
      setShtetet(response?.data.Shtetet);
      setMagazina(response?.data.Magazina);
      setProfesioni(response?.data.Profesioni);
      setPozicioni(response?.data.Pozicioni);
      setKategoriSigurimesh(response?.data.KategoriSigurimesh);
      setPergjegjes(response?.data.Pergjegjes);
      setArkBank(response?.data.ArkaBanka);
      setMenyra(response?.data.Menyra);
      setLlogari(response?.data.Llogari);
      setVeprim(response?.data.Veprim);
      setSkemaVeprimit(response?.data.Skema_Veprimit);
      setKlasifikim1(response?.data.Klasifikim1);
      setKlasifikim2(response?.data.Klasifikim2);
      setKlasifikim3(response?.data.Klasifikim3);
      setKlasifikim4(response?.data.Klasifikim4);
      setTransportuesi(response?.data.Transportues);
      setDepartament(response?.data.Departament);
      setCountries(response?.data.Klient);
      setTest(response?.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchFShitje();
  }, []);

  const fetchmonedha = async () => {
    try {
      const response = await axios(
        `${process.env.REACT_APP_API_KEY}/fatura/blerje/data`
      );
      setMonedhat(response?.data.Monedhat);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchmonedha();
  }, []);

  const [konfigurim, setKonfigurim] = useState([]);

  console.log({ konfigurim });

  const Konfigurimi = async () => {
    try {
      const response = await axios(
        `${process.env.REACT_APP_API_KEY}/konfigurim/`
      );

      setKonfigurim(response?.data?.Konfigurim);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    Konfigurimi();
  }, []);

  const [columns, setColumns] = useState([
    { field: "Kodi", title: "Kodi" },
    { field: "BarKod", title: "BarKod" },
    { field: "Pershkrim", title: "Pershkrim" },
    { field: "Njesi_Kodi", title: "Njesi_Kodi" },
    { field: "Sasia_Print", title: "Sasia_Print" },
    { field: "Sasia", title: "Sasia" },
    { field: "Cmimi_pa_TVSH", title: "Cmimi_pa_TVSH" },
    { field: "Cmimi", title: "Cmimi", allowSum: true },
    { field: "Tvsh_Vlera", title: "Tvsh_Vlera" },
    { field: "Skonto_Vlera", title: "Skonto_Vlera" },
    { field: "DateGarancie", title: "DateGarancie" },
    { field: "NrSerik", title: "NrSerik", filter: "agMultiColumnFilter" },
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
    { field: "Total", title: "Total", allowSum: true },
  ]);

  let defaultColumnsStorage = [
    "Kodi",
    "Pershkrim",
    "Barkod",
    "Cmimi",
    "Njesi_Kodi",
  ];

  // let columnData=columns.map(list=>{
  //   return {
  //     name:list.name,
  //     title:list.title.split("_" ).join(" ")
  //   }
  // })

  const [fatureBlerjeToggle, setFatureBlerjeToggle] = useState(true);

  // const handleClick = (e) => {
  //   if (e.type === "contextmenu") {
  //   }
  // };

  const defaultState = {
    Klienti: "",
    KodKlient: "",
    data: moment().format("YYYY-MM-DD"),
    shenimTransport: "",
    Monedha: "",
    Nipt: "",
    Qytetet: "",
    shenim: "",
    Menyra: "",
    arkBank: "",
    Paguar: "",
    AfatiData: moment().format("yyyy-MM-DD"),
    Afati: "",
    Kursi: "",
    NrOrigjine: "",
    Nr: "",
    NrSerial: "",
    Kls1: "",
    Kls2: "",
    Kls3: "",
    Kls4: "",
    Cmimi: "",
    Pergjegjes: "",
    magazina: "",
    MagazinaData: moment().format("yyyy-MM-DD"),
    veprime: "",
    dataDeklarimit: moment().format("yyyy-MM-DD"),
    Departamenti: "",
    Transportues: "",
    NiptTransport: "",
    Targa: "",
    Koha: moment().format("YYYY-MM-DD HH:mm:ss"),
    Active: "",
  };

  const [state, setState] = useState(defaultState);

  //   console.log('kodklient',state.Klienti)
  // console.log('KodKlient',state.KodKlient)

  const handleChange = (key, value) => {
    setState((state) => {
      return {
        ...state,
        [key]: value,
      };
    });
  };

  // const handleFormChange= (e)=> {
  //   e.preventDefault()
  // }

  const aprovoFature = () => {
    const content = {
      ...state,
      items: rows,
    };

    if (state.magazina === "") {
      toast.error("Cakto Magazinen!", {
        draggable: true,
        position: toast.POSITION.BOTTOM_LEFT,
      });
    } else if (state.furnitorType === "") {
      toast.error("Cakto Furnitorin!", {
        draggable: true,
        position: toast.POSITION.BOTTOM_LEFT,
        hideProgressBar: true,
      });
    } else {
      axios.post(`${process.env.REACT_APP_API_KEY}/fatura/shitje`, {
        Kodi: state.Nr,
        KLFU_Kodi: state.Klienti,
        KLFU_Pershkrim: state.KodKlient,
        Data: state.data,
        Kodi_ORG: state.NrOrigjine,
        Mon: state.Monedha,
        Kursi: state.Kursi,
        NrSerik: state.NrSerial,
        Tip_Cmimi: state.Cmimi,
        NIPT: state.Nipt,
        Qyteti_Kodi: state.Qytetet,
        Shenim: state.shenim,
        Menyra_Pageses_Id: state.Menyra,
        Arka_Banka_Kodi: state.arkBank,
        Paguar: state.Paguar,
        Afati_PagesesData: state.AfatiData,
        Afati_PagesesDite: state.Afati,
        Punonjes_ID: state.Pergjegjes,
        Magazina_Kodi: state.magazina,
        Veprimi: state.veprime,
        Data_deklarimit: state.dataDeklarimit,
        // MagazinaData:state.MagazinaData
        Transport_Data: state.Koha,
        Transport_shenim: state.shenimTransport,
        Dep_Kodi: state.Departamenti,
        Transportuesi_Id: state.Transportues,
        Transportuesi_Nipt: state.NiptTransport,
        Targa_e_Mjetit: state.Targa,
        Klasifikim1_ID: state.Kls1,
        Klasifikim2_ID: state.Kls2,
        Klasifikim3_ID: state.Kls3,
        Klasifikim4_ID: state.Kls4,

        Import: null,
        Flete_Dalje_ID: null,
        Flete_Dalje_KODI: null,
        Flete_Dalje_DATA: null,
        Aktiv: state.Active,
        Inserted: null,
        Eksport: null,
        Operator: "A",
        content,
      });
    }
  };
  const handleFurnitorType = (e) => {
    const value = e.target.value;
    const nipt = klient.find((item) => item.Kodi === value).Nipt;
    // const qytet = qytetet.find(item=>item.Pershkrim===value).Qytetet

    setState((state) => {
      return {
        ...state,
        KodKlient: value,
        Klienti: value,
        Nipt: nipt,
        // Qytetet:qytet,
      };
    });
  };

  const calculateData = (item) => {
    let { Tvsh, Cmimi_pa_TVSH, Sasia, Cmimi, Tvsh_Vlera, Skonto_Vlera, Total } =
      item;
    Total = parseFloat(Tvsh * Sasia);

    console.log({ Total });

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

  const componentsRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentsRef.current,
    documentTitle: "Document i ri",
  });
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

  const shtoArtikull = (artikull) => {
    if (!artikull) return;

    let currObj = rows.find((row) => row.Id === artikull?.Id);

    if (currObj) {
      setRows((rows) => {
        if (!rows) return []; // Add a null check for rows array

        return rows.map((row) => {
          if (currObj.Id === row.Id) {
            return { ...row, Sasia: parseFloat(row.Sasia) + 1 };
          }
          return row;
        });
      });
      return;
    }

    setRows((rows) => {
      if (!rows) return []; // Add a null check for rows array

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

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
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
        <span className={titleClassName}>Fature Shitje</span>
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

  const anulloFatureShitje = () => {
    let excludeData = ["AfatiData", "Deklarimit", "MagazinaData", "data"];
    let hasValue = Object.keys(state)?.find(
      (key) => !excludeData.includes(key) && state[key] != ""
    );
    if (hasValue) setHidePupUp(true);
  };

  return (
    <div>
      <NavBar />

      <div className="template">
        <SideBar />

        <div className=" p-1 ">
          {hidePupUp && popUpConfirm}
          {/* <form className="drop-shadow-lg mr-4 mb-3"  onSubmit={(e)=>aprovoFature(e.preventDefault())}> */}
          <Panel headerTemplate={template} toggleable>
            <div className="form_panel ">
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
                      setState(defaultState);
                      setDisabled(true);
                      anulloFatureShitje();
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
                  <ToastContainer />
                </ButtonGroup>

                <ButtonGroup size="xl" className="mb-2 shadow-sm ">
                  <Button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                    disabled={disabled}
                  >
                    Klient
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
                    Transport
                    <DirectionsBusIcon />
                  </Button>
                  <Button
                    className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(6)}
                    disabled={disabled}
                  >
                    Kls
                    <ClassIcon />
                  </Button>
                </ButtonGroup>

                <PrintoPdf1
                  className="print"
                  state={state}
                  rows={rows}
                  KonfigurimPrshk={konfigurim}
                />
              </div>
              {/* <Properties onContextMenu={handleClick}/> */}

              <div className="fBlerje dtlblerje border-separate flex p-4 gap-24 border-t">
                <div className="grid gap-2">
                  <div className="flex justify-center items-center gap-2">
                    <TextField
                      fullWidth
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
                      fullWidth
                      disabled={disabled}
                      value={state?.NrOrigjine}
                      onChange={(e) =>
                        handleChange("NrOrigjine", e.target.value)
                      }
                      type="number"
                      variant="outlined"
                      label="Nr Origjines"
                      size="small"
                    />
                  </div>

                  <div className="flex gap-2">
                    <div className="flex flex-col gap-2">
                      <TextField
                        disabled={disabled}
                        type="number"
                        label="Kursi"
                        value={state?.Kursi}
                        onChange={(e) => handleChange("Kursi", e.target.value)}
                        variant="outlined"
                        size="small"
                      />
                      <div className="bg-gray-100 rounded-tr-lg rounded-br-lg w-full flex justify-center items-center relative">
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
                        <div className="hover:scale-110 transition-all">
                          <Monedhat fetchMonedhat={fetchmonedha} />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <TextField
                        disabled={disabled}
                        type="number"
                        label="Nr"
                        variant="outlined"
                        value={state?.Nr}
                        onChange={(e) => handleChange("Nr", e.target.value)}
                        size="small"
                      />

                      <TextField
                        disabled={disabled}
                        type="number"
                        label="Serial numer"
                        value={state?.NrSerial}
                        onChange={(e) =>
                          handleChange("NrSerial", e.target.value)
                        }
                        variant="outlined"
                        size="small"
                      />
                    </div>
                  </div>

                  <div className="flex">
                    <ModalList shtoArtikull={shtoArtikull} />
                  </div>
                </div>

                {/* /////////////////////////////////////////////////////////////// */}

                <div>
                  {/* tab1 */}
                  <div
                    className={
                      toggleState === 1 ? "content  active-content" : "content"
                    }
                  >
                    <div className="flex gap-4">
                      <div className="flex flex-col gap-2">
                        <TextField
                          disabled={disabled}
                          value={state?.Klienti}
                          onChange={(e) =>
                            handleChange("Klienti", e.target.value)
                          }
                          label="Klienti"
                          variant="outlined"
                          size="small"
                        />

                        <div className="bg-gray-100 rounded-tr-lg rounded-br-lg w-full flex justify-center items-center relative">
                          <Form.Select
                            required
                            value={state?.KodKlient}
                            onChange={(e) => handleFurnitorType(e)}
                            disabled={disabled}
                          >
                            <option label="Kod Klienti" />
                            {klient.map((list) => {
                              return (
                                <option value={list.Kodi}>
                                  {list.Pershkrim}
                                </option>
                              );
                            })}
                          </Form.Select>
                          <div className="hover:scale-110 transition-all">
                            <KodKlienti fetchKKlienti={fetchFShitje} />
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <Form.Select
                            required
                            value={state?.Cmimi ?? ""}
                            disabled={disabled}
                            onChange={(e) => {
                              handleChange("Cmimi", e.target.value);
                            }}
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
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <TextField
                          disabled={disabled}
                          type="text"
                          value={state?.Nipt}
                          onChange={(e) => handleChange("Nipt", e.target.value)}
                          label="Nipt"
                          variant="outlined"
                          size="small"
                        />

                        <div className="bg-gray-100 rounded-tr-lg rounded-br-lg w-full flex justify-center items-center relative">
                          <Form.Select
                            disabled={disabled}
                            label="Qytetet"
                            value={state?.Qytetet ?? ""}
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
                          <div className="hover:scale-110 transition-all">
                            <Q fetchMonedhat={fetchFShitje} />
                          </div>
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
                        {/* <AutoComplete 
                             value={selectedCountry2} 
                             // suggestions={filteredCountries} 
                             // completeMethod={searchCountry}
                             field="name" 
                             dropdown 
                             forceSelection 
                             // itemTemplate={itemTemplate}
                             onChange={(e)=>{setSelectedCountry2(e.target.value)}} 
                             aria-label="Countries" 
                             dropdownAriaLabel="Select Country" /> */}
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
                    <div className="grid gap-2 grid-cols-2">
                      <Form.Select
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
                            <option key={menyra.Id}>{menyra.Pershkrim}</option>
                          );
                        })}
                      </Form.Select>

                      <Form.Select
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

                      <TextField
                        label="Paguar"
                        disabled={disabled}
                        type="number"
                        size="small"
                        variant="outlined"
                        value={state?.Paguar}
                        onChange={(e) => handleChange("Paguar", e.target.value)}
                      />

                      <div>
                        <TextField
                          disabled={disabled}
                          type="date"
                          label="Afati"
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
                      <div className="flex gap-2 text-center items-center  ">
                        <span> Ose për </span>

                        <input
                          className="rounded-md w-20 border"
                          disabled={disabled}
                          type="number"
                          size="small"
                          value={state?.Afati}
                          onChange={(e) =>
                            handleChange("Afati", e.target.value)
                          }
                        />
                        <span> Ditë</span>
                      </div>

                      <div className="bg-gray-100 rounded-tr-lg rounded-br-lg w-full flex justify-center items-center relative">
                        <Form.Select
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
                        <div className="hover:scale-110 transition-all">
                          <Pergjegjesi fetchKKlienti={fetchFShitje} />
                        </div>
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
                    <Button variant="contained">Flete Hyrje</Button>
                    <div className="flex gap-2 w-96 mt-2">
                      <div className="bg-gray-100 rounded-tr-lg rounded-br-lg w-full flex justify-center items-center relative">
                        <Form.Select
                          disabled={disabled}
                          value={state?.magazina ?? ""}
                          onChange={(e) => {
                            handleChange("magazina", e.target.value);
                          }}
                        >
                          <option label="Magazina" />
                          {magazina.map((magazina) => {
                            return (
                              <option value={magazina.Kodi}>
                                {magazina.Pershkrim}
                              </option>
                            );
                          })}
                        </Form.Select>
                        <div className="  hover:scale-110 transition-all">
                          <Magazina fetchMAgazin={fetchFShitje} />
                        </div>
                      </div>
                      <div>
                        <TextField
                          disabled={disabled}
                          type="date"
                          label="Data"
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
                    <div className="grid gap-2 grid-cols-2">
                      <div className="bg-gray-100 rounded-tr-lg rounded-br-lg w-full flex justify-center items-center relative">
                        <Form.Select
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
                        <div className="hover:scale-110 transition-all">
                          <VeprimeSh />
                        </div>
                      </div>

                      <div className="flex justify-between items-center w-full">
                        <TextField
                          disabled={disabled}
                          type="date"
                          size="small"
                          label="Data e deklarimit"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          value={state?.dataDeklarimit}
                          onChange={(e) =>
                            handleChange("dataDeklarimit", e.target.value)
                          }
                        />

                        <div>
                          <FormControlLabel
                            control={
                              <Checkbox
                                disabled={disabled}
                                type="checkbox"
                                variant="outlined"
                                value={state?.Active}
                                onChange={(e) =>
                                  handleChange("Active", e.target.checked)
                                }
                              />
                            }
                            label="EKSPORT"
                          />
                        </div>
                      </div>

                      <div className="bg-gray-100 rounded-tr-lg rounded-br-lg w-full flex justify-center items-center relative">
                        <Form.Select
                          disabled={disabled}
                          value={state?.Departamenti ?? ""}
                          onChange={(e) => {
                            handleChange("Departamenti", e.target.value);
                          }}
                        >
                          <option label="Departamenti"></option>
                          {departamenti.map((list) => {
                            return (
                              <option key={list.Kodi}>{list.Pershkrim}</option>
                            );
                          })}
                        </Form.Select>
                        <div className="  hover:scale-110 transition-all">
                          <Departamenti fetchDepart={fetchFShitje} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab 5 */}
                  <div
                    className={
                      toggleState === 5 ? "content  active-content" : "content"
                    }
                  >
                    <div className="grid gap-2 grid-cols-2">
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
                          {transportuesi.map((veprim) => {
                            return (
                              <option value={veprim.Kodi}>
                                {veprim.Pershkrim}
                              </option>
                            );
                          })}
                        </Form.Select>
                        <div className="  hover:scale-110 transition-all">
                          <TransportShitje fetchTShitje={fetchFShitje} />
                        </div>
                      </div>

                      <TextField
                        disabled={disabled}
                        type="text"
                        label="Nipt Tans"
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
                        onChange={(e) => handleChange("Targa", e.target.value)}
                        size="small"
                      />

                      <TextField
                        size="small"
                        disabled={disabled}
                        type="datetime-local"
                        label="Koha"
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={state?.Koha}
                        onChange={(e) => handleChange("Koha", e.target.value)}
                      />

                      <textarea
                        //  fullWidth
                        disabled={disabled}
                        cols="38"
                        rows="3"
                        value={state?.shenimTransport}
                        onChange={(e) =>
                          handleChange("shenimTransport", e.target.value)
                        }
                        placeholder="Shënim"
                        className="shenim resize-none mt-2 rounded-md fullWidth"
                      ></textarea>
                    </div>
                  </div>

                  {/* tab6 */}

                  <div
                    className={
                      toggleState === 6 ? "content  active-content" : "content"
                    }
                  >
                    <div className="grid gap-2 grid-cols-1 w-72">
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
                              <option key={kls.ID}>{kls.Pershkrim}</option>
                            );
                          })}
                        </Form.Select>
                        <div className="  hover:scale-110 transition-all">
                          <Klasifikim fetchMonedhat={fetchFShitje} />
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
                        <div className="  hover:scale-110 transition-all">
                          <Klasifikim2 fetchMonedhat={fetchFShitje} />
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
                        <div className="  hover:scale-110 transition-all">
                          <Klasifikim3 fetchMonedhat={fetchFShitje} />
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
                        <div className="  hover:scale-110 transition-all">
                          <Klasifikim4 fetchMonedhat={fetchFShitje} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Panel>
          {/* </form> */}

          <div className="mt-3">
            <PrimeGrid
              gridKey="FatureShitje"
              isEditable={true}
              columns={columns}
              setColumns={setColumns}
              rows={rows}
              setRows={setRows}
              calculateData={calculateData}
              defaultColumnsStorage={defaultColumnsStorage}
            />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default memo(FatureShitje);
// removableSort,multiSortMeta,onSort,
// const searchCountry = (event) => {
//   setTimeout(() => {
//       let _filteredCountries;
//       if (!event.query.trim().length) {
//           _filteredCountries = [...countries];
//       }
//       else {
//           _filteredCountries = countries.filter((country) => {
//               return country.name.toLowerCase().startsWith(event.query.toLowerCase());
//           });
//       }

//   setFilteredItems(_filteredItems);
// }
// }

// const itemTemplate = (item) => {
//   return (
//       <div className="country-item">
//           <div>{item.Pershkrim}</div>
//       </div>
//   );
//   }
