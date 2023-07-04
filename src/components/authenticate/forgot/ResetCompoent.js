import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ConfirmComponent from "./ConfirmComponent";
import Logoja from "../../../assets/Logoja.png";
import "./forgot.scss";

const ResetComponent = () => {
  const [showConfirmComponent, setShowConfirmComponent] = useState(false);

  const handleConfirmPassword = () => {
    setShowConfirmComponent(true);
  };

  if (showConfirmComponent) {
    return <ConfirmComponent />;
  }
  return (
    <div className="Nav-text">
      <div className="section">
        <div>
          <img className="logoja" src={Logoja} alt="Logo" />
        </div>
        <div className="link-register">
          <Link to="/Register" className="linku">
            Regjistrrohu
          </Link>
        </div>
      </div>

      <div className="reset-container">
        <div className="reset-header">Password reset</div>
        <div className="reset-subheader">
          Konfirmoni kodin në emailin tuaj. {/* email */}
        </div>
        <div className="number-input-div">
          <div className="number-input">
            <input
              type="number"
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength) {
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
                }
              }}
              maxLength={1}
            />
            <input
              type="number"
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength) {
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
                }
              }}
              maxLength={1}
            />
            <input
              type="number"
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength) {
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
                }
              }}
              maxLength={1}
            />
            <input
              type="number"
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength) {
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
                }
              }}
              maxLength={1}
            />

            <input
              type="number"
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength) {
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
                }
              }}
              maxLength={1}
            />
            <input
              type="number"
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength) {
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
                }
              }}
              maxLength={1}
            />
          </div>
        </div>
        <div className="reset-subheader">
          Nuk e moret kodin ne email?{" "}
          <Button
            className="resend-kode"
            variant="text"
            onClick={handleConfirmPassword}
          >
            Kliko ketu
          </Button>
        </div>
        <div className="reset-button">
          <Button variant="contained" onClick={handleConfirmPassword}>
            Continue
          </Button>
        </div>

        <div className="back-login">
          <Link to="/" className="blackLink">
            <ArrowBack />
            Back to log in
          </Link>
        </div>
      </div>
      {showConfirmComponent && <ConfirmComponent />}
    </div>
  );
};

export default ResetComponent;
