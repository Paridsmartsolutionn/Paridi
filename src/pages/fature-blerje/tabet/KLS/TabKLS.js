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
    <div className={toggleState === 5 ? "content  active-content" : "content"}>
      <div className="grid w-72 gap-2 grid-cols-1">
        <div className="bg-gray-100 rounded-tr-lg rounded-br-lg flex justify-center items-center relative">
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
          {/* /////// MiniModal */}
          <div className="hover:scale-110 transition-all">
            <Klasifikim fetchMonedhat={fetchPost} />
          </div>
        </div>

        <div className="bg-gray-100 rounded-tr-lg rounded-br-lg flex justify-center items-center relative">
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
          {/* /////// MiniModal */}
          <div className="hover:scale-110 transition-all">
            <Klasifikim2 fetchMonedhat={fetchPost} />
          </div>
        </div>
        <div className="bg-gray-100 rounded-tr-lg rounded-br-lg flex justify-center items-center relative">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={kls}
            sx={{ width: "100%" }}
            size="small"
            renderInput={(params) => (
              <TextField {...params} label="Klasifikim3" />
            )}
          />{" "}
          {/* ////// MiniModal */}
          <div className="hover:scale-110 transition-all">
            <Klasifikim3 fetchMonedhat={fetchPost} />
          </div>
        </div>
        <div className="bg-gray-100 rounded-tr-lg rounded-br-lg flex justify-center items-center relative">
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
          {/* /////// MiniModal */}
          <div className="hover:scale-110 transition-all">
            <Klasifikim4 fetchMonedhat={fetchPost} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabKLS;
