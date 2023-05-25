import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import moment from "moment";
const useStore = (set) => ({
  // filter: [],
  // wordEntered: "",
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
