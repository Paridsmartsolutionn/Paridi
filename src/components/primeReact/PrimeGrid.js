import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { MultiSelect } from "primereact/multiselect";
import { Row } from "primereact/row";
import { ColumnGroup } from "primereact/columngroup";
import { Toast } from "primereact/toast";
import { ContextMenu } from "primereact/contextmenu";
import useStorage from "../../hooks/useStorage";
import { Tooltip } from "primereact/tooltip";
import { TextField } from "@mui/material";
import * as XLSX from "xlsx";
import "./PrimeGrid.scss";

const PrimeGrid = ({
  columns,
  setColumns,
  rows,
  setRows,
  isEditable = true,
  showHideColumns = true,
  gridKey,
  calculateData,
  Total,
  defaultColumnsStorage,
  ...props
}) => {
  const [globalFilterValue1, setGlobalFilterValue1] = useState("");
  const [filters1, setFilters1] = useState(null);
  const [selectedColumns, setSelectedColumns] = useStorage(
    defaultColumnsStorage,
    "kolonat" + gridKey
  );

  const onGlobalFilterChange1 = (e) => {
    const value = e.target.value;
    let _filters1 = { ...filters1 };
    _filters1["global"].value = value;

    setFilters1(_filters1);
    setGlobalFilterValue1(value);
  };

  const clearFilter1 = () => {
    initFilters1();
  };

  const initFilters1 = () => {
    setFilters1({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      columns: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
    });
    setGlobalFilterValue1("");
  };

  const onCellEditComplete = (e) => {
    let { rowData, newValue, value, rowIndex, field } = e;
    if (field == "Total") return;
    let cellData = null;
    if (typeof value == "number") {
      cellData = parseFloat(newValue);
    } else {
      cellData = newValue;
    }

    const newRowData = calculateData({ ...rowData, [field]: cellData });
    let allRows = [...rows];
    allRows[rowIndex] = newRowData;
    setRows(allRows);
  };

  const cellEditor = (options) => {
    const column = options?.column;
    if (column?.props?.editColumn == false) {
      return <Column key={column.field} colSpan={1}></Column>;
    }
    return textEditor(options);
  };

  const textEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  const onColumnToggle = (event) => {
    let selectedColumns = event?.value;
    let orderedSelectedColumns = columns
      ?.filter((col) =>
        selectedColumns?.some((sCol) => sCol?.field === col?.field)
      )
      .map((col) => col.field);
    setSelectedColumns(orderedSelectedColumns);
  };

  const filterdColumns = showHideColumns
    ? columns?.filter((column) =>
        selectedColumns?.some((field) => field === column?.field)
      )
    : columns;

  const header = (
    <>
      <div className="flex justify-between ">
        <span style={{ width: "15rem" }} className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            style={{ height: "2em" }}
            value={globalFilterValue1}
            onChange={onGlobalFilterChange1}
            placeholder="Kërko"
            onClick={clearFilter1}
          />
        </span>

        <div className="flex file-choosen ">
          <input
            onChange={(e) => {
              const file = e.target.files[0];
              readExcel(file);
            }}
            type="file"
          />

          {showHideColumns && (
            <MultiSelect
              value={filterdColumns}
              options={columns}
              optionLabel="title"
              onChange={onColumnToggle}
              style={{ width: "3em", height: "2em" }}
            />
          )}
        </div>
      </div>
    </>
  );

  const dynamicColumns = filterdColumns?.map((col, i) => {
    return (
      <Column
        // filter
        style={{ height: "2.6rem" }}
        {...(isEditable && {
          onCellEditComplete: (e) => onCellEditComplete(e),
        })}
        {...(isEditable && { editor: (options) => cellEditor(options) })}
        key={col?.field}
        sortable
        field={col?.field}
        header={col?.title}
        calculateData={calculateData}
      />
    );
  });

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "ALL",
    });
  };

  let columnSum = (field) => {
    let Total = 0;
    for (let row of rows) {
      Total += row[field];
    }

    return formatCurrency(Total);
  };

  const footer = `${rows ? rows.length : 0} Rrjeshta`;

  const footerGroup = () => {
    let totalColSpans = 0;

    let checkCols = filterdColumns?.some((column) => {
      totalColSpans++;
      return column?.allowSum;
    });
    if (!checkCols) return <></>;

    return (
      <ColumnGroup>
        <Row>
          {filterdColumns?.map((column) => {
            if (column?.allowSum) {
              return (
                <Column
                  key={column?.field}
                  colSpan={1}
                  footer={() => columnSum(column?.field)}
                />
              );
            }
            return <Column colSpan={1} />;
          })}
        </Row>
      </ColumnGroup>
    );
  };

  let footerGr = footerGroup();

  const cm = useRef(null);
  const toast = useRef(null);

  const onColReorder = (event) => {
    const { dragIndex, dropIndex } = event;

    let columnsCopy = [...selectedColumns];
    const tempColumn = { ...selectedColumns[dragIndex] };
    columnsCopy[dragIndex] = selectedColumns[dropIndex];
    columnsCopy[dropIndex] = tempColumn;

    setSelectedColumns(columnsCopy);

    toast.current.show({
      severity: "success",
      summary: "Column Reordered",
      life: 3000,
    });
  };

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setRows(d);
    });
  };

  const menuModel = [
    { label: "Shto", icon: "pi pi-plus", command: () => addRow([]) },
    {
      label: "Fshije",
      icon: "pi pi-fw pi-times",
      command: () => deleteRow(selectedProduct),
    },
    { label: "ExportCSV", icon: "pi pi-file", command: () => exportCSV(false) },
    {
      label: "ExportExel",
      icon: "pi pi-file-excel",
      command: () => exportExcel(),
    },
  ];

  const addRow = () => {
    let newRow = {};
    columns.forEach((column) => {
      if (column?.allowSum) newRow[column.field] = 0;
      else {
        newRow[column.Id] = null;
      }
    });
    setRows((rows) => {
      return [newRow, ...rows];
    });
  };

  const deleteRow = (row) => {
    let filteredRows = [...rows];
    filteredRows = filteredRows.filter((p) => p.Id !== row.Id);

    toast.current.show({
      severity: "error",
      summary: "Rrjeshti u fshi",
      detail: row.field,
    });
    setRows(filteredRows);
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const dt = useRef(null);
  const exportColumns = columns.map((col) => ({
    title: col.title,
    dataKey: col.field,
  }));

  const exportCSV = (selectionOnly) => {
    dt.current.exportCSV({ selectionOnly });
  };

  // const exportPdf = () => {
  //   import('jspdf').then(jsPDF => {
  //       import('jspdf-autotable').then(() => {
  //           const doc = new jsPDF.default(0, 0);
  //           doc.autoTable(exportColumns, rows);
  //           doc.save('rows.pdf');
  //       })
  //   })
  // }

  const exportExcel = () => {
    import("xlsx").then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(rows);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      saveAsExcelFile(excelBuffer, "rows");
    });
  };

  const saveAsExcelFile = (buffer, fileName) => {
    import("file-saver").then((module) => {
      if (module && module.default) {
        let EXCEL_TYPE =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        let EXCEL_EXTENSION = ".xlsx";
        const data = new Blob([buffer], {
          type: EXCEL_TYPE,
        });

        module.default.saveAs(
          data,
          fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
        );
      }
    });
  };

  const [selectionRow, setSelectionRow] = useState(null);

  return (
    <div>
      <Toast ref={toast}></Toast>

      <ContextMenu model={menuModel} ref={cm} />
      <Tooltip target=".export-buttons>button" position="bottom" />
      <div className="card">
        <div className="prime-react">
          <DataTable
            // footer={footer}
            reorderableColumnsDataTable
            cellSelection
            selection={selectionRow}
            onSelectionChange={(e) => setSelectionRow(e.value)}
            selectionMode="multiple"
            style={{ position: "relative" }}
            ref={dt}
            rows={5}
            inline
            contextMenuSelection={selectedProduct}
            scrollable
            scrollHeight="46vh"
            // virtualScrollerOptions={{ itemSize: 46 }}
            contextSelection={selectedProduct}
            onContextMenuSelectionChange={(e) => setSelectedProduct(e.value)}
            onContextMenu={(e) => cm.current.show(e.originalEvent)}
            onColReorder={onColReorder}
            resizableColumns
            columnResizeMode="fit"
            responsiveLayout="stack"
            breakpoint="960px"
            size="small"
            value={rows}
            stripedRows
            dataKey="Id"
            filters={filters1}
            header={header}
            footerColumnGroup={footerGr}
            globalFilterFields={[
              "BarKod",
              "Pershkrim",
              "Njesi_Kodi",
              "Sasia_Print",
              "Sasia",
            ]}
            // responsiveLayout="scroll"
            filterDisplay="menu"
            emptyMessage="Nuk ka te dhena"
            {...props}
          >
            {dynamicColumns}
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default PrimeGrid;
