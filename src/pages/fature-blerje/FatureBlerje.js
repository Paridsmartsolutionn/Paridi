import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  memo,
  useMemo,
} from "react";
import Button from "@mui/material/Button";
import moment from "moment";
import axios from "axios";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrimeGrid from "../../components/primeReact/PrimeGrid";
import useStorage from "../../hooks/useStorage";
import { Panel } from "primereact/panel";
import { Ripple } from "primereact/ripple";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Draggable from "react-draggable";
import mainAxios, { setAuthToken } from "../../services/axios";
import Footer from "../../components/Navbar/Footer";
import NavBar from "../../components/Navbar/NavBar";
import SideBar from "../../components/Navbar/SideBar";
import { setCookie } from "../../services/helpers";
import TabFurnitore from "./tabet/Furnitor/TabFurnitore";
import TabPaguar from "./tabet/Paguar/TabPaguar";
import TabMagazina from "./tabet/Magazina/TabMagazina";
import TabTjera from "./tabet/Tjera/TabTjera";
import TabKLS from "./tabet/KLS/TabKLS";
import MainTab from "./tabet/MainTab/MainTab";
import PaneliTabeve from "./tabet/PaneliTabeve";
import "./FatureBlerje.scss";
import PhoneFatureBlerje from "./phone/PhoneFatureBlerje";
import useCourseStore from "./zustand/store";

const FatureBlerje = ({ hidePupUp, setHidePupUp }) => {
  const { defaultState } = useCourseStore((state) => state);
  console.log("default", defaultState);

  const [disabled, setDisabled] = useState(true);

  const furnitoret = [
    { label: "Furnitor1", id: 1 },
    { label: "Furnitor2", id: 2 },
    { label: "Furnitor3", id: 3 },
    { label: "Furnitor4", id: 4 },
  ];

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

  console.log({ testi });

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

  // const defaultState = {
  //   data: moment().format("yyyy-MM-DD"),
  //   MagazinaData: moment().format("yyyy-MM-DD"),
  //   AfatiData: moment().format("yyyy-MM-DD"),
  //   Deklarimit: moment().format("yyyy-MM-DD"),
  //   furnitorType: "",
  //   furnitorId: "",
  //   Kodi: "",
  //   shenim: "",
  //   Kursi: "",
  //   Monedha: "",
  //   magazina: "",
  //   Menyra: "",
  //   Nipt: "",
  //   llojiMonedhes: "",
  //   Qytetet: "",
  //   NrOrigjine: "",
  //   Nr: "",
  //   NrSerial: "",
  //   Paguar: "",
  //   Afati: "",
  //   Pergjegjes: "",
  //   arkBank: "",
  //   Departamenti: "",
  //   Transport: "",
  //   Targa: "",
  //   Kls1: "",
  //   kls2: "",
  //   Kls3: "",
  //   Kls4: "",
  //   veprime: "",
  //   NiptTransport: "",
  //   Import: "",
  // };

  const [state, setState] = useState(defaultState);

  const handleChange = (key, value) => {
    setState((state) => {
      return {
        ...state,
        [key]: value,
      };
    });
  };

  //POST method for fature-blerje

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
  //plotson fushat perkatse te furnitorType
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
      <div>
        <PhoneFatureBlerje />
      </div>

      <div className="template">
        <SideBar className="sidebar" />

        <div className="p-1 main-container">
          {hidePupUp && popUpConfirm}
          <Panel headerTemplate={template} toggleable>
            <div className="form_panel bg-white">
              <PaneliTabeve
                disabled={disabled}
                setDisabled={setDisabled}
                toggleState={toggleState}
                state={state}
                defaultState={defaultState}
                setState={setState}
                rows={rows}
                adresa1={adresa1}
                nipt1={nipt1}
                toggleTab={toggleTab}
                aprovoFature={aprovoFature}
                anulloFatureBlerje={anulloFatureBlerje}
              />

              <div className=" border-separate flex p-4 gap-24 border-t">
                <MainTab
                  disabled={disabled}
                  state={state}
                  handleChange={handleChange}
                  fetchPost={fetchPost}
                  shtoArtikull={shtoArtikull}
                  handleKursiType={handleKursiType}
                  monedhat={monedhat}
                />

                <div>
                  {/* tab1 */}
                  <TabFurnitore
                    toggleState={toggleState}
                    disabled={disabled}
                    state={state}
                    handleChange={handleChange}
                    fetchPost={fetchPost}
                    handleFurnitorType={handleFurnitorType}
                    qytetet={qytetet}
                    furnitor={furnitor}
                    furnitoret={furnitoret}
                  />
                  {/* //// */}

                  {/* tab2 */}
                  <TabPaguar
                    toggleState={toggleState}
                    disabled={disabled}
                    handleChange={handleChange}
                    fetchPost={fetchPost}
                    state={state}
                    menyraPageses={menyraPageses}
                    arkeBanke={arkeBanke}
                    pergjegjes={pergjegjes}
                  />
                  {/* /////*/}

                  {/* tab3 */}
                  <TabMagazina
                    disabled={disabled}
                    toggleState={toggleState}
                    state={state}
                    handleChange={handleChange}
                    fetchPost={fetchPost}
                    magazina={magazina}
                  />
                  {/*///// */}

                  {/* tab4 */}
                  <TabTjera
                    toggleState={toggleState}
                    disabled={disabled}
                    state={state}
                    handleChange={handleChange}
                    veprime={veprime}
                    fetchPost={fetchPost}
                    departamenti={departamenti}
                    transportuesi={transportuesi}
                  />
                  {/* //// */}

                  {/* tab5 */}
                  <TabKLS
                    toggleState={toggleState}
                    disabled={disabled}
                    state={state}
                    handleChange={handleChange}
                    klasifikim1={klasifikim1}
                    klasifikim2={klasifikim2}
                    klasifikim3={klasifikim3}
                    klasifikim4={klasifikim4}
                    fetchPost={fetchPost}
                  />
                  {/* //// */}
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

      {/* <Footer /> */}
    </div>
  );
};

export default memo(FatureBlerje);
