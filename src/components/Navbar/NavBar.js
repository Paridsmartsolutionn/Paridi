import React from "react";
import { Link } from "react-router-dom";
import "./NavStyles/NavBar.scss";
import Logoja from "../../assets/Logoja.png";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useState } from "react";
import { useUser } from "../../zustand/common";
import { useNavigate } from "react-router-dom";
import items from "./items";
import MenuIcon from "@mui/icons-material/Menu";
import { Dialog } from "primereact/dialog";
import Navbar2 from "./phone/Navbar-phone";
const NavBar = () => {
  const navigate = useNavigate();
  const logout = useUser((userStore) => userStore.logout);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  ///button-menu
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
        <img src={Logoja} className="pss-logo w-9 h-9 ml-8" alt="" />
      </div>
      <div className="navbari item-2 flex">
        <ul className="flex gap-3">
          {items.map((link) => {
            const { id, text, url, photo } = link;
            return (
              <li key={id}>
                <Link to={url}>
                  <div className="navitem flex items-center py-2 px-3 rounded-md transform hover:bg-blue-400 hover:bg-opacity-30 transition duration-200 ease-in-out">
                    {photo}
                    {text}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" navbari   item-3 mr-8 text-white">
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 36, height: 36 }}>
                <SupervisorAccountIcon />
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem>
            <Avatar /> My account
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem
            onClick={() => {
              logout();
              navigate("/");
              window.location.reload(true);
            }}
          >
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>

      <div className="navbar-button item-4">
        <Navbar2 />
      </div>
    </div>
  );
};

export default NavBar;
