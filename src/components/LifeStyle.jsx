import React from "react";
import Flex1 from "../assets/rawflex1.png";
import Happiness from "../assets/happiness.png";
import Cleaning from "../assets/cleaning.png";
import Roommate from "../assets/roommate.png";
import Button from "./UI/Button";

const LifeStyle = () => {
  return (
    <section className="bg-white lg:px-[8%] px-[4%] py-[4%]">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 items-center">
        <div className="grid grid-cols-2 items-end gap-4 justify-items-end">
          <div className="flexibility-image">
            <img src={Flex1} alt="" />
            <div>Flexible Leases</div>
          </div>
          <div className="flexibility-image">
            <img src={Happiness} alt="" />
            <div>7-Day Happiness Guaranteed</div>
          </div>
          <div className="flexibility-image">
            <img src={Cleaning} alt="" />
            <div>Monthly House Cleaning</div>
          </div>
          <div className="flexibility-image">
            <img src={Roommate} alt="" />
            <div>Choose Your Own Roommate</div>
          </div>
        </div>
        <div className="lg:mr-[10%] lg:text-start text-center">
          <h2>Flexibility and options to suit your lifestyle.</h2>
          <p className="font-regular lg:text-lbase text-base text-black mt-[5%]">
            You need it? We got it. We make finding your next home easy,
            comfortable, and simple. From our happiness guarantee to our
            selective roommate finder option. We provide you the flexibility
            that you most desire.
          </p>
          <div className="mt-8">
            <Button className="px-6 py-4 rounded-xl">Search Rooms</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeStyle;
