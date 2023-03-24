import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const useStore = (set) => ({
  //   filter: [],
  //   wordEntered: "",
  //   handleFilter: (e, data) => {
  //     const searchWord = e.target.value;
  //     set(() => ({ wordEntered: searchWord }));
  //     const newFilter = data.filter((value) => {
  //       return value.title.toLowerCase().includes(searchWord.toLowerCase());
  //     });
  //     if (searchWord === "") {
  //       set(() => ({ filter: [] }));
  //     } else {
  //       set(() => ({ filter: newFilter }));
  //     }
  //   },
  //   clearInput: () => {
  //     set((state) => ({ filter: [], wordEntered: "" }));
  //   },

  disabled: true,
  furnitoret: [
    { label: "Furnitor1", id: 1 },
    { label: "Furnitor2", id: 2 },
    { label: "Furnitor3", id: 3 },
    { label: "Furnitor4", id: 4 },
  ],
  rows: [],
  columns: [
    { field: "Kodi", title: "Kodi" },
    { field: "BarKod", title: "BarKod" },
    { field: "Pershkrim", title: "Pershkrim" },
    { field: "Njesi_Kodi", title: "Njesi_Kodi" },
    { field: "Sasia_Print", title: "Sasia_Print" },
    { field: "Sasia", title: "Sasia", allowSum: true },
    { field: "Cmimi_pa_TVSH", title: "Cmimi_pa_TVSH" },
    { field: "Cmimi", title: "Cmimi", allowSum: true },
    { field: "Tvsh_Vlera", title: "Tvsh_Vlera", allowSum: true },
    { field: "Skonto_Vlera", title: "Skonto_Vlera", allowSum: true },
    { field: "DateGarancie", title: "DateGarancie" },
    { field: "NrSerik", title: "NrSerik", filter: "agMultiColumnFilter" },
    { field: "CmimiShites", title: "CmimiShites" },
    { field: "CmimiPeshaKG", title: "CmimiPeshaKG" },
    { field: "Vlera_Pa_Tvsh", title: "Vlera_Pa_Tvsh", allowSum: true },
    { field: "SasiaPak", title: "SasiaPak" },
    { field: "DataSk", title: "DataSk" },
    { field: "CmimiShitesMarzhi", title: "CmimiShitesMarzhi" },
    { field: "Volumi", title: "Volumi" },
    { field: "Tipi", title: "Tipi" },
    { field: "TipVlere_ID", title: "TipVlere_ID" },
    { field: "TipPaketimi_Kodi", title: "TipPaketimi_Kodi" },
    { field: "LlojiMallit_ID", title: "LlojiMallit_ID" },
    { field: "Dep_Kodi", title: "Dep_Kodi" },
    { field: "Tvsh", title: "Tvsh" },
    { field: "Kodi1", title: "Kodi1" },
    { field: "Kodi2", title: "Kodi2" },
    { field: "Kodi3", title: "Kodi3" },
    { field: "Kodi4", title: "Kodi4" },
    { field: "Magazina_Kodi", title: "Magazina_Kodi" },
    { field: "Klasifikim1_ID", title: "Klasifikim1_ID" },
    { field: "Klasifikim2_ID", title: "Klasifikim2_ID" },
    { field: "Klasifikim3_ID", title: "Klasifikim3_ID" },
    { field: "Klasifikim4_ID", title: "Klasifikim4_ID" },
    { field: "Selektuar", title: "Selektuar" },
    { field: "Total", title: "Total", allowSum: true },
  ],
});

const useCourseStore = create(devtools(persist(useStore, { name: "Courses" })));
export default useCourseStore;
