import DescriptionIcon from "@mui/icons-material/Description";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import ArticleIcon from "@mui/icons-material/Article";
import TableBarIcon from "@mui/icons-material/TableBar";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
// import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

const items = [
  {
    id: 1,
    text: "Faturë Blerje",
    url: "/fature-blerje",
    photo: <DescriptionIcon fontSize="medium" className="opacity-50" />,
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
    photo: <TableBarIcon fontSize="medium" className="opacity-50" />,
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
