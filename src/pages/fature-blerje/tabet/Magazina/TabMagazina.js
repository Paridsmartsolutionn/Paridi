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
    <div>
      <div
        className={toggleState === 3 ? "content  active-content" : "content"}
      >
        <Button className="shadow-sm" variant="outlined" size="sm">
          <LaunchIcon />
          Flete Hyrje
        </Button>
        <div className="flex flex-col justify-center items-center relative">
          {/* ///////// MiniModal */}
          <div
            className="absolute  hover:shadow-md hover:rotate-90 transition-all"
            style={{ left: 153, top: 28 }}
          >
            <Magazina fetchMonedhat={fetchPost} />
          </div>
          {/* //////////// */}
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={mgz}
            sx={{ width: "100%", marginTop: "1rem" }}
            size="small"
            renderInput={(params) => <TextField {...params} label="Magazina" />}
          />

          <div>
            <TextField
              className="mt-2  "
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
