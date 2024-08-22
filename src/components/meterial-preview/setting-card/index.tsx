import Image from 'next/image'

const SettingCard = () => {
    return (
        <div className='w-full flex justify-end mt-[131px] '>
            <div className='bg-[#FFFFFFA6] mr-[110px] w-[414px] px-[30px] rounded-md'>
                <p className='text-[#495057] font-semibold text-xl'>Cabinet Options</p>
                <p className='mt-3 text-[#495057] font-semibold text-sm'>Active Selections</p>
                <div className='mt-2 flex items-center w-full justify-between'>
                    <div>
                        <Image src="/images/cabnitMaterial.png" alt='cabnit' width={98} height={97} />
                        <p className='text-center text-[#495057] font-medium text-[10px]'>Cabinet Material</p>
                        <p className='text-center text-[10px] text-[#495057]'>Pine</p>
                    </div>
                    <div>
                        <Image src="/images/CabinetHardware.png" alt='cabnit' width={98} height={97} />
                        <p className='text-center text-[#495057] font-medium text-[10px]'>Cabinet Hardware</p>
                        <p className='text-center text-[10px] text-[#495057]'>Lyon 8233 PC</p>
                    </div>
                    <div>
                        <Image src="/images/CabinetFinish.png" alt='cabnit' width={98} height={97} />
                        <p className='text-center text-[#495057] font-medium text-[10px]'>Cabinet Finish</p>
                        <p className='text-center text-[10px] text-[#495057]'>Dove Level</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingCard