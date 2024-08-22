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
    <div className="bg-white w-[232px] h-[196px] rounded-lg">
      <Image
        className=" rounded-t-lg "
        src={productImage}
        alt="Product Image"
        width={232}
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
