import React from "react";
import PropertiesList from "./data/Property";
import Bed from "../assets/Bed.svg";
import Shower from "../assets/Shower.svg";
import Size from "../assets/Size.svg";

import Button from "./UI/Button";

const List = () => {
  return (
    <section className="bg-muted_color lg:px-[8%] py-[4%] px-[3%] ">
      <div className="flex lg:flex-row flex-col gap-5 justify-between items-center">
        <div>
          <h2>
            <span className="border-b-2 border-orange">List</span> Of Properties
          </h2>
        </div>
        <Button className="rounded-md px-6 py-4">View All Properties</Button>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-12 my-8">
        {PropertiesList.map((property) => (
          <div
            id={property.id}
            className="property bg-white border border-light_grey rounded-[27px]
            hover:drop-shadow-propertyList hover:border-none
            "
          >
            {property.image}
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
        ))}
      </div>
      <div className="pagination flex justify-center items-center mt-16">
        <span className="bg-[#f3f3f3] text-pagination">First</span>
        <span className="text-orange bg-white">1</span>
        <span className="text-white bg-orange">2</span>
        <span className="text-orange bg-white">3</span>
        <span className="text-orange bg-white">Next</span>
        {/* IMPLEMENT USING SWIPER JS/REACT-SPLIDE, so make it one row instead of 2 */}
      </div>
    </section>
  );
};

export default List;
