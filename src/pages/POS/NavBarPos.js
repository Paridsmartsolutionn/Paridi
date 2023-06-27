import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Restaurant/RestorantCss/NavBarPos.scss";
import Logoja from "../../assets/Logoja.png";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { useUser } from "../../zustand/common";
import { useNavigate } from "react-router-dom";
import itemsOne from "./Restaurant/itemsNavBarRest";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Navbar2 from "../../components/Navbar/phone/Navbar-phone";

const NavBarPos = () => {
  const navigate = useNavigate();

  const navigateTwo = useNavigate();

  const logout = useUser((userStore) => userStore.logout);

  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClickTwo = () => {
    navigateTwo("/home");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSublinkClick = (sublinkUrl) => {
    navigate(sublinkUrl);
    handleDialogClose();
  };

  const [position, setPosition] = useState("center");
  const [displayMaximizable, setDisplayMaximizable] = useState(false);
  const dialogFuncMap = {
    displayMaximizable: setDisplayMaximizable,
  };

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  return (
    <div
      style={{ background: "#1971c2" }}
      className="flex items-center tekst  h-14 rounded-xl  mt-1 ml-1 mr-1 shadow-md"
    >
      <div className="item-1">
        <Link to="/home">
          <img src={Logoja} className="pss-logo w-9 h-9 ml-8" alt="" />
        </Link>
      </div>

      <div className="navbari items-2 flex  items-center">
        <ul className="flex gap-3">
          {itemsOne.map((link) => {
            const { id, text, url, photo, sublinks } = link;
            const isActive = location.pathname === url;
            return (
              <li key={id}>
                {id === 4 ? (
                  <div
                    className={`navitem flex items-center py-2 px-3 rounded-md transform hover:bg-blue-400 hover:bg-opacity-30 transition duration-200 ease-in-out ${
                      isActive ? "active" : ""
                    }`}
                    style={{ color: "white" }}
                    onClick={handleDialogOpen}
                  >
                    {photo}
                    {text}
                  </div>
                ) : (
                  <Link to={url}>
                    <div
                      className={`navitem  flex items-center py-2 px-3 rounded-md transform hover:bg-blue-400 hover:bg-opacity-30 transition duration-200 ease-in-out ${
                        isActive ? "active" : ""
                      }`}
                    >
                      {photo}
                      {text}
                    </div>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" navbari   item-3 mr-8 text-white">
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <button onClick={handleClickTwo}>
            <PowerSettingsNewIcon
              sx={{
                backgroundColor: "white",
                borderRadius: "50%",
                width: 36,
                height: 36,
                color: "red",
              }}
            ></PowerSettingsNewIcon>
          </button>
        </Box>
      </div>

      <div className="navbar-button item-4">
        <Navbar2 />
      </div>
    </div>
  );
};

export default NavBarPos;
