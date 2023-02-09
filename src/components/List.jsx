import React from "react";
import PropertiesList from "./data/Property";
import Bed from "../assets/Bed.svg";
import Shower from "../assets/Shower.svg";
import Size from "../assets/Size.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Button from "./UI/Button";

const List = () => {
  const screenWidth = window.innerWidth;

  return (
    <section className="bg-muted_color lg:px-[8%] py-[4%] px-[4%] ">
      <div className="flex lg:flex-row flex-col gap-5 justify-between items-center">
        <div>
          <h2>
            <span className="border-b-2 border-orange">List</span> Of Properties
          </h2>
        </div>
        <Button className="rounded-md px-6 py-4">View All Properties</Button>
      </div>
      <Swiper
        slidesPerView={screenWidth > 1024 ? 3 : 1}
        spaceBetween={30}
        className="grid lg:grid-cols-3 grid-cols-1 gap-12 my-8 p-8"
      >
        {PropertiesList.map((property) => (
          <SwiperSlide
            key={property.id}
            className="property
            hover:drop-shadow-propertyList max-w-full"
          >
            {property.image}
            <div className="bg-white border-b border-x border-light_grey hover:border-none rounded-b-[27px]">
              <div className="lg:p-6 p-4">
                <h5>{property.title}</h5>
                <p className="text-dark_grey mt-4">{property.room}</p>
                <span className="text-orange font-bold lg:text-sm text-lbase">
                  {property.price}
                </span>
              </div>
              <div>
                <hr className="border-grey_two" />
                <div className="flex justify-around items-center py-6">
                  <div className="room-features flex items-center gap-4">
                    <img src={Bed} alt="" />
                    <span>4</span>
                  </div>
                  <div className="room-features flex items-center gap-4">
                    <img src={Shower} alt="" />
                    <span>2</span>
                  </div>
                  <div className="room-features flex items-center gap-4">
                    <img src={Size} alt="" />
                    <span>2</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pagination flex justify-center items-center bottom-0">
        <span className="bg-[#f3f3f3] text-pagination">First</span>
        <span className="text-orange bg-white">1</span>
        <span className="text-white bg-orange">2</span>
        <span className="text-orange bg-white">3</span>
        <span className="text-orange bg-white">Next</span>
      </div>
    </section>
  );
};

export default List;
