import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import Form from "react-bootstrap/Form";
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
    <div>
      {" "}
      <div
        className={toggleState === 1 ? "content  active-content" : "content"}
      >
        <div className="flex gap-8 ">
          <div className="flex flex-col">
            <TextField
              disabled={disabled}
              value={state?.furnitorId}
              onChange={(e) => handleChange("furnitorId", e.target.value)}
              label="FurnitorId"
              variant="outlined"
              size="small"
            />

            <div className="flex justify-center items-center relative">
              {/* //////MiniModal */}
              <div
                className="absolute  hover:shadow-md hover:rotate-90 transition-all"
                style={{ left: 213, top: 28 }}
              >
                <Furnitore fetchMonedhat={fetchPost} />
              </div>
              {/* //////// */}
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={furnitoret}
                sx={{ width: "100%", marginTop: "1rem" }}
                size="small"
                renderInput={(params) => (
                  <TextField {...params} label="Furnitor" />
                )}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <TextField
              disabled={disabled}
              type="text"
              value={state?.Nipt}
              onChange={(e) => handleChange("Nipt", e.target.value)}
              label="Nipt"
              variant="outlined"
              size="small"
            />

            <div className="flex justify-start items-center relative">
              {/* //////// MIniModal */}
              <div
                className="absolute  hover:shadow-md hover:rotate-90 transition-all"
                style={{ left: 289, top: 28 }}
              >
                <Q fetchMonedhat={fetchPost} qytetet={qytetet} />
              </div>
              {/* ////////////////// */}
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={furnitoret}
                sx={{ width: "100%", marginTop: "1rem" }}
                size="small"
                renderInput={(params) => (
                  <TextField {...params} label="Qytetet" />
                )}
              />
            </div>

            <textarea
              // fullWidth
              disabled={disabled}
              cols="38"
              rows="3"
              value={state?.shenim}
              onChange={(e) => handleChange("shenim", e.target.value)}
              placeholder="Shenim"
              className="shenim resize-none mt-2 rounded-md"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabFurnitore;
