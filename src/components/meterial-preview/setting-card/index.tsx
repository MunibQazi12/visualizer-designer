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

  const selectedSelectedElementsHandler = (product: any) => {
    const filteredArray = selectedElements.filter(
      (i: any) => i["id"] !== product["id"]
    );
    const currentSelectedElements = [...filteredArray];
    currentSelectedElements.push(product);
    selectedSelectedElements(currentSelectedElements);
    setAvailableElementsHandler(product);
  };

  const setAvailableElementsHandler = (product: any) => {
    const filteredArray = availableElements.filter(
      (i: any) => i["id"] !== product["id"]
    );
    const currentSelectedElements = [...filteredArray];
    setAvailableElements(currentSelectedElements);
  };

  const isChecked = (uuid: string, checkStr: string) => {
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
    selectedSelectedElements([]);
    setAvailableElements(availableElementsToShow);
  }, [selectedVarientElements]);

  return (
    <div style={{ width: "500px" }}>
      <div className={`flex justify-end pr-[33px] transition`}>
        <div className="bg-customWhite-600 mr-4 w-[414px] h-[493px] overflow-auto py-[35px] px-[38px] rounded-[28px] scrollBar-hidden">
          <p className="text-primary-100 font-semibold text-lg leading-[27px] font-roboto mb-[7px]">
            {!!selectedVarientElements.length &&
              selectedVarientElements[0][" Opt Sel Name"]}
          </p>
          <div>
            <div>
              {!!selectedElements.length ? (
                <>
                  <p className="text-primary-100 font-semibold text-sm leading-[21px] font-roboto mb-0">
                    Active Selection
                  </p>

                  <div className="overflow-auto scrollBar-hidden">
                    <div className="inline-flex gap-[22px] mt-[15px]">
                      {selectedElements.map((variant: any) => {
                        return (
                          <Selections
                            key={variant[" Opt Val Name"]}
                            elementsToDisplay={variant}
                            className={"selected-img"}
                          />
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : null}
            </div>

            <div>
              {!!availableElements.length ? (
                <>
                  <p className="text-primary-100 font-semibold text-sm leading-[21px] font-roboto mb-0">
                    Default Selection
                  </p>

                  <div className="overflow-auto scrollBar-hidden">
                    <div className="inline-flex gap-[22px] mt-[15px]">
                      {availableElements.map((variant: any) => {
                        return (
                          <Selections
                            key={variant[" Opt Val Name"]}
                            elementsToDisplay={variant}
                            selectedSelectedElements={
                              selectedSelectedElementsHandler
                            }
                            className={""}
                          />
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
        <Activites FeaturesElements={FeaturesElements} />
      </div>
    </div>
  );
};

export default SettingCard;
