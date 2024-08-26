import React, { Children } from "react";

interface I_Props {
  children: JSX.Element;
  className?: string;
}

const Card = (props: I_Props) => {
  return (
    <div
      className={`w-full rounded-[20px] pt-2 pb-2.5 pl-4 pr-[15px] mb-[23px] bg-white ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
