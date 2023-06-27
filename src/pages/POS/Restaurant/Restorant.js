import React, { useState } from "react";
import NavBarPos from "../NavBarPos";
import MainResto from "./MainResto";
import "./RestorantCss/MainResto.scss";
import TablePos from "./tables/SvgTablePos";

const Restorant = () => {
  const [numberOfTables, setNumberOfTables] = useState(0);

  const handleNumberOfTablesChange = (value) => {
    setNumberOfTables(value);
  };

  const renderTables = () => {
    const tables = [];
    for (let i = 0; i < numberOfTables; i++) {
      tables.push(<TablePos key={i} numberOfTables={i + 1} />);
    }
    return tables;
  };

  return (
    <div>
      <NavBarPos />
      <div className="all-web">
        <MainResto
          numberOfTables={numberOfTables}
          onNumberOfTablesChange={handleNumberOfTablesChange}
        />
        <div className="mainContainer mt-2">
          <div className="containerTwo">{renderTables()}</div>
        </div>
      </div>
    </div>
  );
};

export default Restorant;
