import { FeaturesElements } from '@/utils/products-array'
const Activites = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-[26px] mr-[110px]'>
            {FeaturesElements.map((info) => {
                const {featuresImage , id} = info;
                return (
                    <button key={id} className="h-[52px] w-[52px] bg-white rounded-full flex justify-center items-center">
                        {featuresImage}
                    </button>
                )
            }
            )}
        </div>

    )
}

export default Activites