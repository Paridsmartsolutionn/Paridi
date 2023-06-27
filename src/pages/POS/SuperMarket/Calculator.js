import React from "react";
import "./SuperMarketCss/Calculator.scss";
import BackspaceIcon from "@mui/icons-material/Backspace";
import SearchIcon from "@mui/icons-material/Search";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import ButtonGroupS from "./ButtonGroup/ButtonGroup";
import KeyboardReturnSharpIcon from "@mui/icons-material/KeyboardReturnSharp";

const Calculator = () => {
  return (
    <div className="boxCalculator">
      <div className="calculator">
        <div className="calculator__output">
          <QrCode2Icon />
          <SearchIcon />
        </div>
        <div className="calculator__keys">
          <button className="calculator__key">7</button>
          <button className="calculator__key">8</button>
          <button className="calculator__key">9</button>
          <button className="calculator__key calculator__key--operator">
            -
          </button>

          <button className="calculator__key">4</button>
          <button className="calculator__key">5</button>
          <button className="calculator__key">6</button>
          <button className="calculator__key calculator__key--operator">
            +
          </button>
          <button className="calculator__key">1</button>
          <button className="calculator__key">2</button>
          <button className="calculator__key">3</button>
          <button className="calculator__key">.</button>
          <button className="calculator__key">0</button>

          <button className="calculator__key calculator__key--operator">
            <BackspaceIcon />
          </button>
          <button className="calculator__key calculator__key--enter">
            <KeyboardReturnSharpIcon />
          </button>
        </div>
      </div>
      <ButtonGroupS />
    </div>
  );
};

export default Calculator;
