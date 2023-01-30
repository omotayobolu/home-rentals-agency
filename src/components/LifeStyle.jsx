import React from "react";
import Flex1 from "../assets/rawflex1.png";
import Happiness from "../assets/happiness.png";
import Cleaning from "../assets/cleaning.png";
import Roommate from "../assets/roommate.png";
import Button from "./UI/Button";

const LifeStyle = () => {
  return (
    <section className="bg-white lg:px-[8%] lg:py-[4%]">
      <div className="grid grid-cols-2 gap-20 items-center">
        <div className="grid grid-cols-2">
          <div className="">
            <img src={Flex1} alt="" />
            <img src={Happiness} alt="" />
          </div>
          <div>
            <img src={Cleaning} alt="" />
            <img src={Roommate} alt="" />
          </div>
        </div>
        <div className="lg:mr-[10%]">
          <h2>Flexibility and options to suit your lifestyle.</h2>
          <p className="font-regular lg:text-lbase text-base text-black mt-[5%]">
            You need it? We got it. We make finding your next home easy,
            comfortable, and simple. From our happiness guarantee to our
            selective roommate finder option. We provide you the flexibility
            that you most desire.
          </p>
          <div className="mt-8">
            <Button className="px-6 py-4">Search Rooms</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeStyle;
