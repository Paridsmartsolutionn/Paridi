import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import PrintoPdf from "../../../../components/ReactPDF/PrintoPdf";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ClassIcon from "@mui/icons-material/Class";
// import "../FatureBlerje.scss";
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
    <div style={{display:'flex',justifyContent:'space-between'}} >
      <ButtonGroup size="large" className="mb-2 ">
        <Button
          className="p-1 shadow-sm"
          onClick={(e) => {
            e.preventDefault();
            setDisabled(false);
          }}
        >
          <PostAddIcon /> 
        </Button>
        <Button className="p-1 shadow-sm" disabled={disabled}>
          <DeleteIcon /> 
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
