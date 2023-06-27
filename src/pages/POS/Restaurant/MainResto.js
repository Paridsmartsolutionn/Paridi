import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./RestorantCss/MainResto.scss";
import TablePos from "./tables/SvgTablePos";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function MainResto({ onNumberOfTablesChange }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [numberOfTables, setNumberOfTables] = useState(0);

  const handleDesignClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDesignClose = () => {
    setAnchorEl(null);
  };

  const handleDesignSelect = (option) => {
    setSelectedOption(option);
    handleDesignClose();
  };

  return (
    <div className="template">
      <div className="p-2">
        <div className="">
          <ButtonGroup size="sm" className="m-3" style={{ height: "20px" }}>
            <Button
              sx={{
                border: "none",
              }}
            >
              Brenda
            </Button>
            <Button
              sx={{
                border: "none",
              }}
            >
              Jasht
            </Button>
            <Button
              sx={{
                border: "none",
              }}
            >
              K2
            </Button>
          </ButtonGroup>
          <input
            type="number"
            onChange={(event) =>
              onNumberOfTablesChange(parseInt(event.target.value, 10))
            }
          />
        </div>
      </div>
      <div className="p-3">
        <div className="design-button">
          <Button onClick={handleDesignClick}>Design</Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleDesignClose}
          >
            <MenuItem onClick={() => handleDesignSelect("option1")}>
              Option 1
            </MenuItem>
            <MenuItem onClick={() => handleDesignSelect("option2")}>
              Option 2
            </MenuItem>
            {/* Add more options if needed */}
          </Menu>
        </div>
      </div>
      {selectedOption === "option1" && (
        <TablePos numberOfTables={numberOfTables} />
      )}
    </div>
  );
}

export default MainResto;
