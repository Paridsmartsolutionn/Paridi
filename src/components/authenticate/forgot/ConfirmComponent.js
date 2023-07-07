import React from "react";
import { useState, useRef } from "react";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  colors,
} from "@mui/material";
import { ArrowBack, Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./forgot.scss";
import Logoja from "../../../assets/Logoja.png";
import { Toast } from "primereact/toast";

// forma e trret e forgot passwordit (change password)
const ConfirmComponent = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordEmpty = password.trim() === "";
  const isPasswordShort = password.length < 8;
  const toast = useRef(null);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  //popUp per confirm btn
  const handleConfirmClick = () => {
    if (isPasswordEmpty || isPasswordShort) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Please enter a valid password.",
        life: 3000,
      });
    } else if (password !== confirmPassword) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Passwordi nuk perputhet.",
        life: 3000,
      });
    } else {
      // Perform the confirm action here
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Passwordi konfirmohet!",
        life: 3000,
        sticky: false,
      });
    }
  };

  return (
    <section className="bg-gray-200 min-h-screen flex  items-center justify-center">
      <div
        style={{ height: "49rem" }}
        className="flex items-center max-w-7xl gap-20"
      >
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
            Vendosni Passwordin e ri.
            <div className="middle-text">Duhet të paktën 8 karaktere.</div>
            {/* Password new */}
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {/*Confirm Password new 2*/}
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <div className="reset-button">
              <Button
                variant="contained"
                onClick={handleConfirmClick}
                disabled={isPasswordEmpty || isPasswordShort}
              >
                Confirm
              </Button>
            </div>
            <div className="back-login">
              <Link to="/" className="blackLink">
                <ArrowBack />
                Back to log in
              </Link>
            </div>
          </div>
          <Toast ref={toast} position="center" />
        </div>
      </div>
    </section>
  );
};

export default ConfirmComponent;
