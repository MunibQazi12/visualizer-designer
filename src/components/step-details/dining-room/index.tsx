import React from "react";
import MapSvg from "@/../public/svgs/map";
import EyeSvg from "@/../public/svgs/eyes";
import AccordionCloseSvg from "@/../public/svgs/accordion-close";

const DiningRoom = () => {
  return (
    <div className="flex items-center">
      <div className="w-5 h-5 rounded-full bg-green-500 p-[5px]"></div>
      <p className="w-[calc(100%-113px)] pl-4 pr-2 text-lg font-medium leading-[30px] text-primary-100 mb-0">
        Dining Room
      </p>
      <div className="flex items-center gap-[11px]">
        <button type="button">
          <MapSvg />
        </button>
        <button type="button">
        <EyeSvg />
        </button>
      </div>
      <button type="button" className="ml-6 group">
        <AccordionCloseSvg />
      </button>
    </div>
  );
};

export default DiningRoom;
