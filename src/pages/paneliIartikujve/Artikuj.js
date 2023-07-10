import { Autocomplete, Button, ButtonGroup, TextField } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { MultiSelect } from "primereact/multiselect";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { ContextMenu } from "primereact/contextmenu";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import useStorage from "../../hooks/useStorage";
import ArtikujPanel from "../PaneliArtikuj";
import InfoIcon from "@mui/icons-material/Info";
import Footer from "../../components/Navbar/Footer";
import NavBar from "../../components/Navbar/NavBar";
import SideBar from "../../components/Navbar/SideBar";
import { Sidebar } from "primereact/sidebar";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Tree } from "primereact/tree";
import { NodeService } from "../../demo-data/node";
import ListIcon from "@mui/icons-material/List";
import ChangeCircleRoundedIcon from "@mui/icons-material/ChangeCircleRounded";
const Artikuj = ({
  showHideColumns = true,
  gridKey,
  rows,
  isEditable = true,
  setNdryshoKushtin,
  ndryshoKushtin,
  ...props
}) => {
  const [data, setdata] = useState([]);
  const [columns, setColumns] = useState([
    { field: "Kodi", title: "Kodi" },
    { field: "Pershkrim", title: "Pershkrim" },
    { field: "Njesi_Kodi", title: "Njesi_Kodi" },
    { field: "Cmimi", title: "Cmimi", fieldType: "number" },
    { field: "Id", title: "Id" },
    { field: "Kodi1", title: "Kodi1" },
    { field: "Kodi2", title: "Kodi2" },
    { field: "Barkod", title: "Barkod" },
    { field: "Pershkrim1", title: "Pershkrim1" },
    { field: "Pershkrim2", title: "Pershkrim2" },
    { field: "Fjale_Kyce", title: "Fjale_Kyce" },
    { field: "Cmimi_Bleres", title: "Cmimi_Bleres" },
    { field: "Cmimi_Kosto", title: "Cmimi_KostomimiShitesMarzhi" },
    { field: "Cmimi_Kosto_Manual", title: "Cmimi_Kosto_Manual" },
    { field: "Cmimi_Fiskal", title: "Cmimi_Fiskal" },
    { field: "Cmimi_Kosto_Data", title: "Cmimi_Kosto_Data" },
    { field: "Cmimi_1", title: "Cmimi_1" },
    { field: "Cmimi_2", title: "Cmimi_2" },
    { field: "Cmimi_3", title: "Cmimi_3" },
    { field: "Cmimi_4", title: "Cmimi_4" },
    { field: "Cmimi_5", title: "Cmimi_5" },
    { field: "Cmimi_6", title: "Cmimi_6" },
    { field: "Cmimi_7", title: "Cmimi_7" },
    { field: "Cmimi_8", title: "Cmimi_8" },
    { field: "Cmimi_9", title: "Cmimi_9" },
    { field: "Cmimi_10", title: "Cmimi_10" },
    { field: "Tarifa_Kodi", title: "Tarifa_Kodi" },
    { field: "Tvsh", title: "Tvsh" },
    { field: "Aktiv", title: "Aktiv" },
    { field: "Printo_Ne_Kodi", title: "Printo_Ne_Kodi" },
    { field: "Pozicion_Kodi", title: "Pozicion_Kodi" },
    { field: "SasiaMin", title: "SasiaMin" },
    { field: "SasiaMax", title: "SasiaMax" },
    { field: "Perbere", title: "Perbere" },
    { field: "Art_Kls01_Kodi", title: "Art_Kls01_Kodi" },
    { field: "Art_Kls02_Kodi", title: "Art_Kls02_Kodi" },
    { field: "Art_Kls03_Kodi", title: "Art_Kls03_Kodi" },
    { field: "Art_Kls04_Kodi", title: "Art_Kls04_Kodi" },
    { field: "Art_Kls05_Kodi", title: "Art_Kls05_Kodi" },
    { field: "Art_Kls06_Kodi", title: "Art_Kls06_Kodi" },
    { field: "Koeficient", title: "Koeficient" },
    { field: "Skema_Kodi", title: "Skema_Kodi" },
    { field: "Peshore", title: "Peshore" },
    { field: "Rendit", title: "Rendit" },
    { field: "Operator", title: "Operator" },
    { field: "Updated", title: "Updated" },
    { field: "Selektuar", title: "Selektuar" },
    { field: "Pos_NeList", title: "Pos_NeList" },
    { field: "KaVeprime", title: "KaVeprime" },
    { field: "Skonto_Perqindje", title: "Skonto_Perqindje" },
    { field: "Sasia_Print", title: "Sasia_Print" },
    { field: "Skonto_Vlere", title: "Skonto_Vlere" },
    { field: "DataSk", title: "DataSk" },
    { field: "AAM", title: "AAM" },
    { field: "Shumice", title: "Shumice" },
    { field: "Pakice", title: "Pakice" },
    { field: "NukCopetohet", title: "NukCopetohet" },
    { field: "Shenime", title: "Shenime" },
    { field: "Oferte_Aktiv", title: "Oferte_Aktiv" },
    { field: "Oferte_DataFillim", title: "Oferte_DataFillim" },
    { field: "Oferte_Dite", title: "Oferte_Dite" },
    { field: "Rimbursim_Cmimi", title: "Rimbursim_Cmimi" },
    { field: "PerqindjeNeDogane", title: "PerqindjeNeDogane" },
    { field: "PerqindjeNeAkcize", title: "PerqindjeNeAkcize" },
    { field: "PerqindjeNeAkcize1", title: "PerqindjeNeAkcize1" },
    { field: "Pema_ID", title: "Pema_ID" },
    { field: "Pema_Kodi", title: "Pema_Kodi" },
    { field: "Garanci", title: "Garanci" },
    { field: "Garanci_Tip_ID", title: "Garanci_Tip_ID" },
    { field: "DateSkDite", title: "DateSkDite" },
    { field: "TipVlereBlerje_ID", title: "TipVlereBlerje_ID" },
    { field: "TipVlereShitje_ID", title: "TipVlereShitje_ID" },
    { field: "TipVlereImport_ID", title: "TipVlereImport_ID" },
    { field: "PeshaKg", title: "PeshaKg" },
    { field: "PeshaKgBruto", title: "PeshaKgBruto" },
    { field: "SasiaPak", title: "SasiaPak" },
    { field: "Volumi", title: "Volumi" },
    { field: "Prodhuesi_ID", title: "Prodhuesi_ID" },
    { field: "Marka_ID", title: "Marka_ID" },
    { field: "Origjina_ID", title: "Origjina_ID" },
    { field: "Cilesia_ID", title: "Cilesia_ID" },
    { field: "Gjinia_Kodi", title: "Gjinia_Kodi" },
    { field: "Sezoni_ID", title: "Sezoni_ID" },
    { field: "LlojiMallit_ID", title: "LlojiMallit_ID" },
    { field: "Ngjyra_ID", title: "Ngjyra_ID" },
    { field: "Masa_ID", title: "Masa_ID" },
    { field: "Stina_ID", title: "Stina_ID" },
    { field: "Materiali_ID", title: "Materiali_ID" },
    { field: "CmimiPeshaKG", title: "CmimiPeshaKG" },
    { field: "EshtePerHH", title: "EshtePerHH" },
    { field: "EshteGrupArtikujsh", title: "EshteGrupArtikujsh" },
    { field: "ProdhimGrup_ID", title: "ProdhimGrup_ID" },
    { field: "NrSerik", title: "NrSerik" },
    { field: "iPerbereNeMagazine", title: "iPerbereNeMagazine" },
    { field: "Dep_Kodi", title: "Dep_Kodi" },
    { field: "AAM_Kls01_Kodi", title: "AAM_Kls01_Kodi" },
    { field: "AAM_Kls02_Kodi", title: "AAM_Kls02_Kodi" },
    { field: "AAM_Kls03_Kodi", title: "AAM_Kls03_Kodi" },
    {
      field: "AAM_Metoda_Amortizimi_Kodi",
      title: "AAM_Metoda_Amortizimi_Kodi",
    },
    {
      field: "AAM_Metoda_Amortizimi_Fiskal_Kodi",
      title: "AAM_Metoda_Amortizimi_Fiskal_Kodi",
    },
    { field: "AAM_Jetegjatesia", title: "AAM_Jetegjatesia" },
    {
      field: "AAM_Jetegjatesia_Njesi_Kodi",
      title: "AAM_Jetegjatesia_Njesi_Kodi",
    },
    { field: "AAM_Vlera_Ne_FundMB", title: "AAM_Vlera_Ne_FundMB" },
    { field: "AAM_Perqindje_Amortizimi", title: "AAM_Perqindje_Amortizimi" },
    { field: "AAM_Njesi_Kodi_Amortizimi", title: "AAM_Njesi_Kodi_Amortizimi" },
    {
      field: "AAM_Perqindje_Amortizimi_Fiskal",
      title: "AAM_Perqindje_Amortizimi_Fiskal",
    },
    {
      field: "AAM_Njesi_Kodi_Amortizimi_Fiskal",
      title: "AAM_Njesi_Kodi_Amortizimi_Fiskal",
    },
    { field: "TipPaketimi_Kodi", title: "TipPaketimi_Kodi" },
    { field: "Cmimi_1Oferte", title: "Cmimi_1Oferte" },
    { field: "Cmimi_2Oferte", title: "Cmimi_2Oferte" },
    { field: "Cmimi_3Oferte", title: "Cmimi_3Oferte" },
    { field: "Cmimi_4Oferte", title: "Cmimi_4Oferte" },
    { field: "Cmimi_5Oferte", title: "Cmimi_5Oferte" },
    { field: "Cmimi_6Oferte", title: "Cmimi_6Oferte" },
    { field: "Cmimi_7Oferte", title: "Cmimi_7Oferte" },
    { field: "Cmimi_8Oferte", title: "Cmimi_8Oferte" },
    { field: "Cmimi_9Oferte", title: "Cmimi_9Oferte" },
    { field: "Cmimi_10Oferte", title: "Cmimi_10Oferte" },
    { field: "BlerjeKursi", title: "BlerjeKursi" },
    { field: "BlerjeMonedha", title: "BlerjeMonedha" },
    { field: "BlerjeCmimiMonedhe", title: "BlerjeCmimiMonedhe" },
    { field: "BlerjeData", title: "BlerjeData" },
    { field: "IKthyeshem", title: "IKthyeshem" },
    { field: "PeriudhaKthimit", title: "PeriudhaKthimit" },
    { field: "KostojaTransport1", title: "KostojaTransport1" },
    { field: "KostojaTransport2", title: "KostojaTransport2" },
    { field: "KostojaTransport3", title: "KostojaTransport3" },
    { field: "Gjatesi", title: "Gjatesi" },
    { field: "Gjeresi", title: "Gjeresi" },
    { field: "Lartesi", title: "Lartesi" },
    { field: "ArtikulliRi", title: "ArtikulliRi" },
    { field: "Eksport", title: "Eksport" },
    { field: "Import", title: "Import" },
    { field: "Franchise", title: "Franchise" },
    { field: "STK", title: "STK" },
    { field: "Distribucion", title: "Distribucion" },
    { field: "DelNeFaqenPare", title: "DelNeFaqenPare" },
    { field: "DelNeInternet", title: "DelNeInternet" },
    { field: "Cmimi_pa_TVSH", title: "Cmimi_pa_TVSH" },
    { field: "Cmimi_plan_BlerjeMB", title: "Cmimi_plan_BlerjeMB" },
    { field: "Cmimi_plan_BlerjeMH", title: "Cmimi_plan_BlerjeMH" },
    { field: "Cmimi_Plan_Shitje", title: "Cmimi_Plan_Shitje" },
    { field: "DiteParaPorosise", title: "DiteParaPorosise" },
    { field: "VerifikoMoshen", title: "VerifikoMoshen" },
    { field: "MoshaMin", title: "MoshaMin" },
    { field: "MoshaMax", title: "MoshaMax" },
    { field: "MinPorosi", title: "MinPorosi" },
    { field: "KodiDoganor", title: "KodiDoganor" },
    { field: "TaksaDoganore", title: "TaksaDoganore" },
    { field: "OperatorInsert", title: "OperatorInsert" },
    { field: "Statusi", title: "Statusi" },
    { field: "Inserted", title: "Inserted" },
    { field: "Users_GrupRights", title: "Users_GrupRights" },
    { field: "Rafti", title: "Rafti" },
    { field: "KodiZyrtar", title: "KodiZyrtar" },
    { field: "KalkuloPerOferte", title: "KalkuloPerOferte" },
    { field: "Gancho", title: "Gancho" },
    { field: "MeGancho", title: "MeGancho" },
    { field: "Cmimi_Oferte", title: "Cmimi_Oferte" },
    { field: "KomisionTipi", title: "KomisionTipi" },
    { field: "KomisionPerqindje", title: "KomisionPerqindje" },
    { field: "KomisionFee", title: "KomisionFee" },
    { field: "KomisionVlera", title: "KomisionVlera" },
    { field: "KLFU_Kodi", title: "KLFU_Kodi" },
    { field: "idOLD", title: "idOLD" },
    { field: "NukNdryshonVlerat", title: "NukNdryshonVlerat" },
    { field: "SkontoData", title: "SkontoData" },
    { field: "SkontoOperator", title: "SkontoOperator" },
    { field: "SKU", title: "SKU" },
    { field: "ShitjeNjesi_Kodi1", title: "ShitjeNjesi_Kodi1" },
    { field: "ShitjeNjesi_Kodi2", title: "ShitjeNjesi_Kodi2" },
    { field: "ShitjeKoeficient1", title: "ShitjeKoeficient1" },
    { field: "ShitjeKoeficient2", title: "ShitjeKoeficient2" },
    { field: "ShitjeCmimi_Njesi1", title: "ShitjeCmimi_Njesi1" },
    { field: "ShitjeCmimi_Njesi2", title: "ShitjeCmimi_Njesi2" },
    { field: "BlerjeNjesi_Kodi1", title: "BlerjeNjesi_Kodi1" },
    { field: "BlerjeNjesi_Kodi2", title: "BlerjeNjesi_Kodi2" },
    { field: "BlerjeKoeficient1", title: "BlerjeKoeficient1" },
    { field: "BlerjeKoeficient2", title: "BlerjeKoeficient2" },
    { field: "BlerjeCmimi_Njesi1", title: "BlerjeCmimi_Njesi1" },
    { field: "BlerjeCmimi_Njesi2", title: "BlerjeCmimi_Njesi2" },
    { field: "Kodi3", title: "Kodi3" },
    { field: "Kodi4", title: "Kodi4" },
    { field: "Kodi5", title: "Kodi5" },
    { field: "njesi_koeficient", title: "njesi_koeficient" },
    { field: "proTipPaketimi_Kodi", title: "proTipPaketimi_Kodi" },
    { field: "Paketimi01", title: "Paketimi01" },
    { field: "Paketimi02", title: "Paketimi02" },
    { field: "Paketimi03", title: "Paketimi03" },
    { field: "Paketimi04", title: "Paketimi04" },
    { field: "Paketimi05", title: "Paketimi05" },
    { field: "Paketimi06", title: "Paketimi06" },
    { field: "Paketimi07", title: "Paketimi07" },
    { field: "Paketimi08", title: "Paketimi08" },
    { field: "Paketimi09", title: "Paketimi09" },
    { field: "Paketimi10", title: "Paketimi10" },
    { field: "ImageIndex", title: "ImageIndex" },
    { field: "KonstantePerKlient", title: "KonstantePerKlient" },
  ]);
  const [disabled, setDisabled] = useState(true);
  const [selectionRow, setSelectionRow] = useState(null);
  const defaultState = {};
  const [state, setState] = useState(defaultState);

  const [mydata, setmydata] = useState([]);

  console.log({ mydata });

  const [nodes, setNodes] = useState(null);
  const nodeService = new NodeService();

  console.log({ nodes });
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setNodes(res.data);
    });
  }, []);

  const expandAll = () => {
    let _expandedKeys = {};
    for (let node of nodes) {
      expandNode(node, _expandedKeys);
    }

    setExpandedKeys(_expandedKeys);
  };

  const collapseAll = () => {
    setExpandedKeys({});
  };

  const expandNode = (node, _expandedKeys) => {
    if (node.name && node.email.length) {
      _expandedKeys[node.id] = true;

      for (let child of node.email) {
        expandNode(child, _expandedKeys);
      }
    }
  };

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
      //   items:rows,
    };
    axios.post("", {});
  };

  const defaultColumnsStorage = [
    "Kodi",
    "Pershkrim",
    "Barkod",
    "Cmimi",
    "Njesi_Kodi",
  ];

  const [globalFilterValue1, setGlobalFilterValue1] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const cm = useRef(null);
  const [filters1, setFilters1] = useState(null);
  const [selectedColumns, setSelectedColumns] = useStorage(
    defaultColumnsStorage,
    "kolonatArtikuj"
  );

  const onColumnToggle = (event) => {
    let selectedColumns = event.value;
    let orderedSelectedColumns = columns
      .filter((col) => selectedColumns.some((sCol) => sCol.title === col.title))
      .map((col) => col.field);
    setSelectedColumns(orderedSelectedColumns);
  };

  const onGlobalFilterChange1 = (e) => {
    const value = e.target.value;
    let _filters1 = { ...filters1 };
    _filters1["global"].value = value;

    setFilters1(_filters1);
    setGlobalFilterValue1(value);
  };

  const clearFilter1 = () => {
    initFilters1();
  };

  const initFilters1 = () => {
    setFilters1({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      columns: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      representative: { value: null, matchMode: FilterMatchMode.IN },
      date: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
      },
      balance: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      status: {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
      verified: { value: null, matchMode: FilterMatchMode.EQUALS },
    });
    setGlobalFilterValue1("");
  };

  console.log({ data });
  const addRow = () => {
    let newRow = {};
    columns.forEach((column) => {
      if (column) {
        newRow[column.field] = null;
      } else {
        newRow[column.Id] = null;
      }
    });
    setdata((rows) => {
      return [newRow, ...rows];
    });
  };

  const deleteRow = (row) => {
    let filteredRows = [...data];
    filteredRows = filteredRows.filter((p) => p.Id !== row.Id);
    setdata(filteredRows);
  };

  const isPositiveInteger = (val) => {
    let str = String(val);
    str = str.trim();
    if (!str) {
      return false;
    }
    str = str.replace(/^0+/, "") || "0";
    let n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
  };

  const onCellEditComplete = (e) => {
    let { rowData, newValue, field, originalEvent: event } = e;

    switch (field) {
      case columns:
        if (isPositiveInteger(newValue)) rowData[field] = newValue;
        else event.preventDefault();
        break;

      default:
        if (newValue.length > 0) rowData[field] = newValue;
        else event.preventDefault();
        break;
    }
  };

  const cellEditor = (options, col) => {
    const column = options?.column;
    if (column?.props?.editColumn == false) {
      return (
        <Column
          className="border border-cyan-400"
          key={column.field}
          colSpan={1}
        ></Column>
      );
    }

    return textEditor(options, col);
  };

  const textEditor = (options, col) => {
    return (
      <InputText
        className="cursor-pointer inp"
        type={col?.fieldType ?? "text"}
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  const menuModel = [
    {
      label: "Fshije",
      icon: "pi pi-fw pi-times",
      command: () => deleteRow(selectedProduct),
    },
  ];

  const filterdColumns = showHideColumns
    ? columns?.filter((column) =>
        selectedColumns?.some((field) => field === column?.field)
      )
    : columns;

  const header = (
    <>
      <div className="flex justify-between">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            style={{ height: "2em" }}
            value={globalFilterValue1}
            onChange={onGlobalFilterChange1}
            placeholder="Kerko"
            onClick={clearFilter1}
          />
        </span>

        <div
          style={{
            textAlign: "left",
          }}
        >
          {showHideColumns && (
            <>
              <MultiSelect
                value={filterdColumns}
                options={columns}
                optionLabel="title"
                onChange={onColumnToggle}
                style={{ width: "3em", height: "2em" }}
              />
            </>
          )}
        </div>
      </div>
    </>
  );

  const dynamicColumns = filterdColumns?.map((col, i) => {
    return (
      <Column
        filter
        style={{ height: "2.6rem" }}
        key={col?.field}
        sortable
        field={col?.field}
        header={col?.title}
        editor={(options) => cellEditor(options, col)}
        onCellEditComplete={onCellEditComplete}
      />
    );
  });

  const [first2, setFirst2] = useState(0);
  const [rows2, setRows2] = useState(10);

  const onCustomPage2 = (event) => {
    setFirst2(event.first);
    setRows2(event.rows);
  };

  const template2 = {
    layout: "RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink",
    RowsPerPageDropdown: (options) => {
      const dropdownOptions = [
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 50, value: 50 },
      ];

      return (
        <React.Fragment>
          <span
            className="mx-1"
            style={{ color: "var(--text-color)", userSelect: "none" }}
          >
            Rrjeshta per faqe{" "}
          </span>
          <Dropdown
            value={options.value}
            options={dropdownOptions}
            onChange={options.onChange}
          />
        </React.Fragment>
      );
    },
    CurrentPageReport: (options) => {
      return (
        <span
          style={{
            color: "var(--text-color)",
            userSelect: "none",
            width: "120px",
            textAlign: "center",
          }}
        >
          {options.first} - {options.last} of {options.totalRecords}
        </span>
      );
    },
  };

  // let headerGroup = <ColumnGroup>
  // <Row>
  //     <Column header="Artikull" colSpan={4} />
  // </Row>
  // <Row>
  //  {dynamicColumns}
  // </Row>

  // </ColumnGroup>;

  const kushtiDisable = (
    <>
      {ndryshoKushtin && (
        <div
          onClick={() => {
            setNdryshoKushtin(false);
          }}
          className="absolute  z-50 bg-white border-b-8 border shadow-md p-2 border-t pl-2 w-auto h-12 pb-1 rounded-md flex justify-between popup"
          style={{ top: 120, left: 265 }}
        >
          <div className="flex items-center ">
            <InfoIcon
              style={{ color: "#1971c2" }}
              fontSize="small"
              className="text-zinc-50 "
            />
            <span
              className="ml-2 text-zinc-50 popuptext"
              style={{ color: "#444", fontWeight: 500 }}
            >
              Nuk lejohet veprime pa marre vendim!
            </span>
          </div>
        </div>
      )}
    </>
  );
  const treeData = [
    {
      key: "0",
      label: "Documents",
      icon: "fa fa-folder",
      title: "Documents Folder",
      children: [
        {
          key: "0-0",
          label: "Document 1-1",
          icon: "fa fa-folder",
          title: "Documents Folder",
          children: [
            {
              key: "0-1-1",
              label: "Document-0-1.doc",
              icon: "fa fa-file",
              title: "Documents Folder",
            },
            {
              key: "0-1-2",
              label: "Document-0-2.doc",
              icon: "fa fa-file",
              title: "Documents Folder",
            },
            {
              key: "0-1-3",
              label: "Document-0-3.doc",
              icon: "fa fa-file",
              title: "Documents Folder",
            },
            {
              key: "0-1-4",
              label: "Document-0-4.doc",
              icon: "fa fa-file",
              title: "Documents Folder",
            },
          ],
        },
      ],
    },
    {
      key: "1",
      label: "Desktop",
      icon: "fa fa-desktop",
      title: "Desktop Folder",
      children: [
        {
          key: "1-0",
          label: "document1.doc",
          icon: "fa fa-file",
          title: "Documents Folder",
        },
        {
          key: "0-0",
          label: "documennt-2.doc",
          icon: "fa fa-file",
          title: "Documents Folder",
        },
      ],
    },
    {
      key: "2",
      label: "Downloads",
      icon: "fa fa-download",
      title: "Downloads Folder",
      children: [],
    },
  ];

  const [expandedKeys, setExpandedKeys] = useState({});
  const [visibleRight, setVisibleRight] = useState(false);

  // how to make tree list?

  return (
    <div>
      <NavBar />

      <div className="template">
        <SideBar />

        <div className=" p-2">
          <div className="flex justify-between items-center">
            <ButtonGroup size="xl" className="mb-2 mt-1 shadow-md">
              <Button
                className={`${
                  ndryshoKushtin ? "p-1 relative shtim" : "p-1 relative"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setDisabled(false);
                  addRow();
                  setNdryshoKushtin(false);
                }}
              >
                <PostAddIcon />
                Shtim
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
                Fshije
                <DeleteIcon />
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
              {ndryshoKushtin && kushtiDisable}
            </ButtonGroup>

            <Button
              size="small"
              onClick={() => setVisibleRight(true)}
              className="mr-2 border"
            >
              <MenuOpenIcon size="small" />
            </Button>

            <Sidebar
              visible={visibleRight}
              position="right"
              onHide={() => setVisibleRight(false)}
            >
              <h3 className="tracking-wider font-normal text-lg border-b pb-1">
                Kategorit
              </h3>
              <div>
                <div className="mb-4 flex gap-2">
                  <button
                    onClick={expandAll}
                    className="mr-2 border p-1 hover:bg-slate-400 bg-slate-200 hover:text-white transition-all rounded-md mt-2 cursor-pointer "
                  >
                    Shiko kategorite
                  </button>
                  <button
                    onClick={collapseAll}
                    className="border p-1 hover:bg-slate-400 bg-slate-200 hover:text-white transition-all rounded-md mt-2 cursor-pointer "
                  >
                    Mbyll kategorite
                  </button>
                </div>
              </div>
            </Sidebar>
          </div>

          <div className="border"></div>
          <ContextMenu model={menuModel} ref={cm} />
          <div className="card">
            <DataTable
              // headerColumnGroup={headerGroup}
              editMode="cell"
              className="editable-cells-table artikuj"
              paginator
              paginatorTemplate={template2}
              first={first2}
              rows={rows2}
              onPage={onCustomPage2}
              paginatorClassName="justify-content-end"
              reorderableColumns
              cellSelection
              scrollHeight="26vh"
              inline
              scrollable
              columnResizeMode="fit"
              resizableColumns
              onSelectionChange={(e) => setSelectionRow(e.value)}
              responsiveLayout="stack"
              // breakpoint="960px"
              contextMenuSelection={selectedProduct}
              contextselection={selectedProduct}
              onContextMenuSelectionChange={(e) => setSelectedProduct(e.value)}
              onContextMenu={(e) => cm.current.show(e.originalEvent)}
              size="small"
              value={data}
              stripedRows
              dataKey="Id"
              filter
              filters={filters1}
              header={header}
              globalFilterFields={[
                "BarKod",
                "Pershkrim",
                "Njesi_Kodi",
                "Sasia_Print",
                "Sasia",
              ]}
              // responsiveLayout="scroll"
              filterDisplay="row"
              emptyMessage="Nuk ka te dhena"
              {...props}
            >
              {dynamicColumns}
            </DataTable>
          </div>
          <ArtikujPanel
            setNdryshoKushtin={setNdryshoKushtin}
            disabled={disabled}
          />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Artikuj;
