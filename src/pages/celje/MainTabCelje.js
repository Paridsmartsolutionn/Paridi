import React from "react";
import { TextField } from "@mui/material";
import Form from "react-bootstrap/Form";
// import Monedhat from "../../minimodal/Monedhat";
// import ModalList from "../../../../components/ListaArtikujve/ModalList";

const MainTab = ({
  disabled,
  state,
  handleChange,
  fetchPost,
  shtoArtikull,
  handleKursiType,
}) => {
  return (
    <div className="grid gap-2 grid-cols-2">
      <TextField
        fullWidth
        disabled={disabled}
        value={state?.Kodi}
        type="text"
        variant="outlined"
        label="Kodi"
        onChange={(e) => handleChange("Kodi", e.target.value)}
        size="small"
      />

      <TextField
        disabled={disabled}
        type="text"
        label="Pershkrimi"
        value={state?.Cmimi}
        onChange={(e) => handleChange("Pershkrimi", e.target.value)}
        variant="outlined"
        size="small"
        className="relative"
      />

      <div className=" bg-gray-100 rounded-tr-lg rounded-br-lg flex justify-center items-center relative">
        <TextField
          disabled={disabled}
          type="text"
          label="Nipt"
          value={state?.Kursi}
          onChange={(e) => handleChange("Nipt", e.target.value)}
          variant="outlined"
          size="small"
          className="relative"
        />
      </div>

      <TextField
        disabled={disabled}
        value={state?.Nr}
        type="text"
        label="Llogari"
        variant="outlined"
        onChange={(e) => handleChange("Llogari", e.target.value)}
        size="small"
      />

      <TextField
        disabled={disabled}
        value={state?.NrSerial}
        Konfigurim
        type="text"
        label="Document"
        onChange={(e) => handleChange("Document", e.target.value)}
        variant="outlined"
        size="small"
      />

      <div className="flex">
        <TextField
          disabled={disabled}
          value={state?.NrSerial}
          Konfigurim
          type="text"
          label="Tip.Cmimi"
          onChange={(e) => handleChange("Tip.Cmimi", e.target.value)}
          variant="outlined"
          size="small"
        />
      </div>
    </div>
  );
};

export default MainTab;
