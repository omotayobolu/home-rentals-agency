import React from "react";

const Input = (props) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={props.id} className="text-lbase font-semibold">
        {props.label}
        <span className="text-orange pl-2">*</span>
      </label>
      <input
        className="border border-grey text-base font-regular bg-inputBg text-inputText rounded-md py-4 px-6 tracking-[0.2px]"
        id={props.value}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
