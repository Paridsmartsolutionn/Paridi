import React, { useEffect, useState } from "react";
import { Column } from "primereact/column";
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import AddIcon from "@mui/icons-material/Add";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import "./Veprimi.css";

const Veprime = () => {
  const columns = [
    { field: "Kodi", name: "Kodi", Id: 0 },
    { field: "Pershkim", name: "Pershkim", Id: 2 },
    { field: "Llogari", name: "Llogari", Id: 3 },
    { field: "Llogari Pershkrim", name: "Llogari Pershkrim", Id: 4 },
    { field: "Nuk Kalkulohet", name: "Nuk Kalkulohet", Id: 5 },
    { field: "Kontabilizohet", name: "Kontabilizohet", Id: 6 },
    // {title:"Id",name:"Id",Id:7},
    // {title:"Tipi",name:"Tipi",Id:8},
    // {title:"Forma",name:"Forma",Id:9},
    // {title:"Tabela",name:"Tabela",Id:10},
    // {title:"Aktiv",name:"Aktiv",Id:11},
  ];

  // useEffect(()=>{
  //     axios.get(`${process.env.REACT_APP_API_KEY}/tjera/veprim`)
  //     .then(resp => {
  //       setRows(resp?.data?.Veprim)
  //         // setLlogari(resp.data[0].Llogari)
  //     })
  // },[])

  const [displayResponsive, setDisplayResponsive] = useState(false);
  const [position, setPosition] = useState("center");

  const dialogFuncMap = {
    displayResponsive: setDisplayResponsive,
  };

  const onClick = (Pershkrim, position) => {
    dialogFuncMap[`${Pershkrim}`](true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (Pershkrim) => {
    dialogFuncMap[`${Pershkrim}`](false);
  };

  const [test, setTest] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      const info = res.data.map((list) => {
        return { Kodi: list.id, Pershkrim: list?.body, Llogari: list?.email };
      });
      setTest(info);
    });
  }, []);

  const isPositiveInteger = (val) => {
    let str = String(val);
    str = str.trim();
    if (!str) {
      return false;
    }
    str = str.replace(/^0+/, "") || "0";
    let n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
  };
  const onCellEditComplete = (e) => {
    let { rowData, newValue, field, originalEvent: event } = e;
    console.log({ newValue });
    switch (field) {
      case columns:
        if (isPositiveInteger(newValue)) rowData[field] = newValue;
        else event.preventDefault();
        break;

      default:
        if (newValue.length > 0) rowData[field] = newValue;
        else event.preventDefault();
        break;
    }
  };

  const optionGroupTemplate = () => {
    return (
      <div className="flex">
        <div>Kodi</div>
        <div>Pershkrimi</div>
      </div>
    );
  };

  const dropDown = (options) => {
    // itemTemplate
    const value = test.find((ts) => ts[options.field] == options.value);
    if (value) console.log({ value, options });
    return (
      <Dropdown
        editable
        value={options.rowData}
        options={test}
        onChange={(e) => {
          console.log({ event: e });
          options.editorCallback(e.value);
        }}
        optionLabel="Kodi"
        filter
        filterBy="Kodi"
        // valueTemplate={selectedCountryTemplate}
        // itemTemplate={countryOptionTemplate}
        optionGroupTemplate={optionGroupTemplate}
      />
    );
  };

  const dynamicColumns = columns.map((col, i) => {
    return (
      <Column
        key={col.field}
        field={col.field}
        header={col.name}
        editor={(options) => dropDown(options)}
        onCellEditComplete={onCellEditComplete}
      />
    );
  });

  return (
    <div>
      <AddIcon
        fontSize="small"
        className="cursor-pointer"
        onClick={() => onClick("displayResponsive")}
      >
        Open
      </AddIcon>
      <Dialog
        header="Tip punesimi"
        visible={displayResponsive}
        onHide={() => onHide("displayResponsive")}
        breakpoints={{ "960px": "75vw" }}
        style={{ width: "30vw" }}
      >
        <div className="card">
          <DataTable
            value={test}
            responsiveLayout="scroll"
            scrollable
            scrollHeight="430px"
            virtualScrollerOptions={{ itemSize: 46 }}
          >
            {dynamicColumns}
          </DataTable>
        </div>
      </Dialog>
    </div>
  );
};

export default Veprime;
