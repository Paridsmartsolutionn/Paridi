import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavStyles/SideBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import { PanelMenu } from "primereact/panelmenu";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ScrollPanel } from "primereact/scrollpanel";
import { InputText } from "primereact/inputtext";

const SideBar = () => {
  const [search, setSearch] = useState("");
  const nodes = [
    {
      key: "0",
      label: "Artikuj ",
      items: [
        {
          key: "0-0",
          label: "Klasifikime",
          items: [
            {
              key: "0-0-0",
              label: "Klasifikime 1",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "0-0-1",
              label: "Klasifikime 2",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "0-0-2",
              label: "Klasifikime 3",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "0-0-3",
              label: "Klasifikime 4",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "0-0-4",
              label: "Klasifikime 5",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "0-0-5",
              label: "Klasifikime 6",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "0-0-6",
              label: "Tip Vlere Blerje",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "0-0-7",
              label: "Ngjyra",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "0-0-8",
              label: "Masa ",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "0-0-9",
              label: "Stina ",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "0-0-10",
              label: "Materiali",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "0-0-11",
              label: "Tip Vlere Shitje",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "0-0-12",
              label: "Tip Vlere Import",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
          ],
        },
        {
          key: "0-1",
          label: "Njesi",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "0-2",
          label: "Flete Hyrje",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "0-3",
          label: "Flete Dalje",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "0-4",
          label: "Artikuj",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "0-5",
          label: "Artikuj (forma e vogel)",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "0-6",
          label: "Inventar Artikuj",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "0-7",
          label: "Sherbime",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "0-8",
          label: "Kalkulim Cmimesh",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "0-9",
          label: "Kosto Kalkulim",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "0-10",
          label: "Asete",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "0-11",
          label: "Raporte Artikuj",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
      ],
    },

    {
      key: "2",
      label: "Blerje",
      items: [
        {
          key: "2-0",
          label: "Furnitor",
          icon: "pi pi-fw pi-circle",
          url: "/Furnitor",
        },
        {
          key: "2-1",
          label: "Fature Blerje",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "2-2",
          label: "IMPORT",
          icon: "pi pi-fw pi-circle",
          url: "/Import",
        },
        {
          key: "2-3",
          label: "Porosi ne Furnitor",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
        {
          key: "2-4",
          label: "Faturim i Shumefishte",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
        {
          key: "2-5",
          label: "Raporte Blerje",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
      ],
    },
    {
      key: "3",
      label: "Listëpagesë ",
      items: [
        {
          key: "3-0",
          label: "Referenca",
          items: [
            {
              key: "3-0-0",
              label: "Kualifikimet",
              icon: "pi pi-fw pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "3-0-1",
              label: "Sistemi Shkollor",
              icon: "pi pi-fw pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "3-0-2",
              label: "Profesionet ",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "3-0-3",
              label: "Arsimi ",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "3-0-4",
              label: "Statusi Familjar ",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "3-0-5",
              label: "Departament",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "3-0-6",
              label: "Festat",
              icon: "pi pi-fw pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "3-0-7",
              label: "Feja",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "3-0-8",
              label: "Gjinia ",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "3-0-9",
              label: "Kombesia ",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "3-0-10",
              label: "Lloji Punes",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "3-0-11",
              label: "Ndalesa Reference",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "3-0-12",
              label: "Shtesa Reference",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "3-0-13",
              label: "Tip Adresash",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "3-0-14",
              label: "Tip Punsimi ",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "3-0-15",
              label: "Titulli ",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
          ],
        },
        {
          key: "3-1",
          label: "Bordero Konfigurim",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "3-2",
          label: "Prezenca ",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "3-3",
          label: "Raporte Listepagese ",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "3-4",
          label: "Kalkulo Borderone",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
      ],
    },
    {
      key: "4",
      label: "Celje ",
      items: [
        {
          key: "4-0",
          label: "Te Tjera",
          items: [
            {
              key: "4-0-0",
              label: "Grupi Perdoruesit",
              icon: "pi pi-fw pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "4-0-1",
              label: "Tarifa",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "4-0-2",
              label: "Transportuesi ",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "4-0-3",
              label: "Departament  ",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "4-0-4",
              label: "Kategori Punonjesi  ",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "4-0-5",
              label: "Shteti",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "4-0-6",
              label: "Qyteti",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "4-0-7",
              label: "Menyra Pageses",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
          ],
        },
        {
          key: "4-1",
          label: "Furnitor",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "4-2",
          label: "Monedhe ",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "4-3",
          label: "Perdorues ",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "4-4",
          label: "Punonjes ",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "4-4",
          label: "Ndermarrje e Re",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
      ],
    },
    {
      key: "5",
      label: "Konfigurime ",
      items: [
        {
          key: "5-0",
          label: "Ndërmarrje",
          items: [
            {
              key: "5-0-0",
              label: "Arshivim i ndermarrjeve ",
              icon: "pi pi-fw pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "5-0-1",
              label: "Rikthim Arshive",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "5-0-2",
              label: "Fshirje/C'aktivizim ",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "5-0-3",
              label: "Magazine  ",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
          ],
        },
        {
          key: "5-1",
          label: "Gridat ne gjendjen fillestare",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "5-2",
          label: "Ndermarrje ",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "5-3",
          label: "Format e skriptuara ",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "5-4",
          label: "Te pergjithshme ",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "5-4",
          label: "Konfiguro Menune ",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "5-5",
          label: "Te Dhenat/Serveri ",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "5-6",
          label: "Te drejtat ",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "5-7",
          label: "Update  ",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
      ],
    },
    {
      key: "6",
      label: "Kontabilizime ",
      items: [
        {
          key: "6-0",
          label: "Llogari",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "6-1",
          label: "Skema e Kontabilizmit ",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "6-2",
          label: "Veprime Kontabel ",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "6-3",
          label: "Postim ne Ditar ",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "6-4",
          label: "Buxheti",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "6-5",
          label: "Rivlersimi i Kursit",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "6-6",
          label: "Mbyllje e te ardhurave dhe shpenzimeve",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "6-7",
          label: "Update  ",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
      ],
    },

    {
      key: "7",
      label: "Mjete",
      items: [
        {
          key: "7-0",
          label: "Exel editor",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
      ],
    },

    {
      key: "8",
      label: "POS",

      items: [
        {
          key: "8-0",
          label: "Supermarket",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
        {
          key: "8-1",
          label: "Bar Restorant",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "8-2",
          label: "Mbyllje turni",
          icon: "pi pi-fw pi-circle",
          url: "/Import",
        },
        {
          key: "8-3",
          label: "POS Raporte",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
        {
          key: "8-4",
          label: "POS Konfigurim ",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
      ],
    },

    {
      key: "9",
      label: "Prodhim",
      items: [
        {
          key: "9-0",
          label: "Ndjekje prodhimi",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
        {
          key: "9-1",
          label: "Linja e prodhimit ",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "9-2",
          label: "Procese",
          icon: "pi pi-fw pi-circle",
          url: "/Import",
        },
        {
          key: "9-3",
          label: "Turnet ",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
        {
          key: "9-4",
          label: "Raporte prodhim",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
      ],
    },

    {
      key: "10",
      label: "Raporte",
      items: [
        {
          key: "10-0",
          label: "Te gjitha raportet",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
        {
          key: "10-1",
          label: "Raporte Speciale",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "10-2",
          label: "Artikuj",
          icon: "pi pi-fw pi-circle",
          url: "/Import",
        },
        {
          key: "10-3",
          label: "Flete Hyrje ",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
        {
          key: "10-4",
          label: "Flete Dalje",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
        {
          key: "10-5",
          label: "Arka ",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
        {
          key: "10-6",
          label: "Banka",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
        {
          key: "10-7",
          label: "Blerje ",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "10-8",
          label: "Shitje",
          icon: "pi pi-fw pi-circle",
          url: "/Import",
        },
        {
          key: "10-9",
          label: "Furnitor ",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
        {
          key: "10-10",
          label: "Klient",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
        {
          key: "10-11",
          label: "Punonjesit ",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
        {
          key: "10-12",
          label: "Ditar ",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
        {
          key: "10-13",
          label: "Librat",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
        {
          key: "10-14",
          label: "Fiskale ",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "10-15",
          label: "Te tjera",
          icon: "pi pi-fw pi-circle",
          url: "/Import",
        },
        {
          key: "10-16",
          label: "Raporte Kontabel ",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
        {
          key: "10-17",
          label: "Etiketa/Barkode",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
      ],
    },
    {
      key: "11",
      label: "Shitje",
      items: [
        {
          key: "11-0",
          label: "Klient(forme e vogel)",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
        {
          key: "11-1",
          label: "Klient",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "11-2",
          label: "Fature Shitje",
          icon: "pi pi-fw pi-circle",
          url: "/Import",
        },
        {
          key: "11-3",
          label: "Oferte ",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
        {
          key: "11-4",
          label: "Porosi e Klientit",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
        {
          key: "11-5",
          label: "Faturimi i shumfishte ",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
        {
          key: "11-6",
          label: "Raporte Shije",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
      ],
    },
    {
      key: "12",
      label: "Te Tjera",
      items: [
        {
          key: "12-0",
          label: "Home",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
        {
          key: "12-1",
          label: "Kalendari ",
          icon: "pi pi-fw pi-circle",
          url: "/fature-blerje",
        },
        {
          key: "12-2",
          label: "Mbyll/Hap Dokumenta",
          icon: "pi pi-fw pi-circle",
          url: "/Import",
        },
        {
          key: "12-3",
          label: "Menu  ",
          icon: "pi pi-fw pi-circle",
          url: "/flete-dalje",
        },
      ],
    },
    {
      key: "13",
      label: "Pagesa ",
      items: [
        {
          key: "13-0",
          label: "Arka",
          items: [
            {
              key: "13-0-0",
              label: "Pagesa ne Arke 1",
              icon: "pi pi-fw pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "13-0-1",
              label: "Lista e Arkave ",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "13-0-2",
              label: "Arka Raporte",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
          ],
        },
        {
          key: "13-1",
          label: "Banka",
          items: [
            {
              key: "13-1-0",
              label: "Pagesa ne Banke",
              icon: "pi pi-fw pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "13-1-1",
              label: "Lista e Bankave",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
            {
              key: "13-1-2",
              label: "Banka raporte",
              icon: "pi pi-fw  pi-circle",
              url: "/fature-blerje",
            },
          ],
        },
      ],
    },
  ];

  const searchTree = (element, matchingTitle) => {
    if (element.label.toLowerCase().includes(matchingTitle)) {
      return element;
    } else if (element?.items != null) {
      let i;
      let result = null;
      for (i = 0; result === null && i < element.items.length; i++) {
        result = searchTree(element.items[i], matchingTitle);
      }
      return result;
    }
    return null;
  };

  let filteredNavLinks = nodes.filter((item) => {
    if (search.toLowerCase() === "") {
      return nodes;
    } else {
      let result = searchTree(item, search.toLowerCase());
      return result;
    }
  });

  // const searchTree=(element, matchingTitle)=>{
  //   if(element.label.toLowerCase().includes(matchingTitle) ){
  //        return element;
  //   }else if (element?.items != null){
  //        var i;
  //        var result = null;
  //        for(i=0; result === null && i < element.items.length; i++){
  //             result = searchTree(element.items[i], matchingTitle);
  //        }
  //        return result;
  //   }
  //   return null;
  // }

  // const filteredNavLinks=()=>{
  //   if(search.toLowerCase() === '') return nodes;
  //   let result = nodes.filter((item)=>{
  //       let result = searchTree(item, search.toLowerCase());
  //       return result
  //   }).map((navLink=>({...navLink,expanded:true})))
  //   return result
  // }

  return (
    <div className="sidebar ">
      <ScrollPanel style={{ width: "100%", height: "85vh" }}>
        <div className="mb-2 border-b p-2">
          <span className="p-input-icon-right">
            <i className="pi pi-search" />

            <InputText
              placeholder="Search"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
          </span>
        </div>

        <PanelMenu model={filteredNavLinks} />
      </ScrollPanel>
    </div>
  );
};

export default SideBar;
