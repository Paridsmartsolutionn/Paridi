// import {
//   Autocomplete,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   TextField,
// } from "@mui/material";
// import React from "react";
// import Form from "react-bootstrap/Form";
// // import Departamenti from "../../minimodal/Departamenti";
// import Departamenti from "../../../fature-blerje/minimodal/Departamenti";
// import Transportues from "../../../fature-blerje/minimodal/Transportues";
// import Veprime from "../../../fature-blerje/minimodal/Veprime";

// const EshteFurnitor = ({
//   toggleState,
//   disabled,
//   state,
//   handleChange,
//   veprime,
//   fetchPost,
//   departamenti,
//   transportuesi,
// }) => {
//   const veprimet = [
//     { label: "Euro", id: "EU" },
//     { label: "Dollar", id: "USD" },
//     { label: "Pound", id: "PD" },
//   ];

//   return (
//     <div>
//       <div
//         className={toggleState === 4 ? "content  active-content" : "content"}
//       >
//         <div className="grid gap-2 grid-cols-2">
//           <div>
//             <Autocomplete
//               disablePortal
//               id="combo-box-demo"
//               options={veprimet}
//               sx={{ width: "100%" }}
//               size="small"
//               renderInput={(params) => (
//                 <TextField {...params} label="Veprime" />
//               )}
//             />
//             {/* ////// MiniModal */}
//             <div className="absolute  hover:shadow-md hover:rotate-90 transition-all">
//               <Veprime />
//             </div>
//           </div>
//           <div className="bg-gray-100 rounded-tr-lg rounded-br-lg flex justify-center items-center relative">
//             <Autocomplete
//               disablePortal
//               id="combo-box-demo"
//               options={veprimet}
//               sx={{ width: "100%" }}
//               size="small"
//               renderInput={(params) => (
//                 <TextField {...params} label="Transportuesi" />
//               )}
//             />
//             {/* ////// MiniModal */}
//             <div className=" hover:scale-110 transition-all">
//               <Transportues fetchMonedhat={fetchPost} />
//             </div>
//           </div>
//           <div className="bg-gray-100 rounded-tr-lg rounded-br-lg flex justify-center items-center relative">
//             <Autocomplete
//               disablePortal
//               id="combo-box-demo"
//               options={veprimet}
//               sx={{ width: "100%" }}
//               size="small"
//               renderInput={(params) => (
//                 <TextField {...params} label="Departamenti" />
//               )}
//             />
//             {/* ////// MiniModal */}
//             <div className=" hover:scale-110 transition-all">
//               <Departamenti fetchMonedhat={fetchPost} />
//             </div>
//           </div>

//           <FormControlLabel
//             control={
//               <Checkbox
//                 disabled={disabled}
//                 type="checkbox"
//                 size="small"
//                 value={state?.Import}
//                 onChange={(e) => handleChange("Import", e.target.checked)}
//               />
//             }
//             label="Import"
//           />
//           <TextField
//             disabled={disabled}
//             type="date"
//             value={state?.Deklarimit}
//             label="Data e deklarimit"
//             InputLabelProps={{
//               shrink: true,
//             }}
//             onChange={(e) => handleChange("Deklarimit", e.target.value)}
//             size="small"
//           />
//           <TextField
//             disabled={disabled}
//             type="text"
//             label="Nipt Transportuesi"
//             value={state?.NiptTransport}
//             onChange={(e) => handleChange("NiptTransport", e.target.value)}
//             size="small"
//           />

//           <Button className="hover:shadow-md shadow-sky-600" variant="outlined">
//             Shperndaje
//           </Button>
//           <TextField
//             disabled={disabled}
//             type="text"
//             label="Targa"
//             value={state?.Targa}
//             onChange={(e) => handleChange("Targa", e.target.value)}
//             size="small"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EshteFurnitor;
