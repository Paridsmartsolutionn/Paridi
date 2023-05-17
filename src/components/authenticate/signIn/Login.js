import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useUser } from "../../../zustand/common";
import { Button, TextField } from "@mui/material";
import { Checkbox } from "primereact/checkbox";
import bgLogin from "../../../assets/bg-login.png";
import Register from "../register/Register";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LockIcon from "@mui/icons-material/Lock";
import "./login.scss";
import { getCookie, setCookie } from "../../../services/helpers";
import mainAxios from "../../../services/axios";
const Login = () => {
  const [checked, setChecked] = useState(false);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  const onCityChange = (e) => {
    let selectedCities = [...cities];
    if (e.checked) selectedCities.push(e.value);
    else selectedCities.splice(selectedCities.indexOf(e.value), 1);
    setCities(selectedCities);
  };
  const login = useUser((user) => user.login);
  const user = useUser((userStore) => userStore.user);
  const refreshToken = useUser((useToken) => useToken.refreshToken);
  const [nipt, setNipt] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    login({ username, nipt, password }).then((res) => {
      if (res) {
        const tokeCookie = getCookie("refresh_token", refreshToken);
        console.log(tokeCookie);

        refreshToken({ tokeCookie });
        navigate("/fature-blerje");
      } else if (!user) {
        setError(true);
        toast.error("Te dhenat jane gabim", {
          draggable: true,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    });
  };
  // const refreshToken = async ({ tokeCookie }) => {
  //   // Create the headers with the refresh token
  //   const headers = {
  //     Authorization: `Bearer ${tokeCookie}`,
  //   };
  //   console.log(tokeCookie, "tokeCookie");
  //   // Make the post request to the other link
  //   return await mainAxios
  //     .post("/refresh", { headers })
  //     .then((res) => {
  //       const { refresh_token } = res?.data;

  //       // Update the state and cookies with the new refresh token

  //       setCookie("refresh_token", refresh_token);

  //       return true;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return false;
  //     });
  // };
  const [showPassword, setShowPassword] = useState(true);

  const showHidePassword = (
    <>
      {showPassword ? (
        <VisibilityOffIcon
          onClick={() => {
            setShowPassword(false);
          }}
          className="absolute cursor-pointer"
          style={{ right: 15, top: 8 }}
        />
      ) : (
        <VisibilityIcon
          onClick={() => {
            setShowPassword(true);
          }}
          className="absolute cursor-pointer"
          style={{ right: 15, top: 8 }}
        />
      )}
    </>
  );

  //state i hapjes se modales
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className="text-white butoni" onClick={handleOpen}>
        <span>Hyr</span> <LockIcon />
      </Button>

      <Modal keepMounted open={open} onClose={handleClose}>
        <Box className="box">
          <form className="form" onSubmit={submit}>
            <ToastContainer />

            <h1 className="mb-4">Hyr në PSS</h1>

            {!error ? (
              <TextField
                className="mb-3"
                variant="outlined"
                required
                fullWidth
                label="Nipt"
                size="small"
                type="text"
                value={nipt}
                onChange={(e) => setNipt(e.target.value)}
              />
            ) : (
              <TextField
                className="mb-3"
                variant="outlined"
                error
                required
                fullWidth
                label="Nipt"
                size="small"
                type="text"
                value={nipt}
                onChange={(e) => setNipt(e.target.value)}
              />
            )}

            {!error ? (
              <TextField
                className="mb-3"
                variant="outlined"
                required
                fullWidth
                label="User name"
                size="small"
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            ) : (
              <TextField
                className="mb-3"
                variant="outlined"
                error
                required
                fullWidth
                label="User name"
                size="small"
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            )}

            <div className="relative">
              {!error ? (
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Password"
                  size="small"
                  type={showPassword ? "password" : "text"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              ) : (
                <TextField
                  className="mb-3"
                  variant="outlined"
                  error
                  required
                  fullWidth
                  label="Password"
                  size="small"
                  type={showPassword ? "password" : "text"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              )}
              {showHidePassword}
            </div>
            <div className="flex flex-wrap items-center mb-3 mt-3 justify-between gap-2">
              <div className="flex gap-1 items-center">
                <Checkbox
                  inputId="cb3"
                  value="Shumice"
                  onChange={onCityChange}
                  checked={cities.includes("Shumice")}
                ></Checkbox>
                <span>Më rikujto!</span>
              </div>
              <span className="hover:underline cursor-pointer">
                <Link to="/forgotPassword" className="linku">
                  Keni harruar fjalëkalimin?
                </Link>
              </span>
            </div>

            <div className="mb-3">
              <Button fullWidth variant="contained" type="submit">
                Hyrje
              </Button>
            </div>

            <div className="flex justify-end">
              <span>
                Nuk keni ende nje profil?{" "}
                <Link to="/register" className="linku">
                  Regjistrohu tani!
                </Link>
              </span>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Login;
