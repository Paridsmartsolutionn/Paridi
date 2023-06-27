import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavStyles/SideBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import { PanelMenu } from "primereact/panelmenu";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ScrollPanel } from "primereact/scrollpanel";
import { InputText } from "primereact/inputtext";
import nodes from "./SideBarItems/SideBarArray";

const SideBar = () => {
  const [search, setSearch] = useState("");

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
