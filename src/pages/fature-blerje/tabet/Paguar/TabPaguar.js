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
    <div>
      <div
        className={toggleState === 2 ? "content  active-content" : "content"}
      >
        <div style={{ marginTop: "-1rem" }}>
          <div className="flex gap-4 mb-3">
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
              renderInput={(params) => (
                <TextField {...params} label="Arke/Banke" />
              )}
            />
          </div>
          <div className="flex gap-4">
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
              style={{ marginLeft: "0.5rem" }}
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
          </div>

          <div className="flex justify-end ">
            <span className="flex mr-2 ml-2 justify-center items-center">
              {" "}
              Ose per{" "}
            </span>

            <TextField
              className="mt-2"
              disabled={disabled}
              style={{ width: "5rem" }}
              type="number"
              size="small"
              value={state?.Afati}
              onChange={(e) => handleChange("Afati", e.target.value)}
            />
            <span className="flex ml-4 justify-center items-center"> Dite</span>
          </div>
          <div className="flex justify-center items-center relative">
            {/* ////// MiniModal */}
            <div
              className="absolute  hover:shadow-md hover:rotate-90 transition-all"
              style={{ left: 408, top: 20 }}
            >
              <Pergjegjes fetchMonedhat={fetchPost} />
            </div>
            {/* //////////// */}
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={menyrapageses}
              sx={{ width: "100%", marginTop: "0.5rem" }}
              size="small"
              renderInput={(params) => (
                <TextField {...params} label="Pergjegjes" />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabPaguar;
