import React, { Children } from "react";

interface I_Props {
  name: string;
  className?: string;
}

const CardSingleItem = (props: I_Props) => {
  const { className, name } = props;
  return (
    <div className={`flex items-center ${className}`}>
      <div className={`w-4 h-4 rounded-full p-1 bg-gray-400`}>
        <span className="block w-full h-full rounded-full bg-white"></span>
      </div>
      <p className="text-base font-normal leading-6 text-primary-100 mb-0 pl-[13px] cursor-pointer">
        {name}
      </p>
    </div>
  );
};

export default CardSingleItem;
