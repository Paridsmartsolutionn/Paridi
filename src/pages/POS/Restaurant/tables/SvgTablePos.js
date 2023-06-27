import React, { useState } from "react";
import Svg from "./svg";
import Dialog from "./Dialog";

const TablePos = ({ numberOfTables }) => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleCheckboxChange = (event) => {
  //   const color = event.target.checked ? "red" : "#87CBB9";
  //   setLineColor(color);
  // };

  const handleTableDragStart = (event) => {
    event.stopPropagation();
    const offsetX =
      event.clientX - event.currentTarget.getBoundingClientRect().left;
    const offsetY =
      event.clientY - event.currentTarget.getBoundingClientRect().top;
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ offsetX, offsetY })
    );
  };

  const handleTableDragOver = (event) => {
    event.preventDefault();
  };

  const handleTableDrop = (event) => {
    event.preventDefault();
    const data = JSON.parse(event.dataTransfer.getData("text/plain"));
    const newX =
      event.clientX -
      event.currentTarget.getBoundingClientRect().left -
      data.offsetX;
    const newY =
      event.clientY -
      event.currentTarget.getBoundingClientRect().top -
      data.offsetY;
    setPosition({ x: newX, y: newY });
  };

  return (
    <>
      <div
        className="tablePos"
        onClick={handleClick}
        draggable
        onDragStart={handleTableDragStart}
        onDragOver={handleTableDragOver}
        onDrop={handleTableDrop}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        <Svg numberOfTables={numberOfTables} />
      </div>
      <Dialog
        open={open}
        handleClose={handleClose}
        numberOfTables={numberOfTables}
      />
    </>
  );
};

export default TablePos;
