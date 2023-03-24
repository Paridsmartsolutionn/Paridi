import React, { useEffect, useState, useCallback, useRef } from "react";
import PageMain from "./PageMain";
import Footer from "../components/Navbar/Footer";
import NavBar from "../components/Navbar/NavBar";
import SideBar from "../components/Navbar/SideBar";

const Raporte = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <div>
          <SideBar />
        </div>
        <div className="all-web">
          <PageMain />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Raporte;
