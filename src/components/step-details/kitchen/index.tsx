import React from "react";
import MapSvg from "@/../public/svgs/map";
import EyeSvg from "@/../public/svgs/eyes";
import AccordionOpenSvg from "@/../public/svgs/accordion-open";
import CardDetails from "../card/details";
import { ExteriorKitchen } from "@/utils/Interfaces/Products";
// import CardSingleItem from "../card/single-item";
import DetailHeaderButtons from "../details-header-buttons";

interface I_Props {
  setSelectedKitchenType: any;
  selectedKitchenType: any;
  kitchen: ExteriorKitchen;
}

const Kitchen = (props: I_Props) => {
  const { setSelectedKitchenType, selectedKitchenType, kitchen } = props;

  return (
    <>
      <div className="flex items-center">
        <div className="w-5 h-5 rounded-full bg-green-500 p-[5px]">
          <span className="block w-full h-full rounded-full bg-white"></span>
        </div>
        <p className="w-[calc(100%-113px)] pl-4 pr-2 text-lg font-medium leading-[30px] text-primary-100 mb-0">
          Kitchen
        </p>
        <DetailHeaderButtons />
        <button type="button" className="ml-6">
          <AccordionOpenSvg />
        </button>
      </div>

      <div className="mt-4 pl-5">
        <CardDetails className="">
          <>
            {kitchen.kitchen_layout ? (
              <div className="inline-flex items-center">
                <div
                  className={`w-4 h-4 rounded-full p-1 ${
                    selectedKitchenType.kitchen_layout
                      ? "bg-green-500"
                      : "bg-gray-400"
                  }`}
                >
                  <span className="block w-full h-full rounded-full bg-white"></span>
                </div>
                <p
                  className="text-base font-normal leading-6 text-primary-100 mb-0 pl-[13px] cursor-pointer"
                  onClick={() => setSelectedKitchenType("kitchen_layout")}
                >
                  Kitchen Layout
                </p>
              </div>

              // <CardSingleItem name={"Kitchen Layout"} label={"kitchen_layout"} onClick={onClickHandler}/>
            ) : null}

            {kitchen.cabinet_selection ? (
              <div className="flex items-center">
                <div
                  className={`w-4 h-4 rounded-full p-1 ${
                    selectedKitchenType.cabinet_selection
                      ? "bg-green-500"
                      : "bg-gray-400"
                  }`}
                >
                  <span className="block w-full h-full rounded-full bg-white"></span>
                </div>
                <p
                  className="text-base font-normal leading-6 text-primary-100 mb-0 pl-[13px] cursor-pointer"
                  onClick={() => setSelectedKitchenType("cabinet_selection")}
                >
                  Cabinet Selection
                </p>
              </div>
            ) : null}

            {kitchen.counterTop_selection ? (
              <div className="flex items-center">
                <div
                  className={`w-4 h-4 rounded-full p-1 ${
                    selectedKitchenType.counterTop_selection
                      ? "bg-green-500"
                      : "bg-gray-400"
                  }`}
                >
                  <span className="block w-full h-full rounded-full bg-white"></span>
                </div>
                <p
                  className="text-base font-normal leading-6 text-primary-100 mb-0 pl-[13px] cursor-pointer"
                  onClick={() => setSelectedKitchenType("counterTop_selection")}
                >
                  Countertop Selection
                </p>
              </div>
            ) : null}

            {kitchen.plumbing_fixture ? (
              <div className="flex items-center">
                <div
                  className={`w-4 h-4 rounded-full  p-1 ${
                    selectedKitchenType.plumbing_fixture
                      ? "bg-green-500"
                      : "bg-gray-400"
                  }`}
                >
                  <span className="block w-full h-full rounded-full bg-white"></span>
                </div>
                <p
                  className="text-base font-normal leading-6 text-primary-100 mb-0 pl-[13px] cursor-pointer"
                  onClick={() => setSelectedKitchenType("plumbing_fixture")}
                >
                  Plumbing Fixtures
                </p>
              </div>
            ) : null}
          </>
        </CardDetails>
      </div>
    </>
  );
};

export default Kitchen;
