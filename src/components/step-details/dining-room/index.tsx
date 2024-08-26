import React from "react";

import AccordionCloseSvg from "@/../public/svgs/accordion-close";
import DetailHeaderButtons from "../details-header-buttons";
import { ExteriorDiningRoom, I_VisualizerDesign } from "@/utils/Interfaces/Products";
import CardDetails from "../card/details";

interface  I_Props {
  dinningRoom: ExteriorDiningRoom
}

const DiningRoom = (props: I_Props) => {
  const {dinningRoom} = props;
  return (
    <>
    <div className="flex items-center">
      <div className="w-5 h-5 rounded-full bg-green-500 p-[5px]"></div>
      <p className="w-[calc(100%-113px)] pl-4 pr-2 text-lg font-medium leading-[30px] text-primary-100 mb-0">
        Dining Room
      </p>
      <DetailHeaderButtons />
      <button type="button" className="ml-6 group">
        <AccordionCloseSvg />
      </button>
    </div>

    <CardDetails className="">
      <div></div>
    </CardDetails>
    </>
  );
};

export default DiningRoom;
