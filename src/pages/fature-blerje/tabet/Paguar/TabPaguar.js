import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import Form from "react-bootstrap/Form";
import Pergjegjes from "../../minimodal/Pergjegjes";

const TabPaguar = ({
  toggleState,
  disabled,
  handleChange,
  fetchPost,
  state,
  menyraPageses,
  arkeBanke,
  pergjegjes,
}) => {
  const menyrapageses = [
    { label: "Euro", id: "EU" },
    { label: "Dolla", id: "USD" },
    { label: "Pound", id: "PD" },
  ];

  return (
    <div className={toggleState === 2 ? "content  active-content" : "content"}>
      <div className="grid gap-2 grid-cols-2">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={menyrapageses}
          sx={{ width: "100%", marginTop: "0.5rem" }}
          size="small"
          renderInput={(params) => <TextField {...params} label="Menyra" />}
        />

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={menyrapageses}
          sx={{ width: "100%", marginTop: "0.5rem" }}
          size="small"
          renderInput={(params) => <TextField {...params} label="Arke/Banke" />}
        />

        <TextField
          label="Paguar"
          fullWidth
          disabled={disabled}
          type="number"
          size="small"
          variant="outlined"
          value={state?.Paguar}
          onChange={(e) => handleChange("Paguar", e.target.value)}
        />
        <TextField
          disabled={disabled}
          fullWidth
          type="date"
          label="Afati"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          value={state?.AfatiData}
          onChange={(e) => handleChange("AfatiData", e.target.value)}
          size="small"
        />

        <div className="flex gap-2 text-center items-center  ">
          <span>Ose për</span>
          <input
            className="rounded-md w-20 border"
            disabled={disabled}
            type="number"
            value={state?.Afati}
            onChange={(e) => handleChange("Afati", e.target.value)}
          />
          <span>ditë</span>
        </div>
        <div className=" rounded-tr-lg rounded-br-lg flex justify-center items-center relative">
          {/* //////////// */}
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={menyrapageses}
            sx={{ width: "100%" }}
            size="small"
            renderInput={(params) => (
              <TextField {...params} label="Përgjegjës" />
            )}
          />
          {/* ////// MiniModal */}
          <div className="hover:scale-110 transition-all">
            <Pergjegjes fetchMonedhat={fetchPost} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabPaguar;
