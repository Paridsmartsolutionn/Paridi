import React from "react";
import { Button, TextField } from "@mui/material";
import foto1 from "../assets/Photo/foto1.jpg";
import foto2 from "../assets/Photo/foto2.jpg";
import foto3 from "../assets/Photo/foto3.jpg";
import foto4 from "../assets/Photo/foto4.jpg";

import NavbarLanding from "../components/Navbar/NavbarLanding";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <main className="bg-white">
      <NavbarLanding />
      <section
        style={{ background: "#1971c2" }}
        className=" section1-landingpage container h-2/3 gap-5 p-12 flex rounded-br-md  rounded-bl-md"
      >
        <div className="xl:w-2/4 lg:full mt-4 text-white md:w-full">
          <h1 className="text-6xl font-bold ">
            Partner ne zhvillimin e biznesit tuaj PSS
          </h1>
          <p className="font-normal text-lg mt-6">
            Build your business here. Take it anywhere.
          </p>

          <div className="mt-6 gap-4 flex  ">
            <TextField
              variant="outlined"
              className="bg-slate-300 z-0 rounded-xl email"
              placeholder="Enter you email"
            />

            <button
              className="p-3 border rounded-xl w-20  transform
                  hover:bg-blue-400 hover:bg-opacity-30 transition duration-100 ease-in-out"
            >
              Go
            </button>
          </div>
          <p className="text-lg font-normal mt-6">
            Try Shopify free for 3 days, no credit card required. By entering
            your email, you agree to receive marketing emails from Shopify.
          </p>
          <Link to="fature-blerje">Fature</Link>
        </div>

        <div className="xl:w-2/4 xl:h-full lg:w-full md:w-full relative overflow-hidden rounded-xl shadow-xl bg-no-repeat bg-cover bg-center  ">
          <div className="warpper bg-no-repeat bg-cover bg-center">
            <img src={foto1} alt="" />
            <img src={foto2} alt="" />
            <img src={foto3} alt="" />
            <img src={foto4} alt="" />
          </div>
        </div>
      </section>
      <section className="container p-16 text-black flex h-screen rounded-xl">
        <div>
          <div className="px-5">
            <p className="text-4xl font-bold">
              Discover why millions of entrepreneurs choose Shopify to build
              their business—from Hello World to IPO.
            </p>
          </div>
          <div></div>
        </div>
      </section>
      <section className="bg-cyan-300">dsfsd</section>
      <section className="bg-cyan-400">fsdfds</section>
      <section className="bg-cyan-100">sdfsd</section>
      <section className="bg-cyan-100">sdfds</section>
    </main>
  );
};

export default LandingPage;
