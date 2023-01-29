import React from "react";
import PropertiesList from "../data/Property";
import Bed from "../assets/Bed.svg";
import Shower from "../assets/Shower.svg";
import Size from "../assets/Size.svg";

const List = () => {
  return (
    <section className="bg-muted_color lg:px-[8%] lg:py-[4%]">
      <div className="flex justify-between items-center">
        <div>
          <h2>List Of Properties</h2>
          <hr width="25%" className="bg-orange text-orange h-[2px]" />
        </div>
        <button className="bg-orange text-white rounded-md text-[17px] py-4 px-8">
          View All Properties
        </button>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-12 my-8">
        {PropertiesList.map((property) => (
          <div
            id={property.id}
            className="bg-white border border-light_grey rounded-[27px]
            hover:drop-shadow-propertyList hover:border-none
            "
          >
            {property.image}
            <div className="p-6">
              <h5>{property.title}</h5>
              <p className="text-dark_grey mt-4">{property.room}</p>
              <span className="text-orange font-bold lg:text-sm text-lbase fo">
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
      </div>
    </section>
  );
};

export default List;
