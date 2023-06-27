import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const DataTableS = () => {
  const [columns, setColumns] = useState([
    { field: "*", title: "*" },
    { field: <QuestionMarkIcon />, title: <QuestionMarkIcon /> },
    { field: "Kodi", title: "Kodi" },
    { field: "BarKod", title: "BarKod" },
    { field: "Pershkrim", title: "Pershkrim" },
    { field: "Njesi_Kodi", title: "Njesi_Kodi" },
    { field: "Sasia_Print", title: "Sasia_Print" },
    { field: "Sasia", title: "Sasia" },
    { field: "Cmimi_pa_TVSH", title: "Cmimi_pa_TVSH" },
    { field: "Cmimi", title: "Cmimi" },
    { field: "Tvsh_Vlera", title: "Tvsh_Vlera" },
    { field: "Skonto_Vlera", title: "Skonto_Vlera" },
    { field: "DateGarancie", title: "DateGarancie" },
    { field: "NrSerik", title: "NrSerik" },
    { field: "CmimiShites", title: "CmimiShites" },
    { field: "CmimiPeshaKG", title: "CmimiPeshaKG" },
    { field: "Vlera_Pa_Tvsh", title: "Vlera_Pa_Tvsh" },
    { field: "SasiaPak", title: "SasiaPak" },
    { field: "DataSk", title: "DataSk" },
    { field: "CmimiShitesMarzhi", title: "CmimiShitesMarzhi" },
    { field: "Volumi", title: "Volumi" },
    { field: "Tipi", title: "Tipi" },
    { field: "TipVlere_ID", title: "TipVlere_ID" },
    { field: "TipPaketimi_Kodi", title: "TipPaketimi_Kodi" },
    { field: "LlojiMallit_ID", title: "LlojiMallit_ID" },
    { field: "Dep_Kodi", title: "Dep_Kodi" },
    { field: "Tvsh", title: "Tvsh" },
    { field: "Kodi1", title: "Kodi1" },
    { field: "Kodi2", title: "Kodi2" },
    { field: "Kodi3", title: "Kodi3" },
    { field: "Kodi4", title: "Kodi4" },
    { field: "Magazina_Kodi", title: "Magazina_Kodi" },
    { field: "Klasifikim1_ID", title: "Klasifikim1_ID" },
    { field: "Klasifikim2_ID", title: "Klasifikim2_ID" },
    { field: "Klasifikim3_ID", title: "Klasifikim3_ID" },
    { field: "Klasifikim4_ID", title: "Klasifikim4_ID" },
    { field: "Selektuar", title: "Selektuar" },
    { field: "Total", title: "Total" },
  ]);

  const dynamicColumns = columns.map((col) => (
    <Column key={col.field} field={col.field} header={col.title} />
  ));

  return (
    <div className="cardS">
      <DataTable value={[]} responsiveLayout="scroll">
        {dynamicColumns}
      </DataTable>
    </div>
  );
};

export default DataTableS;
