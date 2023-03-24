import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import PrintoPdf from "../../../components/ReactPDF/PrintoPdf";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ClassIcon from "@mui/icons-material/Class";
import "../FatureBlerje.scss";
const PaneliTabeve = ({
  disabled,
  setDisabled,
  toggleState,
  state,
  defaultState,
  setState,
  rows,
  adresa1,
  nipt1,
  toggleTab,
  aprovoFature,
  anulloFatureBlerje,
}) => {
  return (
    <div className=" paneli-tabeve  ">
      <ButtonGroup size="xl" className="mb-2 ">
        <Button
          className="p-1 shadow-sm"
          onClick={(e) => {
            e.preventDefault();
            setDisabled(false);
          }}
        >
          <PostAddIcon /> Shtim
        </Button>
        <Button className="p-1 shadow-sm" disabled={disabled}>
          <DeleteIcon /> Fshije
        </Button>
        <Button
          className="p-1 shadow-sm"
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
          className="p-1 shadow-sm"
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
  );
};

export default PaneliTabeve;
