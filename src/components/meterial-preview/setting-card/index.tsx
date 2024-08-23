import { I_FeaturesElements, I_Products } from "@/utils/Interfaces/Products";

import Selections from "./selections"
import Activites from "./activites"

interface I_Props {
    ActiveProducts: I_Products[];
    DefaultProducts: I_Products[];
    FeaturesElements: I_FeaturesElements[];
    selectedKitchenType: any
}

const SettingCard = (props: I_Props) => {

    const {ActiveProducts, DefaultProducts, FeaturesElements, selectedKitchenType } = props;
    
    return (
        <div className={`flex justify-end pr-[33px] transition ease-in-out duration-300 ${selectedKitchenType.cabinet_selection ? 'cabinet-fadeIn' : 'cabinet-fadeOut'}`}>
            <div className='bg-customWhite-600 mr-4 2xl:w-[414px] p-4 rounded-md'>
                <p className='text-primary-100 font-semibold 2xl:text-[3.058103975535168vh] text-[2.7522935779816513vh]'>Cabinet Options</p>
                <Selections title="Active Selections" products={ActiveProducts} />
                <div className="py-4">
                    <Selections title="Default Selections" products={DefaultProducts} />
                </div>
            </div>
            <Activites FeaturesElements={FeaturesElements}/>
        </div>
    )
}

export default SettingCard;
