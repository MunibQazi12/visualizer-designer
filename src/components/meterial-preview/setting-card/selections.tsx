import Image from "next/image";
import { FC } from "react";
import img from "@/img/option-product.png"
interface Props {
  products: any;
}

const Selections: FC<Props> = (props) => {
  const { products } = props;

  return (

      <>
        <div key={products[" Opt Val Name"]} className="w-[98px] text-center selected-img">
          <div className="w-full h-[97px] border-4 border-gray-500 rounded-2xl">
            <Image
              className="w-full h-full object-cover "
              src={img}
              alt="cabinet"
              width={100}
              height={100}
            />
          </div>
          <p className="text-primary-100 font-medium text-xs  leading-5 font-roboto mb-0">
            {/* {title} */}
            {/* {products[" Opt Val Name"]}  */}
            {products[" Opt Val Name"]} 
          </p>
          <p className="text-primary-100 font-normal text-xs  leading-4 font-roboto mb-0 mt-1">
            {/* {description}   */}
          </p>
        </div>

        {/* {products.map((info) => {
          const { productImage, title, description, id } = info;
          return (
            <div key={id} className="flex flex-col justify-center items-center">
              <Image
                className="2xl:w-[72px] h-[52px] w-[52px] 2xl:h-[72px] object-cover "
                src={productImage}
                alt="cabnit"
                width={100}
                height={100}
              />
              <p className="text-center text-primary-100 font-medium text-[10px]">
                {title}
              </p>
              <p className="text-center text-[10px] text-primary-100">
                {description}
              </p>
            </div>
          );
        })} */}
      </>
  );
};

export default Selections;
