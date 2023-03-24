import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";
import Switch from "@mui/material/Switch";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

const Q = ({ fetchUpdate, qytetet }) => {
  const defaultState = {
    Kodi: "",
    Pershkrim: "",
  };

  const [openFurnitor, setOpenFurnitor] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [state, setState] = useState(defaultState);
  const [selectedProduct1, setSelectedProduct1] = useState(null);

  const [columns, setColumns] = useState([
    { field: "Kodi", title: "Kodi" },
    { field: "Pershkrim", title: "Pershkrim" },
  ]);

  const handleChange = (key, value) => {
    setState((state) => {
      return {
        ...state,
        [key]: value,
      };
    });
  };

  const submitHanlder = () => {
    try {
      axios.post(`${process.env.REACT_APP_API_KEY}/tjera/shtet`, {
        Kodi: state.Kodi,
        Pershkrim: state.Pershkrim,
      });

      setTimeout(() => {
        fetchUpdate();
      }, 1000);
    } catch (error) {}
  };

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

  const [checked, setChecked] = useState(false);
  const [check, setCheck] = useState(false);

  const swichCheck = (e) => {
    setChecked(e.target.checked);
  };

  const changeCheck = () => {
    if (check === false) {
      setCheck(true);
    } else if (check) {
      setCheck(false);
      setState(defaultState);
    }
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
      return <Column key={column.field} colSpan={1}></Column>;
    }

    return textEditor(options, col);
  };

  const textEditor = (options, col) => {
    return check ? (
      <InputText
        disabled={disabled}
        className="cursor-pointer inp"
        type={col?.fieldType ?? "text"}
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    ) : (
      <InputText
        disabled={() => setDisabled(true)}
        className="cursor-pointer inp"
        type={col?.fieldType ?? "text"}
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  const dynamicColumns = columns.map((col, i) => {
    return check ? (
      <Column
        sortable
        editor={(options) => cellEditor(options, col)}
        onCellEditComplete={onCellEditComplete}
        key={col.field}
        field={col.field}
        header={col.title}
      />
    ) : (
      <Column key={col.field} sortable field={col.field} header={col.title} />
    );
  });

  return (
    <form onSubmit={(e) => submitHanlder(e)}>
      <div
        fontSize="small"
        className="cursor-pointer -rotate-90 bg-sky-600 text-white pl-1 pr-1 z-50 text-xs tracking-widest rounded-b-md"
        onClick={() => onClick("displayResponsive")}
      >
        Shto
      </div>

      <Dialog
        header="Qytetet"
        visible={displayResponsive}
        onHide={() => onHide("displayResponsive")}
        breakpoints={{ "960px": "75vw" }}
        style={{ width: "30vw" }}
      >
        <div className="mt-2 border-t p-1">
          <ButtonGroup size="xl" className="mb-2">
            <Button
              className="p-1.5"
              onClick={(e) => {
                e.preventDefault();
                setDisabled(false);
              }}
            >
              <PostAddIcon /> Shtim
            </Button>
            <Button className="p-1.5" disabled={disabled}>
              <DeleteIcon /> Fshije
            </Button>
            <Button
              className="p-1.5"
              onClick={(e) => {
                e.preventDefault();
                setState(defaultState);
                setDisabled(true);
                setChecked(false);
                setCheck(false);
              }}
              disabled={disabled}
            >
              <ClearIcon />
              Anullim
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
              Rregjistrim
            </Button>
          </ButtonGroup>
        </div>

        <div className="border p-2">
          <div className="flex items-center gap-2">
            <TextField
              className="mt-2"
              disabled={disabled}
              type="text"
              label="Kodi"
              inputProps={{ maxLength: 3 }}
              value={state?.Kodi}
              onChange={(e) => handleChange("Kodi", e.target.value)}
              size="small"
            />

            <TextField
              disabled={disabled}
              type="text"
              size="small"
              label="Pershkrim"
              value={state?.Pershkrim}
              onChange={(e) => handleChange("Pershkrim", e.target.value)}
              className="mt-2"
            />
          </div>

          <div>
            <div className="mt-2">
              <Switch
                onClick={changeCheck}
                onChange={swichCheck}
                checked={checked}
                disabled={disabled}
                size="small"
              />
              <span style={{ color: "#1971c2" }}>Modifiko</span>
            </div>
            {check ? (
              <div className="card">
                <DataTable
                  editMode="cell"
                  selectionMode="single"
                  selection={selectedProduct1}
                  onSelectionChange={(e) => setSelectedProduct1(e.value)}
                  size="small"
                  scrollHeight="10rem"
                  value={qytetet}
                  responsiveLayout="scroll"
                >
                  {dynamicColumns}
                </DataTable>
              </div>
            ) : (
              <div className="card ">
                <DataTable
                  selectionMode="single"
                  selection={selectedProduct1}
                  onSelectionChange={(e) => setSelectedProduct1(e.value)}
                  size="small"
                  scrollHeight="10rem"
                  value={qytetet}
                  responsiveLayout="scroll"
                >
                  {dynamicColumns}
                </DataTable>
              </div>
            )}
          </div>
        </div>
      </Dialog>
    </form>
  );
};

export default Q;
