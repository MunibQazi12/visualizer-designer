"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./card";
import { sliderSettings } from "@/constants/slider-config";
import { I_Products } from "@/utils/Interfaces/Products";

import ApplicationIcon from "../../../public/svgs/application-icon";
import Button from "@/constants/button";
import FunctionalItems from "./functional-items";

interface I_Props {
  products: I_Products[];
}

const ImageSlider = (props: I_Props) => {
  const { products } = props;

  return (
    <div className="slider-container 2xl:max-w-[1340px] 2xl:w-full w-[70%] mx-auto mt-10 absolute left-0 right-0 lg:bottom-12 bottom-8">
      <Button
        className="mx-auto w-[136px] 2xl:h-9 h-7 bg-white rounded-full"
        iconStart={<ApplicationIcon />}
      >
        <span className="2xl:text-lg font-medium text-primary-100 ml-2">
          View All
        </span>
      </Button>
      <Slider {...sliderSettings} className="gap-5 2xl:mt-7 mt-4">
        {products.map((product: I_Products) => {
          const { productImage, title, description, id } = product;
          return (
            <Card
              key={id}
              productImage={productImage}
              title={title}
              description={description}
            />
          );
        })}
      </Slider>
      <FunctionalItems />
    </div>
  );
};

export default ImageSlider;
