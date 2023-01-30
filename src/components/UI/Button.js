import React from "react";

const Button = (props) => {
  return (
    <button
      className={`bg-orange text-white rounded-md text-[17px] cursor-pointer ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
