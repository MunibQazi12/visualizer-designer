import { FC } from "react";
import Image from "next/image";

interface Props {
  productImage: string;
  title: string;
  description: string;
}

const Card: FC<Props> = (props) => {
  const { productImage, title, description } = props;
  return (
    <div className="bg-white w-[232px] 2xl:h-[196px] rounded-lg">
      <Image
        className=" rounded-t-lg 2xl:w-[232px] w-full h-20 2xl:h-[100px] object-cover"
        src={productImage}
        alt="Product Image"
        width={100}
        height={100}
      />
      <div className="px-4 pt-[5px]">
        <h3>{title}</h3>
        <p className="text-sm text-primary-200">{description}</p>
      </div>
    </div>
  );
};

export default Card;
