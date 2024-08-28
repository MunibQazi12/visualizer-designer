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
        <div className={`flex justify-end pr-[33px] transition `}>
          <div className="bg-customWhite-600 mr-4 2xl:w-[414px] p-4 rounded-[28px]">
            <p className="text-primary-100 font-semibold 2xl:text-[3.058103975535168vh] text-[2.7522935779816513vh]">
              {!!selectedVarientElements.length && selectedVarientElements[0][" Opt Sel Name"]}
            </p>
            <div>
              {selectedVarientElements.map((variant: any) => {
                return <>
                  <Selections
                    title=""
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
          <Activites FeaturesElements={FeaturesElements} />
        </div>
      </div>
    );
};

export default SettingCard;
