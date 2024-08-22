
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
            <p className='mt-3 text-primary-100 font-semibold text-sm'>{title}</p>
            <div className='mt-2 flex items-center w-full justify-between'>
                {products.map((info) => {
                    const { productImage, title, description , id} = info;
                    return (
                        <div key={id}>
                            <Image src={productImage} alt='cabnit' width={98} height={97} />
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