import React from "react";
import { Button, TextField } from "@mui/material";
import foto1 from "../../assets/Photo/foto1.jpg";
import foto2 from "../../assets/Photo/foto2.jpg";
import foto3 from "../../assets/Photo/foto3.jpg";
import foto4 from "../../assets/Photo/foto4.jpg";
import "./LandingPage.scss";
import NavbarLanding from "../../components/Navbar/NavbarLanding";
const LandingPage = () => {
  return (
    <main className="bg-white container">
      <NavbarLanding />
      <section className="section2">
        <div className="left-section">
          <h1>Partner ne zhvillimin e biznesit tuaj PSS</h1>
          <p>Build your business here. Take it anywhere.</p>

          <div className="button-group">
            <input
              type="text"
              className="email"
              placeholder="Enter you email"
            />

            <button className="button">Send</button>
          </div>
          <p>
            Try Shopify free for 3 days, no credit card required. By entering
            your email, you agree to receive marketing emails from Shopify.
          </p>
        </div>

        <div className="right-section">
          <div className="warpper bg-no-repeat bg-cover bg-center">
            <img src={foto1} alt="" />
            <img src={foto2} alt="" />
            <img src={foto3} alt="" />
            <img src={foto4} alt="" />
          </div>
        </div>
      </section>
      <section className="section3">
        <div>
          <p className="text-4xl font-bold">
            Discover why millions of entrepreneurs choose Shopify to build their
            business—from Hello World to IPO.
          </p>
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
