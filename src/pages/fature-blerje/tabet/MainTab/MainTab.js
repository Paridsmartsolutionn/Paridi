import React from "react";
import { TextField } from "@mui/material";
import Form from "react-bootstrap/Form";
import Monedhat from "../../minimodal/Monedhat";
import ModalList from "../../../../components/ListaArtikujve/ModalList";

const MainTab = ({
  disabled,
  state,
  handleChange,
  fetchPost,
  shtoArtikull,
  handleKursiType,
  monedhat,
}) => {
  return (
    <div className="grid gap-2 grid-cols-2">
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
        onChange={(e) => handleChange("NrOrigjine", e.target.value)}
        size="small"
      />

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

      <div className=" bg-gray-100 rounded-tr-lg rounded-br-lg flex justify-center items-center relative">
        {/* ////// MIniModal /////// */}

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
            return <option value={monedha.Kodi}>{monedha.Pershkrim}</option>;
          })}
        </Form.Select>
        <div className=" hover:scale-110 transition-all">
          <Monedhat fetchMonedhat={fetchPost} />
        </div>
      </div>

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
        onChange={(e) => handleChange("NrSerial", e.target.value)}
        variant="outlined"
        size="small"
      />

      <div className="flex">
        <ModalList
          disabled={disabled}
          shtoArtikull={!disabled && shtoArtikull}
        />
      </div>
    </div>
  );
};

export default MainTab;
