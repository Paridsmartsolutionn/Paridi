import React from "react";
import "./NavStyles/Footer.css";
import Logoja from "../../assets/Logoja.png";

function Footer() {
  return (
    <div
      style={{ background: "#1971c2" }}
      className="flex items-center justify-center text-white h-14 rounded-xl  mb-1 ml-1 mr-1 shadow-md"
    >
      <div className="flex  items-center gap-2">
        <img src={Logoja} className={`logoja`} />
        <p>Ndërmarrje : Parid Smart Solution ©</p>
      </div>
    </div>
  );
}

export default Footer;
