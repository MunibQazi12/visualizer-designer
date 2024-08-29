import Image from "next/image";
import { FC, useEffect, useState } from "react";
import img from "@/img/option-product.png";
import { Options } from "..";
interface Props {
  elementsToDisplay: any;
  selectedSelectedElements?: any;
  className?: string;
}

const Selections: FC<Props> = (props) => {
  const { elementsToDisplay, selectedSelectedElements, className } = props;
  const title = elementsToDisplay[" Opt Val Name"];

  return (
    <>
      <div
        key={elementsToDisplay[" Opt Val Name"]}
        className={`w-[98px] text-center ${className} `}
        onClick={() =>
          !!selectedSelectedElements &&
          selectedSelectedElements(elementsToDisplay)
        }
      >
        <div className="w-full h-[97px] border-4 border-gray-500 rounded-2xl">
          <Image
            className="w-full h-full object-cover "
            src={img}
            alt="cabinet"
            width={100}
            height={100}
          />
        </div>
        <p className="text-primary-100 font-medium text-xs  leading-5 font-roboto mb-0">
          {title}
        </p>
        <p className="text-primary-100 font-normal text-xs  leading-4 font-roboto mb-0 mt-1">
          {/* {description}   */}
        </p>
      </div>
    </>
  );
};

export default Selections;
