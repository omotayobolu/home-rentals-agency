import React, { useState, useRef } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Select from "./UI/Select";

const AddProperty = () => {
  const [dragActive, setDragActive] = useState(false);

  const inputRef = useRef();

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
  };

  const onBrowseClick = () => {
    inputRef.current.click();
  };

  return (
    <section className="bg-white lg:px-[8%] px-[4%] py-[4%]">
      <h5 className="text-center">
        Your property with us and be Confident that Your Room will be Filled
        Out!
      </h5>
      <div className="my-[3%] p-[3%] bg-white drop-shadow-addProperty">
        <h5 className="text-orange text-center font-extrabold">
          Add A New Property
        </h5>
        <form>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:pt-14 pt-6">
            <Input id="Name" label="Name" type="text" placeholder="Name" />
            <Input
              id="Address"
              label="Address"
              type="text"
              placeholder="Address"
            />
            <Input
              id="Unit Number"
              label="Unit Number"
              type="text"
              placeholder="Unit Number"
            />
            <Select label="City" value="Select City" />
            <Select label="State" value="Select State" />
            <Select label="Room Type" value="Select Room Type" />
            <Input id="Price" label="Price" type="number" placeholder="Price" />
          </div>
          <div className="mt-4">
            <label htmlFor="Description" className="text-lbase font-semibold">
              Description<span className="text-orange pl-2">*</span>
            </label>
            <textarea
              className="border border-grey text-base font-regular bg-inputBg text-inputText rounded-md py-4 px-6 tracking-[0.2px] w-full resize-none"
              name="Description"
              id="Description"
              cols="30"
              rows="5"
              placeholder="Enter Description"
            ></textarea>
          </div>
          <div className="my-2 flex flex-col gap-1">
            <label className="text-lbase font-semibold">Upload Photos</label>
            <div>
              <label className="relative bg-fileBg border border-orange border-dashed w-full py-6 flex flex-col justify-center items-center gap-2 rounded-lg">
                <input
                  type="file"
                  className="hidden"
                  onClick={onBrowseClick}
                  ref={inputRef}
                  onChange={handleChange}
                />
                <p className="font-bold text-[16px]">
                  Drag your images here, or{" "}
                  <span className="text-orange cursor-pointer">browse</span>
                </p>
                <p className="text-[12px] font-medium text-[rgba(0,0,0,50%)]">
                  Supported: JPG, JPEG, PNG
                </p>
                {dragActive && (
                  <div
                    className="absolute w-full h-full top-0 left-0 rounded-2xl"
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  ></div>
                )}
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center text-center mt-8 lg:mx-[22%] ">
            <Button className="leading-[25.4px] py-4 w-full tracking-[0.18px] rounded-lg">
              Add New Property
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProperty;
