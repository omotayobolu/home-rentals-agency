import React from "react";

import Logo from "../assets/logo.png";
import Location from "../assets/location.png";
import Phone from "../assets/phone.png";
import Fax from "../assets/fax.png";
import Facebook from "../assets/facebook black.1.png";
import Twitter from "../assets/twitter.png";
import LinkedIn from "../assets/linkedin.png";
import YouTube from "../assets/youtube.png";
import Instagram from "../assets/instagram.png";
import GooglePlus from "../assets/googleplus.png";
import Pinterest from "../assets/pinterest.png";
import Hotspot from "../assets/rss.png";

const Footer = () => {
  return (
    <footer
      id="contact-us"
      className="bg-white lg:mt-[10%] mt-[5%] lg:mx-[8%] mx-[4%]"
    >
      <hr className="border border-orange" />
      <div className="py-16 flex lg:flex-row flex-col items-center lg:justify-around gap-6 text-left justify-center ">
        <div>
          <img src={Logo} className="bg-black" alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-4 items-center">
            <img src={Location} alt="" />
            <span>
              345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
            </span>
          </div>
          <div className="flex lg:flex-row flex-col justify-between gap-5">
            <div className="flex items-center flex-row gap-4">
              <img src={Phone} alt="" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center flex-row gap-4">
              <img src={Fax} alt="" />
              <span>(123) 456-7890</span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between flex-nowrap">
            <span className="text-base font-regular">Social Media</span>
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={YouTube} alt="" />
            <img src={Instagram} alt="" />
            <img src={GooglePlus} alt="" />
            <img src={Pinterest} alt="" />
            <img src={Hotspot} alt="" />
          </div>
        </div>
      </div>
      <div className=" lg:mx-[8%] mx-[5%] my-[2%]">
        <hr className="border-top border-light_grey my-4" />
        <div className="flex lg:flex-row flex-col justify-between gap-4">
          <div className="footer-nav">
            <span>About Us</span>
            <span>Contact Us</span>
            <span>Help</span>
            <span>Privacy Policy</span>
            <span>Disclaimer</span>
          </div>
          <span className="text-base text-center">
            Copyright © 2023 Minimumlivingcost. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
