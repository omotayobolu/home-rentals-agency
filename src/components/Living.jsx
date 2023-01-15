import React from "react";
import Minimum from "../assets/minimum-pic.png";
import MinimumLivingCost from "../data/MinimumLivingCost";

const Living = () => {
  return (
    <section className="w-full">
      <div className="lg:mx-[8%] lg:my-[4%] ">
        <h2 className="text-black">
          Minimum Living Cost Takes Care Of Everything
        </h2>
        <hr width="33%" className="bg-orange text-orange h-[2px]" />
        <div className="flex flex-row items-center">
          <img src={Minimum} alt="" />
          <div className="grid grid-cols-3 gap-y-20 gap-10">
            {MinimumLivingCost.map((item) => (
              <div id="item.id" className="w-[90%]">
                <div className="living-icon w-[30%] rounded-xl bg-white p-3 drop-shadow-minimumLiving">
                  {item.image}
                </div>
                <h4 className="pt-4 text-black">{item.text}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Living;
