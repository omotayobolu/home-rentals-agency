import React from "react";
import Logo from "../assets/logo.png";
import Map from "../assets/map.png";
import Search from "../assets/icon-search-blue.png";

const Hero = () => {
  return (
    <section className="bg-[url('/src/assets/hero-bg.png')] bg-heroBackgroundColor bg-center bg-cover bg-no-repeat h-screen">
      <div className="lg:px-[8%] px-[5%] pt-[2%] ">
        <div className="mb-2 border-b border-b-white lg:flex lg:items-end lg:justify-between w-full">
          <img src={Logo} alt="" />
          <nav className="relative flex lg:justify-around lg:items-end w-[100%] lg:ml-[15%] lg:mr-[20%]">
            <a href="#">Home</a>
            <a href="#">Landlord</a>
            <a href="#">Tenants</a>
            <a href="#">Contact Us</a>
          </nav>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between ">
          <h1 className="text-white font-bold lg:w-[45%]">
            The Most Affordable Place To Stay In The San Franciso Bay Area
          </h1>
          <div className="lg:w-[40%] flex lg:items-center flex-col">
            <img src={Map} alt="" />
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
