import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { Checkbox } from "primereact/checkbox";
import bgLogin from "../../../assets/bg-login.png";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import { useUser } from "../../../zustand/common";
import Autocomplete from "@mui/material/Autocomplete";
const Register = () => {
  const [checked, setChecked] = useState(false);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  const login = useUser((user) => user.login);
  const user = useUser((userStore) => userStore.user);
  const [nipt, setNipt] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  console.log({ user });

  const submit = (e) => {
    e.preventDefault();
    login({ username, nipt, password }).then((res) => {
      console.log({ res });
      if (res) {
        navigate("/home");
      } else if (!user) {
        setError(true);
        toast.error("Te dhenat jane gabim", {
          draggable: true,
          position: toast.POSITION.TOP_CENTER,
        });
      }
    });
  };

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
  const [Roli, setRoli] = useState("");

  const roli = [
    { title: "Perdorues 1", value: 1 },
    { title: "Perdorues 2", value: 2 },
    { title: "Perdorues 3", value: 3 },
  ];
  //  const handleChange=(key,value)=>{
  //   setState((state)=>{
  //    return{
  //      ...state,
  //      [key]:value
  //     }
  //    })
  //    }
  return (
    <section className="bg-gray-200 min-h-screen flex  items-center justify-center">
      <ToastContainer />
      <div
        style={{ height: "49rem" }}
        className="flex  items-center max-w-7xl gap-20"
      >
        <div className="w-1/2   xl:block  hidden  ">
          <img src={bgLogin} />
        </div>
        <form className="xl:w-1/2 p-16 " onSubmit={submit}>
          <h1 className="font-bold text-2xl mb-4">Rregjistrohu në PSS</h1>

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
          <div>
            <Autocomplete
              required
              className="mt-3"
              fullWidth
              options={roli.map((option) => option.title)}
              value={Roli}
              onChange={(e, v) => setRoli(v)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  onChange={({ target }) => setRoli(target.value)}
                  label="Roli"
                />
              )}
            />
          </div>

          <div className="mt-3">
            <Button fullWidth variant="contained" type="submit">
              Regjistrohu
            </Button>
          </div>
          <div className="mt-3 mx-auto text-center">
            <span>
              Jeni regjistruar!{" "}
              <Link className="linku" to="/">
                Hyni me kredencialet tuaja
              </Link>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
