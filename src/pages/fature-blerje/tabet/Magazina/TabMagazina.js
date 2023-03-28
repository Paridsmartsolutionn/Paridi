import { Autocomplete, Button, TextField } from "@mui/material";
import React from "react";
import Form from "react-bootstrap/Form";
import LaunchIcon from "@mui/icons-material/Launch";
import Magazina from "../../minimodal/Magazina";

const TabMagazina = ({
  disabled,
  toggleState,
  state,
  handleChange,
  fetchPost,
  magazina,
}) => {
  const mgz = [
    { label: "Magazina1", id: "1" },
    { label: "Magazina2", id: "2" },
    { label: "Magazina3", id: "3" },
  ];

  return (
    <div className={toggleState === 3 ? "content  active-content" : "content"}>
      <div className="grid gap-4">
        <Button className="shadow-sm w-2/3" variant="outlined" size="sm">
          <LaunchIcon />
          Flete Hyrje
        </Button>
        <div className="grid gap-2 grid-cols-2">
          <div className="bg-gray-100 rounded-tr-lg rounded-br-lg flex justify-center items-center relative">
            {/* //////////// */}
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={mgz}
              sx={{ width: "100%" }}
              size="small"
              renderInput={(params) => (
                <TextField {...params} label="Magazina" />
              )}
            />
            {/* ///////// MiniModal */}
            <div className="hover:scale-110 transition-all">
              <Magazina fetchMonedhat={fetchPost} />
            </div>
          </div>
          <div>
            <TextField
              disabled={disabled}
              type="date"
              label="Date"
              InputLabelProps={{
                shrink: true,
              }}
              value={state?.MagazinaData}
              onChange={(e) => handleChange("MagazinaData", e.target.value)}
              size="small"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabMagazina;
