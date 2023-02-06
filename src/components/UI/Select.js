import React from "react";

const Select = (props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-lbase font-semibold">
        {props.label} <span className="text-orange">*</span>
      </label>
      <select className="border border-grey text-base font-regular bg-inputBg text-inputText rounded-md py-4 px-6 tracking-[0.2px]">
        <option value={props.value}>{props.value}</option>
      </select>
    </div>
  );
};

export default Select;
