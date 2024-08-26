import React from "react";
import MapSvg from "@/../public/svgs/map";
import EyeSvg from "@/../public/svgs/eyes";
import AccordionCloseSvg from "@/../public/svgs/accordion-close";
import DetailHeaderButtons from "../details-header-buttons";
import { ExteriorGreatRoom } from "@/utils/Interfaces/Products";


interface I_Props {
  greatRoom: ExteriorGreatRoom
}

const GreatRoom = (props: I_Props) => {
  const {greatRoom} = props;
  return (
    <div className="flex items-center">
      <div className="w-5 h-5 rounded-full bg-green-500 p-[5px]">
        <span className="block w-full h-full rounded-full bg-white"></span>
      </div>
      <p className="w-[calc(100%-113px)] pl-4 pr-2 text-lg font-medium leading-[30px] text-primary-100 mb-0">
        Great Room
      </p>
      <DetailHeaderButtons />
      <button type="button" className="ml-6">
        <AccordionCloseSvg />
      </button>
    </div>
  );
};

export default GreatRoom;
