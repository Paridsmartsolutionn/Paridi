// import { atom } from "recoil";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import create from "zustand";
import useStorage from "../hooks/useStorage";
import mainAxios, { setAuthToken } from "../services/axios";
import { expireCookie, getCookie, setCookie } from "../services/helpers";
import axios from "axios";
// export const userAtom = atom({
//     key: 'user', // unique ID (with respect to other atoms/selectors)
//     default: null, // default value (aka initial value)
//   });

export const useUser = create((set) => ({
  user: null,
  logout: () => {
    set({ user: null });
    setAuthToken();
    expireCookie("access_token");
    expireCookie("refresh_token");
  },

  login: async ({ username, nipt, password }) => {
    return await mainAxios
      .post("/login", {
        username,
        nipt,
        password,
      })
      .then((res) => {
        const { access_token, refresh_token, ...user } = res?.data;
        if (res.status === 200) {
          set({ user });
          setAuthToken(access_token);
          setCookie("access_token", access_token);
          setCookie("refresh_token", refresh_token);
          return true;
        }
        return false;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  },
}));
