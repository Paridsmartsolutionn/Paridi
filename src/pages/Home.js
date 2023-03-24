import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../components/Navbar/Footer";
import NavBar from "../components/Navbar/NavBar";
import SideBar from "../components/Navbar/SideBar";
import { useUser } from "../zustand/common";
import mainAxios from "../services/axios";

const Home = () => {
  const fetch = useUser((user) => user.fetchApi);
  console.log("fetch", fetch);

  useEffect(() => {
    (async () => {
      mainAxios.get("/arka/list").then((res) => {
        console.log({ res });
      });
    })();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="flex ">
        <div>
          <SideBar />
        </div>
        <div>
          <p> Nuk kemi punuar ende per kete !</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
