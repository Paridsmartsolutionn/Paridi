import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { RecoilRoot } from "recoil";
import "./index.scss";
import "react-widgets/styles.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
