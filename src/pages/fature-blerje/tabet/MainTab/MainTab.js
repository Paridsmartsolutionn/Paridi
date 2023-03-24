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
    <div>
      <div className="grid gap-2">
        <div className="flex justify-center items-center gap-2">
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
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col gap-2 ">
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

            <div className="flex justify-center items-center relative">
              {/* ////// MIniModal /////// */}
              <div
                className="absolute  hover:scale-110 transition-all"
                style={{ left: 173, top: 5 }}
              >
                <Monedhat fetchMonedhat={fetchPost} />
              </div>
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
                  return (
                    <option value={monedha.Kodi}>{monedha.Pershkrim}</option>
                  );
                })}
              </Form.Select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
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
          </div>
        </div>

        <div className="flex">
          <ModalList
            disabled={disabled}
            shtoArtikull={!disabled && shtoArtikull}
          />
        </div>
      </div>
    </div>
  );
};

export default MainTab;
