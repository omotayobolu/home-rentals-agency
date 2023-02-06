import React from "react";
import Minimum from "../assets/minimum-pic.png";
import MinimumLivingCost from "./data/MinimumLivingCost";

const Living = () => {
  return (
    <section className="w-full">
      <div className="lg:mx-[8%] my-[8%] mx-[4%] ">
        <h2 className="lg:text-start text-center">
          <span className="border-b-2 border-orange">Minimum Living Cost</span>{" "}
          Takes Care Of Everything
        </h2>
        <div className="flex lg:flex-row flex-col items-center">
          <img src={Minimum} alt="" />
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-10">
            {MinimumLivingCost.map((item) => (
              <div key={item.id} className="living-icon">
                {item.image}
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
