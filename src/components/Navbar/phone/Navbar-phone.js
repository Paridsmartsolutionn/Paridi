import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar2.scss";
import Logo from "../../../assets/Logoja.png";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import data from "../../../demo-data/Data.json";
import { Container } from "@mui/material";
import Slide from "@mui/material/Slide";
import Logout from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import items from "../items";
import useCourseStore from "../Zustand/store";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { filter, wordEntered, handleFilter, clearInput } = useCourseStore(
    (state) => ({
      filter: state.filter,
      wordEntered: state.wordEntered,
      handleFilter: state.handleFilter,
      clearInput: state.clearInput,
    })
  );

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xl"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="sidebar-button" onClick={handleClickOpen}>
        <MenuIcon />
      </button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div className="top-btn">
          <img src={Logo} className="navbar-logo" alt="" />
          <button type="button" className="close-button" onClick={handleClose}>
            <CloseIcon />
          </button>
        </div>
        <Container className="search-bar">
          <div className="search-input">
            <input
              type="text"
              className="input"
              onChange={(e) => {
                handleFilter(e, data);
              }}
              placeholder="Kërko"
              value={wordEntered}
            />
            <div className="search-icon">
              {filter.length === 0 ? (
                <SearchIcon />
              ) : (
                <ClearIcon onClick={clearInput} />
              )}
            </div>
          </div>
          {wordEntered == 0 && (
            <div className="navbar-links">
              {items.map((item) => {
                return (
                  <Link key={item.id} to={item.url}>
                    {item.photo} {item.text}
                  </Link>
                );
              })}
            </div>
          )}
          {filter != 0 && (
            <div className="data-result">
              {filter.slice(0, 15).map((value) => {
                return (
                  <Link to={value.link} key={value.title}>
                    {value.title}
                  </Link>
                );
              })}
            </div>
          )}

          <div className=" sidebar-settings">
            <div className="item">
              <Avatar /> Profile
            </div>

            <hr />
            <div className="item">
              <PersonAdd fontSize="medium" />
              Add another account
            </div>
            <div className="item">
              <Settings fontSize="medium" />
              Settings
            </div>
            <div className="item">
              <Logout fontSize="medium" />
              Logout
            </div>
          </div>
        </Container>
      </Dialog>
    </div>
  );
};
export default Sidebar;
