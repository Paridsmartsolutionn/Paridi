import React from "react";
import PageMain from "./PageMain";
import Footer from "../../components/Navbar/Footer";
import NavBar from "../../components/Navbar/NavBar";
import SideBar from "../../components/Navbar/SideBar";
import "./Raporte.scss";
const Raporte = () => {
  return (
    <div>
      <NavBar />
      <div className="template">
        <SideBar />

        <div className="all-web">
          <PageMain />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Raporte;
