import {
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React from "react";
import Form from "react-bootstrap/Form";
import Departamenti from "../../minimodal/Departamenti";
import Transportues from "../../minimodal/Transportues";
import Veprime from "../../minimodal/Veprime";

const TabTjera = ({
  toggleState,
  disabled,
  state,
  handleChange,
  veprime,
  fetchPost,
  departamenti,
  transportuesi,
}) => {
  const veprimet = [
    { label: "Euro", id: "EU" },
    { label: "Dolla", id: "USD" },
    { label: "Pound", id: "PD" },
  ];

  return (
    <div>
      <div
        className={toggleState === 4 ? "content  active-content" : "content"}
      >
        <div className="flex">
          <div className="relative flex flex-col gap-2.5 mr-8">
            {/* ////// MiniModal */}
            <div
              className="absolute  hover:shadow-md hover:rotate-90 transition-all"
              style={{ left: 213, top: 12 }}
            >
              <Veprime />
            </div>
            {/* ///////// */}

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={veprimet}
              sx={{ width: "100%" }}
              size="small"
              renderInput={(params) => (
                <TextField {...params} label="Veprime" />
              )}
            />

            <div className="relative">
              {/* ////// MiniModal */}
              <div
                className="absolute  hover:shadow-md hover:rotate-90 transition-all"
                style={{ left: 213, top: 12 }}
              >
                <Departamenti fetchMonedhat={fetchPost} />
              </div>
              {/* /////////// */}
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={veprimet}
                sx={{ width: "100%" }}
                size="small"
                renderInput={(params) => (
                  <TextField {...params} label="Departamenti" />
                )}
              />
              <div></div>
            </div>
            <div className="relative">
              {/* ////// MiniModal */}
              <div
                className="absolute  hover:shadow-md hover:rotate-90 transition-all"
                style={{ left: 213, top: 12 }}
              >
                <Transportues fetchMonedhat={fetchPost} />
              </div>
              {/* //////// */}
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={veprimet}
                sx={{ width: "100%" }}
                size="small"
                renderInput={(params) => (
                  <TextField {...params} label="Transportuesi" />
                )}
              />
            </div>

            <TextField
              disabled={disabled}
              type="text"
              label="Nipt Transportuesi"
              value={state?.NiptTransport}
              onChange={(e) => handleChange("NiptTransport", e.target.value)}
              size="small"
            />
          </div>

          <div className="flex flex-col gap-2.5">
            <TextField
              disabled={disabled}
              type="date"
              value={state?.Deklarimit}
              label="Data e deklarimit"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleChange("Deklarimit", e.target.value)}
              size="small"
            />
            <FormControlLabel
              control={
                <Checkbox
                  disabled={disabled}
                  type="checkbox"
                  size="small"
                  value={state?.Import}
                  onChange={(e) => handleChange("Import", e.target.checked)}
                />
              }
              label="Import"
            />
            <Button
              className="hover:shadow-md shadow-sky-600"
              variant="outlined"
            >
              Shperndaje
            </Button>

            <TextField
              disabled={disabled}
              type="text"
              label="Targa"
              value={state?.Targa}
              onChange={(e) => handleChange("Targa", e.target.value)}
              size="small"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabTjera;
