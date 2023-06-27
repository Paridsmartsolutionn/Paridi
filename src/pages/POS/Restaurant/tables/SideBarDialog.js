import React, { useState } from "react";
import "../RestorantCss/SideBarDialog.scss";
import { Box, Menu } from "@mui/material";
import { ScrollPanel } from "primereact/scrollpanel";
import MenuDialog from "./MenuDialog";

const SideBarDialog = () => {
  // const [search, setSearch] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showAccounting, setShowAccounting] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleAccountingClick = () => {
    setShowAccounting(!showAccounting);
  };

  // const searchTree = (element, matchingTitle) => {
  //   if (element.label.toLowerCase().includes(matchingTitle)) {
  //     return element;
  //   } else if (element?.items != null) {
  //     let i;
  //     let result = null;
  //     for (i = 0; result === null && i < element.items.length; i++) {
  //       result = searchTree(element.items[i], matchingTitle);
  //     }
  //     return result;
  //   }
  //   return null;
  // };

  // const ArrayProduct = [MenuDialog];

  // let filteredNavLinks = ArrayProduct.filter((item) => {
  //   if (search.toLowerCase() === "") {
  //     return ArrayProduct;
  //   } else {
  //     let result = searchTree(item, search.toLowerCase());
  //     return result;
  //   }
  // });

  return (
    <Box className="side-bar-dialog">
      <button className="menu-button" onClick={handleMenuClick}>
        Grupet
      </button>
      {showMenu && (
        <input
          className="search-group"
          type="text"
          // value={search}
          // onChange={(e) => setSearch(e.target.value)}
          placeholder="Kerko Grupet"
        />
      )}

      {showMenu && (
        <ScrollPanel
          className="scroll-panel"
          style={{ height: "calc(100vh - 110px)", overflowX: "hidden" }}
        >
          <div>
            <MenuDialog title="Drinks" itemCount={9} />
            <MenuDialog title="Ushqime" itemCount={2} />
            <MenuDialog title="Pishina" itemCount={2} />
            <MenuDialog title="Bar" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Drinks" itemCount={9} />
            <MenuDialog title="Ushqime" itemCount={2} />
            <MenuDialog title="Pishina" itemCount={2} />
            <MenuDialog title="Bar" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Drinks" itemCount={9} />
            <MenuDialog title="Ushqime" itemCount={2} />
            <MenuDialog title="Pishina" itemCount={2} />
            <MenuDialog title="Bar" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Drinks" itemCount={9} />
            <MenuDialog title="Ushqime" itemCount={2} />
            <MenuDialog title="Pishina" itemCount={2} />
            <MenuDialog title="Bar" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Drinks" itemCount={9} />
            <MenuDialog title="Ushqime" itemCount={2} />
            <MenuDialog title="Pishina" itemCount={2} />
            <MenuDialog title="Bar" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Drinks" itemCount={9} />
            <MenuDialog title="Ushqime" itemCount={2} />
            <MenuDialog title="Pishina" itemCount={2} />
            <MenuDialog title="Bar" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Drinks" itemCount={9} />
            <MenuDialog title="Ushqime" itemCount={2} />
            <MenuDialog title="Pishina" itemCount={2} />
            <MenuDialog title="Bar" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Drinks" itemCount={9} />
            <MenuDialog title="Ushqime" itemCount={2} />
            <MenuDialog title="Pishina" itemCount={2} />
            <MenuDialog title="Bar" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Drinks" itemCount={9} />
            <MenuDialog title="Ushqime" itemCount={2} />
            <MenuDialog title="Pishina" itemCount={2} />
            <MenuDialog title="Bar" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Drinks" itemCount={9} />
            <MenuDialog title="Ushqime" itemCount={2} />
            <MenuDialog title="Pishina" itemCount={2} />
            <MenuDialog title="Bar" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Drinks" itemCount={9} />
            <MenuDialog title="Ushqime" itemCount={2} />
            <MenuDialog title="Pishina" itemCount={2} />
            <MenuDialog title="Bar" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
            <MenuDialog title="Freskuese" itemCount={2} />
          </div>
        </ScrollPanel>
      )}

      <ScrollPanel
        className="scroll-panel"
        style={{ height: "calc(100vh - 110px)" }}
      ></ScrollPanel>
    </Box>
  );
};

export default SideBarDialog;
