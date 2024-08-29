import { I_FeaturesElements } from "@/utils/Interfaces/Products";

import Selections from "./selections";
import Activites from "./activites";

interface I_Props {
  FeaturesElements: I_FeaturesElements[];
  selectedVarientElements: any;
}

const SettingCard = (props: I_Props) => {
  const {
    FeaturesElements,
    selectedVarientElements,
  } = props;
  
    return (
      <div style={{width: "500px"}}>
        <div className={`flex justify-end pr-[33px] transition`}>
          <div className="bg-customWhite-600 mr-4 w-[414px] h-[493px] overflow-auto py-[35px] px-[38px] rounded-[28px] scrollBar-hidden">
            <p className="text-primary-100 font-semibold text-lg leading-[27px] font-roboto mb-[7px]">
              {!!selectedVarientElements.length && selectedVarientElements[0][" Opt Sel Name"]}
            </p>
            <div> 
              <p className="text-primary-100 font-semibold text-sm leading-[21px] font-roboto mb-0">
                Active Selection
              </p>
              <div className="overflow-auto scrollBar-hidden">
                <div className="inline-flex gap-[22px] mt-[15px]">
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
          </div>
          <Activites FeaturesElements={FeaturesElements} />
        </div>
      </div>
    );
};

export default SettingCard;
