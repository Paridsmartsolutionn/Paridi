import React, { useState, useRef } from "react";
import moment from "moment/moment";
import { Button, Typography } from "@mui/material";
import { OverlayPanel } from "primereact/overlaypanel";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import "./print.css";
import PrintoFblerje from "../FaqetEprintimit/PrintoFblerje";
import { PrintSharp } from "@mui/icons-material";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Popover from "@mui/material/Popover";
import { ReactToPrint, useReactToPrint } from "react-to-print";
import TotalFooter from "../FaqetEprintimit/TotalFooter";

const PrintoPdf = ({ rows, state, adresa1, nipt1 }) => {
  const Nr = state?.Nr;
  const Data = state?.data;
  const NrSerial = state?.NrSerial;
  const Nipt = state?.Nipt;
  const Shenim = state?.Shenim;
  const Qytetet = state?.Qytetet;
  const EmrFurnitopri = state?.furnitorType;
  // console.log({EmrFurnitopri})
  const Adresa1 = adresa1;
  const Nipt1 = nipt1;
  const op = useRef(null);

  const colonatEprintimit = [
    { field: "Kodi", title: "Kodi" },
    { field: "Pershkrim", title: "Pershkrim" },
    { field: "Sasia", title: "Sasia" },
    { field: "Njesi_Kodi", title: "Njesi_Kodi" },
    { field: "Cmimi", title: "Cmimi" },
    { field: "Skonto_Vlera", title: "Skonto_Vlera" },
    { field: "Vlera_Pa_Tvsh", title: "Vlera_Pa_Tvsh" },
    { field: "Cmimi_pa_TVSH", title: "Cmimi_pa_TVSH" },
    { field: "Tvsh", title: "Tvsh" },
    { field: "Total", title: "Total" },
  ];

  const dynamicColumns = colonatEprintimit.map((col, i) => {
    return (
      <Column
        key={col.field}
        field={col.field}
        header={col.title.split("_").join(" ")}
      />
    );
  });

  const total = rows?.map((total) => {
    return total.Total;
  });
  const TvshVlera = rows?.map((tvshvlere) => {
    return tvshvlere.Tvsh_Vlera;
  });
  const skontoVlera = rows?.map((skontovlere) => {
    return skontovlere.Skonto_Vlera;
  });
  const vleraPaTvsh = rows?.map((vlerepaskonto) => {
    return vlerepaskonto.Vlera_Pa_Tvsh;
  });

  let newTot = total.reduce(function (index, val) {
    return index + val;
  }, 0);
  let newTvshVlera = TvshVlera.reduce(function (index, val) {
    return index + val;
  }, 0);
  let newskontoVlera = skontoVlera.reduce(function (index, val) {
    return index + val;
  }, 0);
  let newvleraPaTvsh = vleraPaTvsh.reduce(function (index, val) {
    return index + val;
  }, 0);

  const componentsRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentsRef.current,
  });

  return (
    <div>
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <Button {...bindTrigger(popupState)}>
              <PrintSharp />
            </Button>
            <Popover
              style={{ marginTop: "15px" }}
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography
                style={{
                  padding: "1rem",
                  display: "grid",
                  flexDirection: "row",
                }}
              >
                <Button
                  style={{ color: "#1971c2", cursor: "pointer", margin: "5px" }}
                  onClick={handlePrint}
                >
                  {" "}
                  <div style={{ fontSize: "12px" }}>Printo Fature Blerje</div>
                  <PrintSharp style={{ blockSize: "17px" }} />{" "}
                </Button>
                <Button
                  style={{ color: "#1971c2", cursor: "pointer", margin: "5px" }}
                >
                  {" "}
                  <div style={{ fontSize: "12px" }}>Printo Fature Blerje 2</div>
                  <PrintSharp style={{ blockSize: "17px" }} />{" "}
                </Button>
                {/* <Button style={{color:"#1971c2",cursor:"pointer" ,margin:'5px'}} ><div style={{fontSize:'12px'}}>Printo Faturen 3
              </div><PrintSharp style={{blockSize:'17px'}}/> </Button>
            <Button style={{color:"#1971c2",cursor:"pointer" ,margin:'5px'}} ><div style={{fontSize:'12px'}}>Printo Faturen 4
              </div><PrintSharp style={{blockSize:'17px'}}/> </Button> */}
              </Typography>
            </Popover>
          </div>
        )}
      </PopupState>

      <div ref={componentsRef} className="print">
        <PrintoFblerje
          NrSerial={NrSerial}
          Nr={Nr}
          Adresa1={Adresa1}
          Nipt1={Nipt1}
          Nipt={Nipt}
          Qytetet={Qytetet}
          EmrFurnitori={EmrFurnitopri}
          Shenim={Shenim}
          Data={Data}
        />

        <DataTable
          className="m-6"
          size="small"
          showGridlines
          value={rows}
          responsiveLayout="scroll"
        >
          {dynamicColumns}
        </DataTable>

        <TotalFooter
          newTot={newTot}
          newTvshVlera={newTvshVlera}
          newskontoVlera={newskontoVlera}
          newvleraPaTvsh={newvleraPaTvsh}
          className="m-2"
        />
      </div>
    </div>
  );
};

export default PrintoPdf;
