import React from "react";
import "../RestorantCss/MainResto.scss";

const Svg = ({ numberOfTables }) => {
  return (
    <div className="cardTable">
      <div className="card-content">
        <h1> A{numberOfTables}</h1>
        <h2>18:32</h2>
      </div>
    </div>
  );
};

export default Svg;
