import { I_FeaturesElements, I_Products } from "@/utils/Interfaces/Products";

import Selections from "./selections";
import Activites from "./activites";

interface I_Props {
  ActiveProducts: I_Products[];
  DefaultProducts: I_Products[];
  FeaturesElements: I_FeaturesElements[];
  selectedVarientElements: any;
}

const SettingCard = (props: I_Props) => {
  const {
    ActiveProducts,
    DefaultProducts,
    FeaturesElements,
    selectedVarientElements,
  } = props;

  console.log("selectedVarientElements: ", selectedVarientElements);

  // option[" Opt Sel Name"]
  // option[" Opt Val Name"]
  // return;
  {
    /* <div className={`flex justify-end pr-[33px] transition ${selectedKitchenType.cabinet_selection ? 'cabinet-fadeIn' : 'cabinet-fadeOut'}`}> */
  }
    return (
      <div style={{width: "500px"}}>
        <div className={`flex justify-end pr-[33px] transition`}>
          <div className="bg-customWhite-600 mr-4 2xl:w-[414px] h-[493px] overflow-auto py-[35px] px-[38px] rounded-[28px] scrollBar-hidden">
            <p className="text-primary-100 font-semibold text-lg leading-[27px] font-roboto mb-[7px]">
              {!!selectedVarientElements.length && selectedVarientElements[0][" Opt Sel Name"]}
            </p>
            <div className=""> 
              <p className="text-primary-100 font-semibold text-sm leading-[21px] font-roboto mb-0">
                Active Selection
              </p>
              <div className="flex flex-wrap gap-[22px] mt-[15px]">
                {selectedVarientElements.map((variant: any) => {
                  return <>
                    <Selections
                      products={variant}
                    />
                    {/* <div className="py-4">
                      <Selections
                        title="Default Selections"
                        products={DefaultProducts}
                      />
                    </div> */}
                  </>;
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
