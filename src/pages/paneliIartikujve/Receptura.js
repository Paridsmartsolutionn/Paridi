import React, { useState } from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import ButtonGroup from "@mui/material/ButtonGroup";
import useStorage from "../../hooks/useStorage";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { Checkbox } from "primereact/checkbox";
import { MultiSelect } from "primereact/multiselect";
// import { Dropdown } from 'primereact/dropdown';
// import AddIcon from '@mui/icons-material/Add';
import Form from "react-bootstrap/Form";
import GrupRecpture from "./MiniModalArtikuj/Receptura/GrupRecpture";
import ModalTable from "./MiniModalArtikuj/Receptura/ModalTable";
import ChangeCircleRoundedIcon from "@mui/icons-material/ChangeCircleRounded";
const Receptura = ({
  data,
  gridKey = true,
  showHideColumns = true,
  selektGrup,
  setSelektGrup,
  disabled,
  setDisabled,
  setNdryshoKushtin,
}) => {
  const [globalFilterValue1, setGlobalFilterValue1] = useState("");
  const [filters1, setFilters1] = useState(null);
  const [rows, setRows] = useState([]);

  const [columns, setColumns] = useState([
    { field: "Kodi", title: "Kodi" },
    { field: "Njesi_Kodi", title: "Njesi_Kodi" },
    { field: "Sasia", title: "Sasia" },
    { field: "Pershkrim", title: "Pershkrim" },
    { field: "Volumi", title: "Volumi" },
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

  const cellEditor = (options) => {
    const column = options?.column;
    if (column?.props?.editColumn === false) {
      return <Column key={column.field} colSpan={1}></Column>;
    }

    return textEditor(options);
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
          Volumi: 0,
          Sasia: 0,
        },
        ...rows,
      ];
    });
  };

  const textEditor = (options) => {
    return (
      <>
        <InputText
          className="cursor-pointer inp"
          type="text"
          value={options.value}
          onChange={(e) => options.editorCallback(e.target.value)}
        />
      </>
    );
  };
  let emptyProduct = {
    Id: null,
    Kodi: "",
    Pershkrimi: null,
    Barkodi: "",
    Tvsh: null,
    Total: 0,
    Njesi_Kodi: 0,
    Cmimi: 0,
    // inventoryStatus: 'INSTOCK'
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
              <div className="flex items-center gap-2">
                <MultiSelect
                  disabled={disabled}
                  value={selectedColumns}
                  options={columns}
                  optionLabel="title"
                  onChange={onColumnToggle}
                  style={{ width: "3em", height: "2em" }}
                />

                <ModalTable
                  columns={columns}
                  disabled={disabled}
                  shtoArtikull={shtoArtikull}
                />
              </div>
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

  // const addRow = () => {
  //   let newRow = {}
  //   console.log({newRow})
  //     columns.forEach((column) => {
  //       if(column){
  //         newRow[column.field] = null

  //         }
  //       else{
  //         newRow[column.Id] = null

  //       }
  //     })
  //     setRows((rows) => {

  //       return [newRow, ...rows]

  //     })
  // }

  const dynamicColumns = filterdColumns?.map((col, i) => {
    return (
      <Column
        editor={(options) => cellEditor(options)}
        onCellEditComplete={onCellEditComplete}
        style={{ height: "2.6rem" }}
        key={col?.field}
        sortable
        field={col?.field}
        header={col?.title}
      />
    );
  });

  // const [checked, setChecked] = useState(false);
  const [cities, setCities] = useState([]);

  const onCityChange = (e) => {
    let selectedCities = [...cities];

    if (e.checked) selectedCities.push(e.value);
    else selectedCities.splice(selectedCities.indexOf(e.value), 1);

    setCities(selectedCities);
  };

  return (
    <div>
      <div className="flex items-center border p-1 gap-5 mb-2">
        <div>
          <div
            onClick={() => {
              if (disabled) {
                setNdryshoKushtin(true);
              } else {
                setNdryshoKushtin(false);
              }
            }}
            className="flex items-center"
          >
            <Checkbox
              disabled={disabled}
              inputId="cb3"
              value="I perbere"
              onChange={onCityChange}
              checked={cities.includes("I perbere")}
            ></Checkbox>
            <label
              style={{ color: "#1971c2", marginLeft: "5px" }}
              htmlFor="cb4"
              className="p-checkbox-label"
            >
              I perbere
            </label>
          </div>

          <div
            onClick={() => {
              if (disabled) {
                setNdryshoKushtin(true);
              } else {
                setNdryshoKushtin(false);
              }
            }}
            className="flex items-center"
          >
            <Checkbox
              disabled={disabled}
              inputId="cb3"
              value="I perbere ne magazine"
              onChange={onCityChange}
              checked={cities.includes("I perbere ne magazine")}
            ></Checkbox>
            <label
              style={{ color: "#1971c2", marginLeft: "5px" }}
              htmlFor="cb4"
              className="p-checkbox-label"
            >
              I perbere ne magazine
            </label>
          </div>
        </div>

        <div
          onClick={() => {
            if (disabled) {
              setNdryshoKushtin(true);
            } else {
              setNdryshoKushtin(false);
            }
          }}
          className="flex items-center"
        >
          <Form.Select
            disabled={disabled}
            size="sm"
            className=""
            value={selektGrup}
            onChange={(e) => {
              setSelektGrup(e.target.value);
            }}
          >
            <option label="Grup" />
            {data.Grup?.map((list) => {
              return <option value={list?.Kodi}>{list?.Pershkrim}</option>;
            })}
          </Form.Select>

          <span
            className="flex items-center"
            style={{
              border: "solid 1px #ddd",
              backgroundColor: "#1971c2",
              color: "#fff",
            }}
          >
            <GrupRecpture data={data} />
          </span>
        </div>
      </div>

      <div className="receptura mt-1">
        <div
          onClick={() => {
            if (disabled) {
              setNdryshoKushtin(true);
            } else {
              setNdryshoKushtin(false);
            }
          }}
        >
          <ButtonGroup size="xl" className="mb-2 flex flex-col gap-2">
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
            <Button
              className="p-1"
              onClick={(e) => {
                e.preventDefault();
              }}
              disabled={disabled}
              type="submit"
            >
              <ChangeCircleRoundedIcon />
              Modifikim
            </Button>
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
            scrollHeight="200px"
            virtualScrollerOptions={{ itemSize: 46 }}
            value={rows}
            setRows={setRows}
            responsiveLayout="scroll"
          >
            {dynamicColumns}
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default Receptura;
