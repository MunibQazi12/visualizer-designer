import React, { Children } from "react";

interface I_Props {
  name: string;
  className?: string;
}

const CardSingleItem = (props: I_Props) => {
  const { className, name } = props;
  return (
    <div className={`flex ${className}`}>
      <div className={`w-4 h-4 rounded-full p-1 mt-[5px] bg-gray-400`}>
        <span className="block w-full h-full rounded-full bg-white"></span>
      </div>
      <p className="text-base font-normal leading-6 text-primary-100 mb-0 pl-[13px] cursor-pointer w-[calc(100%-36px)]">
        {name}
      </p>
    </div>
  );
};

export default CardSingleItem;
