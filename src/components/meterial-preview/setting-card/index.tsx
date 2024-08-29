import { I_FeaturesElements } from "@/utils/Interfaces/Products";

import Selections from "./selections";
import Activites from "./activites";
import { useEffect, useState } from "react";
import { Options } from "..";

interface I_Props {
  FeaturesElements: I_FeaturesElements[];
  selectedVarientElements: any;
  selectedVariant: Options;
}

const SettingCard = (props: I_Props) => {
  const { FeaturesElements, selectedVarientElements, selectedVariant } = props;

  const [selectedElements, selectedSelectedElements] = useState<any>([]);

  const [availableElements, setAvailableElements] = useState<any>([]);
  // console.log("selectedVarientElements: ", selectedVarientElements )

  // const isChecked = (uuid: string, checkStr: string) => {
  //   console.log("aa, ", uuid)
  //   return uuid in selectedVariant?.availableOptions && checkStr in selectedVariant?.availableOptions[uuid];
  // };

  const selectedSelectedElementsHandler = (product: any) => {

    const filteredArray = selectedElements.filter((i: any) => i["id"] !== product["id"])

    const currentSelectedElements = [...filteredArray];
    currentSelectedElements.push(product);
    selectedSelectedElements(currentSelectedElements);
  }

  console.log('selectedElements: ', selectedElements)

  const setAvailableElementsHandler = () => {};

  const isChecked = (uuid: string, checkStr: string) => {
    console.log("aa, ", uuid);
    return (
      uuid in selectedVariant?.availableOptions &&
      checkStr in selectedVariant?.availableOptions[uuid]
    );
  };

  useEffect(() => {
    const availableElementsToShow = selectedVarientElements.filter(
      (variant: any) => {
        const isSelected = isChecked(variant["id"], "isSelected");
        const isDefault = isChecked(variant["id"], "isDefault");
        return isSelected || isDefault;
      }
    );

    console.log("availableElementsToShow: ", availableElementsToShow);

    setAvailableElements(availableElementsToShow);
  }, [selectedVarientElements]);

  return (
    <div style={{ width: "500px" }}>
      <div className={`flex justify-end pr-[33px] transition`}>
        <div className="bg-customWhite-600 mr-4 2xl:w-[414px] h-[493px] overflow-auto py-[35px] px-[38px] rounded-[28px] scrollBar-hidden">
          <p className="text-primary-100 font-semibold text-lg leading-[27px] font-roboto mb-[7px]">
            {!!availableElements.length &&
              availableElements[0][" Opt Sel Name"]}
          </p>
          <div className="">
            <p className="text-primary-100 font-semibold text-sm leading-[21px] font-roboto mb-0">
              Active Selection
            </p>
            
            <div className="flex flex-wrap gap-[22px] mt-[15px]">
              {selectedElements.map((variant: any) => {
                return (
                    <Selections
                      key={variant[" Opt Val Name"]}
                      elementsToDisplay={variant}
                      className={'selected-img'}
                    />
                );
              })}
            </div>


            <p className="text-primary-100 font-semibold text-sm leading-[21px] font-roboto mb-0">
              Default Selection
            </p>

            <div className="flex flex-wrap gap-[22px] mt-[15px]">
              {availableElements.map((variant: any) => {
                return (
                  <Selections
                    key={variant[" Opt Val Name"]}
                    elementsToDisplay={variant}
                    selectedSelectedElements={selectedSelectedElementsHandler}
                    className={''}

                  />
                );
              })}
            </div>

          </div>
        </div>
        <Activites FeaturesElements={FeaturesElements} />
      </div>
    </div>
  );
};

export default SettingCard;
