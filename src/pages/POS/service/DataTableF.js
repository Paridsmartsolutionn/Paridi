import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const DataTableComponent = () => {
  const columns = [
    { field: "Kodi", title: "Kodi" },
    { field: "Barkod", title: "Barkod" },
    { field: "Sasia", title: "Sasia" },
    { field: "Cmimi", title: "Cmimi" },
    { field: "Vlera", title: "Vlera" },
    { field: "Pershkrim", title: "Pershkrim" },
  ];

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

export default DataTableComponent;
