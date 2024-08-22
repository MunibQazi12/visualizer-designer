import Selections from "./selections"
import Activites from "./activites"

import { ActiveProducts, DefaultProducts } from "@/utils/products-array"

const SettingCard = () => {
    return (
        <div className='w-full flex justify-end mt-[131px] '>
            <div className='bg-customWhite-600 mr-4 w-[414px] px-[30px] rounded-md py-[26px]'>
                <p className='text-primary-100 font-semibold text-xl'>Cabinet Options</p>
                <Selections title="Active Selections" products={ActiveProducts} />
                <div className="my-6">
                    <Selections title="Default Selections" products={DefaultProducts} />
                </div>
            </div>
            <Activites/>
        </div>
    )
}

export default SettingCard