import React, { useState, useEffect, useRef, useMemo } from "react";
import Button from "@mui/material/Button";
import { OverlayPanel } from "primereact/overlaypanel";
import axios from "axios";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { MultiSelect } from "primereact/multiselect";
import useStorage from "../../hooks/useStorage";
import { TabView, TabPanel } from "primereact/tabview";

const dummyData = [
  {
    Kodi: 1,
    BarKod: 9128,
    Pershkrim: "Ca bone laleee",
    Njesi_Kodi: 23,
    Cmimi: 34,
  },
];

const ModalList = ({
  shtoArtikull,
  showHideColumns = true,
  gridKey,
  disabled,
}) => {
  const [openList, setOpenList] = useState(false);
  const handleClose = () => setOpenList(false);
  const [rows, setRows] = useState([]);
  const [rowsLlogari, setRowsLlogari] = useState([]);
  const [rowsSherbime, setRowsSherbime] = useState([]);
  const [selection, setSelection] = useState([]);

  const fetchPost = async () => {
    try {
      const response = await axios(
        `${process.env.REACT_APP_API_KEY}/fatura/blerje/list`
      );

      setRowsLlogari(response?.data?.Llogari);
      setRows(response?.data?.Artikuj);
      setRowsSherbime(response?.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const columns = [
    { field: "Kodi", title: "Kodi" },
    { field: "BarKod", title: "BarKod" },
    { field: "Pershkrim", title: "Pershkrim" },
    { field: "Njesi_Kodi", title: "Njesi_Kodi" },
    { field: "Cmimi", title: "Cmimi" },
  ];

  let columnData = columns.map((list) => {
    return {
      field: list.field,
      title: list.title.split("_").join(" "),
    };
  });

  const columnsLlogari = [
    { field: "Kodi", title: "Kodi" },
    { field: "Pershkrim", title: "Pershkrim" },
  ];

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const op = useRef(null);

  const [selectedColumns, setSelectedColumns] = useStorage(
    columns,
    "kolonatEartikujve" + gridKey
  );

  const dynamicColumns = selectedColumns.map((col, i) => {
    return (
      <Column sortable key={col.field} field={col.field} header={col.title} />
    );
  });

  const dynamicColumnsLlogari = columnsLlogari.map((col, i) => {
    return (
      <Column sortable key={col.field} field={col.field} header={col.title} />
    );
  });

  const onColumnToggle = (event) => {
    let selectedColumns = event.value;
    let orderedSelectedColumns = columns.filter((col) =>
      selectedColumns.some((sCol) => sCol.field === col.field)
    );
    setSelectedColumns(orderedSelectedColumns);
  };

  const header = (
    <>
      {showHideColumns && (
        <MultiSelect
          className="selectArtikuj"
          value={selectedColumns}
          options={columns}
          optionLabel="title"
          onChange={onColumnToggle}
          style={{ width: "3em", height: "2em" }}
        />
      )}
    </>
  );

  const headerLogari = (
    <>
      {showHideColumns && (
        <MultiSelect
          className="selectArtikuj"
          value={selectedColumns}
          options={columnsLlogari}
          optionLabel="title"
          onChange={onColumnToggle}
          style={{ width: "3em", height: "2em" }}
        />
      )}
    </>
  );

  return (
    <>
      <div>
        <Button
          disabled={disabled}
          type="button"
          icon="pi pi-search"
          variant="outlined"
          onClick={(e) => op.current.toggle(e)}
          aria-haspopup
          aria-controls="overlay_panel"
        >
          {" "}
          Artikuj/Llogari
        </Button>
      </div>

      <OverlayPanel
        ref={op}
        showCloseIcon
        id="overlay_panel"
        style={{ width: "450px" }}
        className="overlaypanel-demo"
      >
        <div className="card">
          <TabView>
            <TabPanel header="Artikuj">
              <DataTable
                size="small"
                gridKey="ArtikujListe"
                header={header}
                selectionMode="single"
                selection={selection}
                onSelectionChange={(selected) => {
                  shtoArtikull(selected.value);
                  setSelection(selected.value);
                }}
                scrollable
                scrollHeight="400px"
                virtualScrollerOptions={{ itemSize: 46 }}
                // value={rows}
                value={dummyData}
                responsiveLayout="scroll"
              >
                {dynamicColumns}
              </DataTable>
            </TabPanel>

            <TabPanel header="Llogari">
              <DataTable
                size="small"
                gridKey="Llogari"
                header={headerLogari}
                selectionMode="single"
                selection={selection}
                onSelectionChange={(selected) => {
                  shtoArtikull(selected.value);
                  setSelection(selected.value);
                }}
                scrollable
                scrollHeight="400px"
                virtualScrollerOptions={{ itemSize: 46 }}
                value={rowsLlogari}
                responsiveLayout="scroll"
              >
                {dynamicColumnsLlogari}
              </DataTable>
            </TabPanel>

            <TabPanel header="Sherbime">
              <p>Sektori i sherbimeve</p>
            </TabPanel>
          </TabView>
        </div>
      </OverlayPanel>
    </>
  );
};

export default ModalList;
