import React from "react";
import AccordionCloseSvg from "@/../public/svgs/accordion-close";
import DetailHeaderButtons from "../details-header-buttons";
import { ExteriorOwnersBath } from "@/utils/Interfaces/Products";
import CardDetails from "../card/details";
import CardSingleItem from "../card/single-item";

interface I_Props {
  ownersBath: ExteriorOwnersBath;
}

const OwnerBath = (props: I_Props) => {
  const { ownersBath } = props;
  console.log("123: ", ownersBath);
  return (
    <>
      <div className="flex items-center">
        <div className="w-5 h-5 rounded-full bg-gray-400 p-[5px]">
          <span className="block w-full h-full rounded-full bg-white"></span>
        </div>
        <p className="w-[calc(100%-113px)] pl-4 pr-2 text-lg font-medium leading-[30px] text-primary-100 mb-0">
          Owners Bath
        </p>
        <DetailHeaderButtons />
        <button type="button" className="ml-6">
          <AccordionCloseSvg />
        </button>
      </div>

      <div className="mt-4 pl-5">
        <CardDetails className="">
          <>
            {ownersBath.owner_bath_layout ? (
              <CardSingleItem name="Owner Bath Layout" />
            ) : null}
            {ownersBath.jacuzzi ? <CardSingleItem name="Jacuzzi" /> : null}
            {ownersBath.cabinet_selection ? (
              <CardSingleItem name="Cabinet Selection" />
            ) : null}

            {ownersBath.shelvings ? <CardSingleItem name="Shelving" /> : null}
          </>
        </CardDetails>
      </div>
    </>
  );
};

export default OwnerBath;
