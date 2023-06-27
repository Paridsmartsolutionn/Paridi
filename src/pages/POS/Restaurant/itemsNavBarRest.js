import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArticleIcon from "@mui/icons-material/Article";
import PaymentIcon from "@mui/icons-material/Payment";
import TableBarIcon from "@mui/icons-material/TableBar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const itemsOne = [
  {
    id: 1,
    text: "Tables",
    url: "/pos/restaurant",
    photo: <TableBarIcon fontSize="medium" className="opacity-70" />,
  },

  {
    id: 2,
    text: "Menu",
    url: "/fature-shitje",
    photo: <MenuBookIcon fontSize="medium" className="opacity-70" />,
  },

  {
    id: 3,
    text: "Porosi",
    url: "/artikuj",
    photo: <ArticleIcon fontSize="medium" className="opacity-70" />,
  },

  {
    id: 4,
    text: "Pagesa",
    url: "/raporte",
    photo: <PaymentIcon fontSize="medium" className="opacity-70" />,
  },
  {
    id: 5,
    text: "Users",
    url: "/ruw",
    photo: <ArrowDropDownIcon fontSize="medium" className="opacity-70" />,
  },
];

export default itemsOne;
