import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import ArticleIcon from "@mui/icons-material/Article";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const items = [
  {
    id: 1,
    text: "Faturë Blerje",
    url: "/fature-blerje",
    photo: <DescriptionIcon fontSize="medium" className="opacity-70" />,
  },
  {
    id: 2,
    text: "Faturë Shitje",
    url: "/fature-shitje",
    photo: <RequestQuoteIcon fontSize="medium" className="opacity-50" />,
  },
  {
    id: 3,
    text: "Artikuj",
    url: "/artikuj",
    photo: <ArticleIcon fontSize="medium" className="opacity-50" />,
  },
  {
    id: 4,
    text: "POS",
    url: "/pos",
    photo: <PointOfSaleIcon fontSize="medium" className="opacity-50" />,
    sublinks: [
      {
        id: 1,
        text: " Restorant ",
        url: "/pos/restorant",
        photo: <RestaurantIcon fontSize="small" className="opacity-50" />,
      },
      {
        id: 2,
        text: "Supermarket",
        url: "/pos/supermarket",
        photo: (
          <LocalGroceryStoreIcon fontSize="small" className="opacity-50" />
        ),
      },
      // {
      //   id: 3,
      //   text: "Example",
      //   url: "/pos/Example",
      //   photo: (
      //     <LocalGroceryStoreIcon fontSize="small" className="opacity-50" />
      //   ),
      // },
    ],
  },
  {
    id: 5,
    text: "Fletë Hyrje",
    url: "/flete-hyrje",
    photo: (
      <FormatIndentIncreaseIcon fontSize="medium" className="opacity-50" />
    ),
  },
  {
    id: 6,
    text: "Fletë Dalje",
    url: "/flete-dalje",
    photo: (
      <FormatIndentDecreaseIcon fontSize="medium" className="opacity-50" />
    ),
  },
  {
    id: 7,
    text: "Raporte",
    url: "/raporte",
    photo: <QueryStatsIcon fontSize="medium" className="opacity-50" />,
  },
];

export default items;
