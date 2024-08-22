
import Image from 'next/image'
import  { FC } from 'react'

interface Props {
    title: string,
    products: Array<any>,
}

const Selections: FC<Props> = (props) => {
    const { title, products } = props;
    return (
        <div>
            <p className='2xl:mt-2 mt-1 text-primary-100 font-semibold text-sm'>{title}</p>
            <div className='2xl:mt-2 mt-1 grid grid-cols-3 2xl:gap-4 gap-3 items-center w-full justify-between'>
                {products.map((info) => {
                    const { productImage, title, description , id} = info;
                    return (
                        <div key={id} className='flex flex-col justify-center items-center'>
                            <Image className='2xl:w-[72px] h-[52px] w-[52px] 2xl:h-[72px] object-cover ' src={productImage} alt='cabnit' width={100} height={100} />
                            <p className='text-center text-primary-100 font-medium text-[10px]'>{title}</p>
                            <p className='text-center text-[10px] text-primary-100'>{description}</p>
                        </div>


                    )
                })}
            </div>
        </div>
    )
}

export default Selections