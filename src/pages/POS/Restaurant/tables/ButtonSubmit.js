import React from "react";
import { Button } from "@mui/material";

const ButtonSubmit = () => {
  const handleFormSubmit = () => {
    // Handle form submission logic
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleFormSubmit}
        sx={{
          height: "5rem",
          borderRadius: "10rem",
          width: "13rem",
          position: "absolute",
          bottom: "20px",
          right: "20px",
        }}
        className="button-animation"
      >
        Place Order
      </Button>
    </>
  );
};

export default ButtonSubmit;
