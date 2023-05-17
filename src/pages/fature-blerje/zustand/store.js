import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import moment from "moment";
const useStore = (set) => ({
  // filter: [],
  // wordEntered: "",
  defaultState: {
    data: moment().format("yyyy-MM-DD"),
    MagazinaData: moment().format("yyyy-MM-DD"),
    AfatiData: moment().format("yyyy-MM-DD"),
    Deklarimit: moment().format("yyyy-MM-DD"),
    furnitorType: "",
    furnitorId: "",
    Kodi: "",
    shenim: "",
    Kursi: "",
    Monedha: "",
    magazina: "",
    Menyra: "",
    Nipt: "",
    llojiMonedhes: "",
    Qytetet: "",
    NrOrigjine: "",
    Nr: "",
    NrSerial: "",
    Paguar: "",
    Afati: "",
    Pergjegjes: "",
    arkBank: "",
    Departamenti: "",
    Transport: "",
    Targa: "",
    Kls1: "",
    kls2: "",
    Kls3: "",
    Kls4: "",
    veprime: "",
    NiptTransport: "",
    Import: "",
  },
  // handleFilter: (e, data) => {
  //   const searchWord = e.target.value;
  //   set(() => ({ wordEntered: searchWord }));
  //   const newFilter = data.filter((value) => {
  //     return value.title.toLowerCase().includes(searchWord.toLowerCase());
  //   });
  //   if (searchWord === "") {
  //     set(() => ({ filter: [] }));
  //   } else {
  //     set(() => ({ filter: newFilter }));
  //   }
  // },
  // clearInput: () => {
  //   set((state) => ({ filter: [], wordEntered: "" }));
  // },
});

const useCourseStore = create(devtools(persist(useStore, { name: "Courses" })));
export default useCourseStore;
