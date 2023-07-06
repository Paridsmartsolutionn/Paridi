import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import Furnitore from "../../minimodal/Furnitore";
import Q from "../../minimodal/Q";

const TabFurnitore = ({
  toggleState,
  disabled,
  state,
  handleChange,
  fetchPost,
  handleFurnitorType,
  qytetet,
  furnitor,
  furnitoret,
}) => {
  return (
    <div className={toggleState === 1 ? "content  active-content" : "content"}>
      <div className="grid gap-2 grid-cols-2 ">
        <div className="bg-gray-100 rounded-tr-lg rounded-br-lg w-full flex justify-center items-center relative">
          {/* //////// */}
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={furnitoret}
            size="small"
            style={{ width: "100%" }}
            renderInput={(params) => (
              <TextField {...params} label="FurnitorID" />
            )}
          />
          {/* //////MiniModal */}
          <div className="hover:scale-110 transition-all">
            <Furnitore fetchMonedhat={fetchPost} />
          </div>
        </div>

        <TextField
          disabled={disabled}
          type="text"
          value={state?.Nipt}
          onChange={(e) => handleChange("Nipt", e.target.value)}
          label="Nipt"
          variant="outlined"
          size="small"
          style={{ width: "100%" }}
        />

        <TextField
          disabled={disabled}
          value={state?.furnitorId}
          onChange={(e) => handleChange("furnitorId", e.target.value)}
          label="Furnitor"
          variant="outlined"
          size="small"
          style={{ width: "100%" }}
        />

        <div className="flex justify-start items-center w-full relative bg-gray-100 rounded-tr-lg rounded-br-lg">
          {/* ////////////////// */}
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={furnitoret}
            size="small"
            style={{ width: "100%" }}
            renderInput={(params) => <TextField {...params} label="Qytetet" />}
          />
          {/* //////// MIniModal */}
          <div className="hover:scale-110 transition-all">
            <Q fetchMonedhat={fetchPost} qytetet={qytetet} />
          </div>
        </div>
        <textarea
          disabled={disabled}
          cols="38"
          rows="3"
          value={state?.shenim}
          onChange={(e) => handleChange("shenim", e.target.value)}
          placeholder="Shënim"
          className="shenim resize-none  mt-2 rounded-md"
        ></textarea>
      </div>
    </div>
  );
};

export default TabFurnitore;
