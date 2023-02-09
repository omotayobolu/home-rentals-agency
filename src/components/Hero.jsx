import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import Map from "../assets/map.png";
import Search from "../assets/icon-search-blue.png";

const Hero = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const screenWidth = window.innerWidth;

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <section
      id="Home"
      className="bg-[url('/src/assets/hero-bg.png')] bg-heroBackgroundColor bg-center bg-cover bg-no-repeat h-screen"
    >
      <div className="lg:px-[8%] px-[4%] pt-[2%] ">
        <header className="relative lg:flex lg:items-end lg:justify-between w-full mb-2">
          <img src={Logo} alt="" />
          {(toggleMenu || screenWidth > 1024) && (
            <nav className="flex lg:flex-row flex-col lg:justify-around justify-center lg:items-end items-center w-full h-full bg-light_black lg:bg-opacity-0 lg:relative fixed lg:ml-[15%] lg:mr-[20%] z-10 top-0 left-0">
              <a href="#">Home</a>
              <a href="#">Landlord</a>
              <a href="#">Tenants</a>
              <a href="#">Contact Us</a>
              <button onClick={toggleNav} className="text-white">
                <FaTimes className="text-sm lg:hidden absolute top-[3%] right-[5%]" />
              </button>
            </nav>
          )}
          {!toggleMenu && (
            <button onClick={toggleNav} className="text-white">
              <FaBars className="text-sm lg:hidden absolute top-[15%] right-[5%]" />
            </button>
          )}
        </header>
        <div className="flex flex-col mt-[3rem] lg:mt-0 text-center lg:text-left lg:flex-row items-center justify-between ">
          <h1 className="text-white font-bold lg:w-[45%]">
            The Most Affordable Place To Stay In The San Franciso Bay Area
          </h1>
          <div className="lg:w-[40%] flex lg:items-center flex-col">
            <img className="block" src={Map} alt="" />
            <div className="lg:w-[90%] py-3 px-1 rounded-lg w-full bg-white flex items-center justify-center">
              <select>
                <option value="All Type">All Type</option>
              </select>
              <select>
                <option value="Neighborhood">Neighborhood</option>
              </select>
              <button className="bg-blue p-3">
                <img src={Search} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
