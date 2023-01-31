import React from "react";

const Button = (props) => {
  return (
    <button
      className={`bg-orange text-white text-[17px] cursor-pointer
      hover:opacity-90
      ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
