import create from "zustand";
import mainAxios, { setAuthToken } from "../services/axios";
import { expireCookie, getCookie, setCookie } from "../services/helpers";

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

  refreshToken: async ({ tokeCookie }) => {
    // Create the headers with the refresh token
    const headers = {
      Authorization: `Bearer ${tokeCookie}`,
    };

    // Make the post request to the other link
    return await mainAxios
      .post("/refresh", { headers })
      .then((res) => {
        const { refresh_token } = res?.data;
        console.log(refresh_token, "res");
        // Update the state and cookies with the new refresh token

        setCookie("refresh_token", refresh_token);

        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  },
}));
