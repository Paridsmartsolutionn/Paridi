import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import Klasifikim from "../../minimodal/Klasifikim";
import Klasifikim2 from "../../../paneliIartikujve/MiniModalArtikuj/Klasifikime/Klasifikim2";
import Klasifikim3 from "../../../paneliIartikujve/MiniModalArtikuj/Klasifikime/Klasifikim3";
import Klasifikim4 from "../../../paneliIartikujve/MiniModalArtikuj/Klasifikime/Klasifikim4";

const TabKLS = ({
  toggleState,
  disabled,
  state,
  handleChange,
  klasifikim1,
  klasifikim2,
  klasifikim3,
  klasifikim4,
  fetchPost,
}) => {
  const kls = [
    { label: "Klasifikim1", id: 1 },
    { label: "Klasifikim2", id: 2 },
    { label: "Klasifikim3", id: 3 },
    { label: "Klasifikim4", id: 4 },
  ];

  return (
    <div>
      <div
        className={toggleState === 5 ? "content  active-content" : "content"}
      >
        <div className="flex flex-col gap-2 w-80">
          <div className="relative">
            {/* /////// MiniModal */}
            <div
              className="absolute  hover:shadow-md hover:rotate-90 transition-all"
              style={{ left: 310, top: 11.5 }}
            >
              <Klasifikim fetchMonedhat={fetchPost} />
            </div>
            {/* //////// */}
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={kls}
              sx={{ width: "100%" }}
              size="small"
              renderInput={(params) => (
                <TextField {...params} label="Klasifikim1" />
              )}
            />
          </div>

          <div className="relative">
            {/* /////// MiniModal */}
            <div
              className="absolute  hover:shadow-md hover:rotate-90 transition-all"
              style={{ left: 310, top: 11.5 }}
            >
              <Klasifikim2 fetchMonedhat={fetchPost} />
            </div>
            {/* //////////// */}
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={kls}
              sx={{ width: "100%" }}
              size="small"
              renderInput={(params) => (
                <TextField {...params} label="Klasifikim2" />
              )}
            />
          </div>
          <div className="relative">
            {/* ////// MiniModal */}
            <div
              className="absolute  hover:shadow-md hover:rotate-90 transition-all"
              style={{ left: 310, top: 11.5 }}
            >
              <Klasifikim3 fetchMonedhat={fetchPost} />
            </div>
            {/* //////////// */}
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={kls}
              sx={{ width: "100%" }}
              size="small"
              renderInput={(params) => (
                <TextField {...params} label="Klasifikim3" />
              )}
            />
          </div>
          <div className="relative">
            {/* /////// MiniModal */}
            <div
              className="absolute  hover:shadow-md hover:rotate-90 transition-all"
              style={{ left: 310, top: 11.5 }}
            >
              <Klasifikim4 fetchMonedhat={fetchPost} />
            </div>
            {/* /////////// */}
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={kls}
              sx={{ width: "100%" }}
              size="small"
              renderInput={(params) => (
                <TextField {...params} label="Klasifikim4" />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabKLS;
