import React from "react";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Logoja from "../../../assets/Logoja.png";
import "./forgot.scss";
import ResetComponent from "./ResetCompoent";

// forma par e forgot passwordit
const Forgot = () => {
  const [email, setEmail] = useState("");
  const [showResetComponent, setShowResetComponent] = useState(false);

  const handleResetPassword = () => {
    setShowResetComponent(true);
  };

  if (showResetComponent) {
    return <ResetComponent />;
  }
  const isEmailEmpty = email.trim() === "";
  const isEmailInvalid = !email.includes("@");

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
      <div className="header-text">
        Keni harruar passwordin ?
        <div className="middle-text">
          <h4> Do t'ju dërgojmë udhëzimet për rivendosjen e fjalëkalimit.</h4>
        </div>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          //   error={isEmailEmpty || isEmailInvalid}
          //   helperText={
          //     isEmailEmpty
          //       ? "Email is required"
          //       : isEmailInvalid
          //       ? "Invalid email"
          //       : ""
          //   }
        />
        <div className="reset-button">
          <Button
            variant="contained"
            onClick={handleResetPassword}
            disabled={isEmailEmpty || isEmailInvalid}
          >
            Reset password
          </Button>
        </div>
        <div className="back-login">
          <Link to="/" className="blackLink">
            <ArrowBack />
            Back to log in
          </Link>
        </div>
      </div>
      {showResetComponent && <ResetComponent />}
    </div>
  );
};

export default Forgot;
