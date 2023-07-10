import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { MultiSelect } from "primereact/multiselect";
import useStorage from "../../hooks/useStorage";
import { InputText } from "primereact/inputtext";
import { TabView, TabPanel } from "primereact/tabview";
import { Dropdown } from "primereact/dropdown";
import AddIcon from "@mui/icons-material/Add";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import Form from "react-bootstrap/Form";
import ButtonGroup from "@mui/material/ButtonGroup";
import Origjina from "./MiniModalArtikuj/Barkode/Origjina";
import Marka from "./MiniModalArtikuj/Barkode/Marka";
import Gjinia from "./MiniModalArtikuj/Barkode/Gjinia";
import Sezoni from "./MiniModalArtikuj/Barkode/Sezoni";
import LlojiMallit from "./MiniModalArtikuj/Barkode/LlojiMallit";
import Cilesia from "./MiniModalArtikuj/Barkode/Cilesia";
import Ngjyra from "./MiniModalArtikuj/Barkode/Ngjyra";
import Masa from "./MiniModalArtikuj/Barkode/Masa";
import Materiali from "./MiniModalArtikuj/Barkode/Materiali";
import ChangeCircleRoundedIcon from "@mui/icons-material/ChangeCircleRounded";
const Barkode = ({
  gridKey = true,
  showHideColumns = true,
  data,
  selektOrigjina,
  setSelekOrigjina,
  selektMarka,
  setSelektMarka,
  selektGjinia,
  setSelektGjinia,
  selektSezoni,
  setSelektSezoni,
  selektLlojiMallit,
  setSelektLlojiMallit,
  selektCilesia,
  setSelektCilesia,
  selektNgjyra,
  setSelektNgjyra,
  selektMasa,
  setSelektMasa,
  selektMateriali,
  setSelektMateriali,
  disabled,
  setDisabled,
  setNdryshoKushtin,
}) => {
  const [globalFilterValue1, setGlobalFilterValue1] = useState("");
  const [filters1, setFilters1] = useState(null);
  // const [disabled,setDisabled]=useState(true)

  const [columns, setColumns] = useState([
    { field: "Id", title: "Id" },
    { field: "Kodi", title: "Kodi" },
    { field: "BarKod", title: "BarKod" },
    { field: "Kodi1", title: "Kodi1" },
    { field: "Kodi2", title: "Kodi2" },
    { field: "Pershkrim", title: "Pershkrim" },
    { field: "Cmimi_Bleres", title: "Cmimi_Bleres" },
    { field: "Cmimi", title: "Cmimi" },
    { field: "Cmimi_1", title: "Cmimi_1" },
    { field: "Cmimi_2", title: "Cmimi_2" },
    { field: "Cmimi_3", title: "Cmimi_3" },
    { field: "Cmimi_4", title: "Cmimi_4" },
    { field: "Cmimi_5", title: "Cmimi_5" },
    { field: "Cmimi_6", title: "Cmimi_6" },
    { field: "Njesi_Kodi", title: "Njesi_Kodi" },
    { field: "SasiaPak", title: "SasiaPak" },
    { field: "Volumi", title: "Volumi" },
    { field: "DataSk", title: "DataSk" },
    { field: "Shumice", title: "Shumice" },
    { field: "Pakice", title: "Pakice" },
    { field: "Ngjyra_ID", title: "Ngjyra_ID" },
    { field: "Masa_ID", title: "Masa_ID" },
    { field: "Stina_ID", title: "Stina_ID" },
    { field: "Materiali_ID", title: "Materiali_ID" },
    { field: "Aktiv", title: "Aktiv" },
  ]);

  const [selectedColumns, setSelectedColumns] = useStorage(
    columns,
    "kolonat" + gridKey
  );

  const onColumnToggle = (event) => {
    let selectedColumns = event.value;
    let orderedSelectedColumns = columns.filter((col) =>
      selectedColumns.some((sCol) => sCol.title === col.title)
    );
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

  const header = (
    <>
      <div className="flex justify-between">
        <div
          style={{
            textAlign: "right",
          }}
        >
          {showHideColumns && (
            <>
              <MultiSelect
                disabled={disabled}
                value={selectedColumns}
                options={columns}
                optionLabel="title"
                onChange={onColumnToggle}
                style={{ width: "3em", height: "2em" }}
              />
            </>
          )}
        </div>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            disabled={disabled}
            style={{ height: "2em" }}
            value={globalFilterValue1}
            onChange={onGlobalFilterChange1}
            placeholder="Kerko"
            onClick={clearFilter1}
          />
        </span>
      </div>
    </>
  );

  const filterdColumns = showHideColumns ? selectedColumns : columns;

  const dynamicColumns = filterdColumns?.map((col, i) => {
    return (
      <Column
        style={{ height: "2.6rem" }}
        key={col?.field}
        sortable
        field={col?.field}
        header={col?.title}
      />
    );
  });

  return (
    <div
      className="bar_kod"
      onClick={() => {
        if (disabled) {
          setNdryshoKushtin(true);
        } else {
          setNdryshoKushtin(false);
        }
      }}
    >
      <div>
        <ButtonGroup size="xl" className="mb-2 flex flex-col gap-2 ">
          <Button
            className="p-1 border"
            onClick={(e) => {
              e.preventDefault();
              setDisabled(false);
            }}
          >
            <PostAddIcon />
            Shtim
          </Button>
          {/* <Button
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
          </Button> */}
          <Button
            className="p-1 border"
            onClick={(e) => {
              e.preventDefault();
            }}
            disabled={disabled}
          >
            <DeleteIcon />
            Fshije
          </Button>
          <Button
            className="p-1 border"
            onClick={(e) => {
              e.preventDefault();
            }}
            disabled={disabled}
          >
            <CheckIcon />
            Rregjistrim
          </Button>
          <Button
            className="p-1 border"
            onClick={(e) => {
              e.preventDefault();
              setDisabled(true);
            }}
            disabled={disabled}
          >
            <ClearIcon />
            Anullo
          </Button>
        </ButtonGroup>
      </div>

      <div
        className="card ml-2"
        onClick={() => {
          if (disabled) {
            setNdryshoKushtin(true);
          } else {
            setNdryshoKushtin(false);
          }
        }}
      >
        <DataTable
          size="small"
          gridKey="Llogari"
          header={header}
          selectionMode="single"
          scrollable
          scrollHeight="250px"
          virtualScrollerOptions={{ itemSize: 46 }}
          // value={rows}
          responsiveLayout="scroll"
        >
          {dynamicColumns}
        </DataTable>
      </div>
      <div className="card">
        <TabView>
          <TabPanel header="Klasifkime">
            <div
              className="flex border p-2 gap-3"
              onClick={() => {
                if (disabled) {
                  setNdryshoKushtin(true);
                } else {
                  setNdryshoKushtin(false);
                }
              }}
            >
              <div>
                <div
                  className="flex items-center"
                  onClick={() => {
                    if (disabled) {
                      setNdryshoKushtin(true);
                    } else {
                      setNdryshoKushtin(false);
                    }
                  }}
                >
                  <span
                    className="flex items-center"
                    style={{
                      border: "solid 1px #ddd",
                      backgroundColor: "#1971c2",
                      color: "#fff",
                    }}
                  >
                    <Origjina selektOrigjina={selektOrigjina} />
                  </span>

                  <Form.Select
                    disabled={disabled}
                    size="sm"
                    className=""
                    value={selektOrigjina}
                    onChange={(e) => {
                      setSelekOrigjina(e.target.value);
                    }}
                  >
                    <option label="Origjina" />
                    {data.Origjina?.map((list) => {
                      return (
                        <option value={list?.Kodi}>{list?.Pershkrim}</option>
                      );
                    })}
                  </Form.Select>
                </div>

                <div
                  className="flex items-center mt-2"
                  onClick={() => {
                    if (disabled) {
                      setNdryshoKushtin(true);
                    } else {
                      setNdryshoKushtin(false);
                    }
                  }}
                >
                  <span
                    className="flex items-center"
                    style={{
                      border: "solid 1px #ddd",
                      backgroundColor: "#1971c2",
                      color: "#fff",
                    }}
                  >
                    <Marka selektMarka={selektMarka} />
                  </span>

                  <Form.Select
                    disabled={disabled}
                    size="sm"
                    className=""
                    value={selektMarka}
                    onChange={(e) => {
                      setSelektMarka(e.target.value);
                    }}
                  >
                    <option label="Marka" />
                    {data.Marka?.map((list) => {
                      return (
                        <option value={list?.Kodi}>{list?.Pershkrim}</option>
                      );
                    })}
                  </Form.Select>
                </div>

                <div className="flex items-center mt-2">
                  <span
                    className="flex items-center"
                    style={{
                      border: "solid 1px #ddd",
                      backgroundColor: "#1971c2",
                      color: "#fff",
                    }}
                  >
                    <Gjinia selektGjinia={selektGjinia} />
                  </span>
                  <Form.Select
                    disabled={disabled}
                    size="sm"
                    className=""
                    value={selektGjinia}
                    onChange={(e) => {
                      setSelektGjinia(e.target.value);
                    }}
                  >
                    <option label="Gjinia" />
                    {data.Gjinia?.map((list) => {
                      return (
                        <option value={list?.Kodi}>{list?.Pershkrim}</option>
                      );
                    })}
                  </Form.Select>
                </div>

                <div
                  className="flex items-center mt-2"
                  onClick={() => {
                    if (disabled) {
                      setNdryshoKushtin(true);
                    } else {
                      setNdryshoKushtin(false);
                    }
                  }}
                >
                  <span
                    className="flex items-center"
                    style={{
                      border: "solid 1px #ddd",
                      backgroundColor: "#1971c2",
                      color: "#fff",
                    }}
                  >
                    <Sezoni selektSezoni={selektSezoni} />
                  </span>
                  <Form.Select
                    disabled={disabled}
                    size="sm"
                    className=""
                    value={selektSezoni}
                    onChange={(e) => {
                      setSelektSezoni(e.target.value);
                    }}
                  >
                    <option label="Sezoni" />
                    {data.Sezoni?.map((list) => {
                      return (
                        <option value={list?.Kodi}>{list?.Pershkrim}</option>
                      );
                    })}
                  </Form.Select>
                </div>

                <div
                  className="flex items-center mt-2"
                  onClick={() => {
                    if (disabled) {
                      setNdryshoKushtin(true);
                    } else {
                      setNdryshoKushtin(false);
                    }
                  }}
                >
                  <span
                    className="flex items-center"
                    style={{
                      border: "solid 1px #ddd",
                      backgroundColor: "#1971c2",
                      color: "#fff",
                    }}
                  >
                    <LlojiMallit selektLlojiMallit={selektLlojiMallit} />
                  </span>

                  <Form.Select
                    disabled={disabled}
                    size="sm"
                    className=""
                    value={selektLlojiMallit}
                    onChange={(e) => {
                      setSelektLlojiMallit(e.target.value);
                    }}
                  >
                    <option label="Lloji i mallit" />
                    {data.Lloji_Mallit?.map((list) => {
                      return (
                        <option value={list?.Kodi}>{list?.Pershkrim}</option>
                      );
                    })}
                  </Form.Select>
                </div>
              </div>
              <div>
                <div
                  className="flex items-center"
                  onClick={() => {
                    if (disabled) {
                      setNdryshoKushtin(true);
                    } else {
                      setNdryshoKushtin(false);
                    }
                  }}
                >
                  <span
                    className="flex items-center"
                    style={{
                      border: "solid 1px #ddd",
                      backgroundColor: "#1971c2",
                      color: "#fff",
                    }}
                  >
                    <Cilesia selektCilesia={selektCilesia} />
                  </span>

                  <Form.Select
                    disabled={disabled}
                    size="sm"
                    className=""
                    value={selektCilesia}
                    onChange={(e) => {
                      setSelektCilesia(e.target.value);
                    }}
                  >
                    <option label="Cilesia" />
                    {data.Cilesia?.map((list) => {
                      return (
                        <option value={list?.Kodi}>{list?.Pershkrim}</option>
                      );
                    })}
                  </Form.Select>
                </div>

                <div className="flex items-center mt-2">
                  <span
                    className="flex items-center"
                    style={{
                      border: "solid 1px #ddd",
                      backgroundColor: "#1971c2",
                      color: "#fff",
                    }}
                  >
                    <Ngjyra selektNgjyra={selektNgjyra} />
                  </span>

                  <Form.Select
                    disabled={disabled}
                    size="sm"
                    className=""
                    value={selektNgjyra}
                    onChange={(e) => {
                      setSelektNgjyra(e.target.value);
                    }}
                  >
                    <option label="Ngjyra" />
                    {data.Ngjyra?.map((list) => {
                      return (
                        <option value={list?.Id}>{list?.Pershkrim}</option>
                      );
                    })}
                  </Form.Select>
                </div>

                <div className="flex items-center mt-2">
                  <span
                    className="flex items-center"
                    style={{
                      border: "solid 1px #ddd",
                      backgroundColor: "#1971c2",
                      color: "#fff",
                    }}
                  >
                    <Masa selektMasa={selektMasa} />
                  </span>

                  <Form.Select
                    disabled={disabled}
                    size="sm"
                    className=""
                    value={selektMasa}
                    onChange={(e) => {
                      setSelektMasa(e.target.value);
                    }}
                  >
                    <option label="Masa" />
                    {data.Masa?.map((list) => {
                      return (
                        <option value={list?.Id}>{list?.Pershkrim}</option>
                      );
                    })}
                  </Form.Select>
                </div>

                <div className="flex items-center mt-2">
                  <span
                    className="flex items-center"
                    style={{
                      border: "solid 1px #ddd",
                      backgroundColor: "#1971c2",
                      color: "#fff",
                    }}
                  >
                    <Materiali selektMateriali={selektMateriali} />
                  </span>

                  <Form.Select
                    disabled={disabled}
                    size="sm"
                    className=""
                    value={selektMateriali}
                    onChange={(e) => {
                      setSelektMateriali(e.target.value);
                    }}
                  >
                    <option label="Materiali" />
                    {data.Materiali?.map((list) => {
                      return (
                        <option value={list?.Id}>{list?.Pershkrim}</option>
                      );
                    })}
                  </Form.Select>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel header="Fotografi">
            <p>Ska te dhena</p>
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
};

export default Barkode;
