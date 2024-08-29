import Image from "next/image";
import { FC, useEffect, useState } from "react";
import img from "@/img/option-product.png"
import { Options } from "..";
interface Props {
  elementsToDisplay: any;
  selectedVariant?: Options,
  selectedSelectedElements?: any;
  className?: string;
}


const Selections: FC<Props> = (props) => {
  const { elementsToDisplay, selectedVariant, selectedSelectedElements, className } = props;

  console.log('elementsToDisplay: ', elementsToDisplay)

  const title = elementsToDisplay[" Opt Val Name"];
  console.log('title: ', title)

  return (

      <>
        <div key={elementsToDisplay[" Opt Val Name"]} className={`w-[98px] text-center ${className} `} onClick={() => selectedSelectedElements(elementsToDisplay)}>
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
            {/* {elementsToDisplay[" Opt Val Name"]}  */}
            {/* {elementsToDisplay[" Opt Val Name"]}  */}
          </p>
          <p className="text-primary-100 font-normal text-xs  leading-4 font-roboto mb-0 mt-1">
            {/* {description}   */}
          </p>
        </div>

        {/* {elementsToDisplay.map((info) => {
          const { productImage, title, description, id } = info;
          return (
            <div key={id} className="flex flex-col justify-center items-center">
              <Image
                className="2xl:w-[72px] h-[52px] w-[52px] 2xl:h-[72px] object-cover "
                src={productImage}
                alt="cabnit"
                width={100}
                height={100}
              />
              <p className="text-center text-primary-100 font-medium text-[10px]">
                {title}
              </p>
              <p className="text-center text-[10px] text-primary-100">
                {description}
              </p>
            </div>
          );
        })} */}
      </>
  );
};

export default Selections;
