import React from "react";
import DetailHeaderButtons from "../details-header-buttons";
import AccordionCloseSvg from "@/../public/svgs/accordion-close";
import { I_AccordionData } from "@/utils/Interfaces/Products";
import AccordionOpenSvg from "../../../../public/svgs/accordion-open";
import EyeSvg from "../../../../public/svgs/eyes";

interface I_Props {
  name: any;
  className?: string;
  setToggle: (accordion_name: string) => void;
  toggleValue: string;
}
const CardHeader = (props: I_Props) => {
  const { name, className, setToggle, toggleValue } = props;
  return (
    <div className={`flex items-center`}>
      <div className="w-5 h-5 rounded-full bg-green-500 p-[5px]"></div>
      <p className="w-[calc(100%-113px)] pl-4 pr-2 text-lg font-medium leading-[30px] text-primary-100 mb-0">
        {name}
      </p>
      <DetailHeaderButtons />
      <button type="button" className={`ease-in duration-200 group ${className}`} onClick={() => setToggle(toggleValue)}>
           <AccordionCloseSvg />
      </button>
    </div>
  );
};

export default CardHeader;
