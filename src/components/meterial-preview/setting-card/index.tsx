import { I_Products } from "@/utils/Interfaces/Products";
import Image from "next/image";

import Selections from "./selections"
import Activites from "./activites"

import { ActiveProducts, DefaultProducts } from "@/utils/products-array"

const SettingCard = () => {
    return (
        <div className='w-full flex justify-end 2xl:mt-[131px] mt-16 '>
            <div className='bg-customWhite-600 mr-4 2xl:w-[414px] 2xl:px-[30px] px-4 rounded-md 2xl:py-[26px] py-4'>
                <p className='text-primary-100 font-semibold 2xl:text-xl text-lg'>Cabinet Options</p>
                <Selections title="Active Selections" products={ActiveProducts} />
                <div className="2xl:my-6 my-3">
                    <Selections title="Default Selections" products={DefaultProducts} />
                </div>
            </div>
            <Activites/>
        </div>
    )
}

export default SettingCard;
