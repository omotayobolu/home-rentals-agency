import React from "react";
import Quote from "../assets/quote.png";
import Testimony1 from "../assets/testimonyimg1.png";
import PropertyCover from "../assets/cover.jpg";
import PlayIcon from "../assets/playIcon.png";

const Testimonies = () => {
  return (
    <section className="bg-testimoniesBg lg:pl-[8%] px-[4%] ">
      <div className="grid grid-cols-2 gap-5">
        <div className="relative">
          <p className="font-regular text-lbase leading-9 p-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
            pellentesque est. Curabitur at odio sit amet libero vulputate
            efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
            faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
            fringilla finibus.
          </p>
          <img src={Quote} className="absolute top-0 left-0" alt="" />
          <div className="flex items-center gap-5 lg:pl-8 pl-4">
            <img src={Testimony1} alt="" />
            <div>
              <p className="text-orange text-lbase font-bold">Harry Wilson</p>
              <p className="text-black text-base font-regular">
                Property Owner
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={PropertyCover} className="w-full" alt="" />
          <img
            src={PlayIcon}
            className="absolute p-6 bg-orange top-[50%] left-[50%] rounded-[50%] cursor-pointer"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
