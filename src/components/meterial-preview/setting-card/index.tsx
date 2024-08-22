import { I_FeaturesElements, I_Products } from "@/utils/Interfaces/Products";

import Selections from "./selections"
import Activites from "./activites"

import { ActiveProducts, DefaultProducts } from "@/utils/products-array"


// createDefaultProductsCollection();
// createActiveProductsCollection();
// createFeaturesElementsCollection();

// import { createActiveProductsCollection, createDefaultProductsCollection, createFeaturesElementsCollection } from "@/services/firebase/CreateCollection";

interface I_Props {
    ActiveProducts: I_Products[];
    DefaultProducts: I_Products[];
    FeaturesElements: I_FeaturesElements[];
}

const SettingCard = (props: I_Props) => {

    const {ActiveProducts, DefaultProducts, FeaturesElements } = props;
    
    return (
        <div className='w-full flex justify-end mt-[131px] '>
            <div className='bg-customWhite-600 mr-4 w-[414px] px-[30px] rounded-md py-[26px]'>
                <p className='text-primary-100 font-semibold text-xl'>Cabinet Options</p>
                <Selections title="Active Selections" products={ActiveProducts} />
                <div className="my-6">
                    <Selections title="Default Selections" products={DefaultProducts} />
                </div>
            </div>
            <Activites FeaturesElements={FeaturesElements}/>
        </div>
    )
}

export default SettingCard;
