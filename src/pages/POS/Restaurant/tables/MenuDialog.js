import React from "react";

const MenuDialog = ({ title, itemCount }) => {
  return (
    <div className="table-flex">
      {" "}
      <div className="cardTableDialog">
        <div className="card-contentDialog">
          <h1>{title}</h1>
          <h2>{itemCount} items</h2>
        </div>
      </div>
    </div>
  );
};

export default MenuDialog;
