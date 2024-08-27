import React, { Children } from "react";

interface I_Props {
  children: JSX.Element;
  className?: string;
}

const Card = (props: I_Props) => {
  return (
    <div
      className={`w-full rounded-[20px] pt-[9px] pb-[9px] pl-4 pr-[15px] bg-white overflow-hidden stepper-detail-dropdown ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
