import React from "react";
import MapSvg from "@/../public/svgs/map";
import EyeSvg from "@/../public/svgs/eyes";
import AccordionCloseSvg from "@/../public/svgs/accordion-close";
import DetailHeaderButtons from "../details-header-buttons";
import { ExteriorOwnersSuit } from "@/utils/Interfaces/Products";

interface I_Props {
  ownerSuit: ExteriorOwnersSuit
}
const OwnerSuit = (props: I_Props) => {
  const {ownerSuit} = props;
  return (
    <div className="flex items-center">
      <div className="w-5 h-5 rounded-full bg-gray-400 p-[5px]">
        <span className="block w-full h-full rounded-full bg-white"></span>
      </div>
      <p className="w-[calc(100%-113px)] pl-4 pr-2 text-lg font-medium leading-[30px] text-primary-100 mb-0">
        Owners Suite
      </p>
      <DetailHeaderButtons />
      <button type="button" className="ml-6">
        <AccordionCloseSvg /> 
      </button>
    </div>
  );
};

export default OwnerSuit;
