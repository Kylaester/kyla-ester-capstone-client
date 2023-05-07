// insert warehouse page details here
import Hero from "../Components/Hero/Hero.js";
import Nav from "../Components/Nav/Nav.js";
import SideBar from "../Components/SideBar/SideBar.js";
import "./Home.scss";
import Waves from "../Assets/abstract-horizontal-background-with-colorful-waves-in-yellow-orange-and-brown-colors-trendy-illustra.svg";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="Background">
        <Nav />
        <Hero />
        <SideBar />
      </section>
    </>
  );
}

export default Home;

/////////////////////DELETE//////////////////
