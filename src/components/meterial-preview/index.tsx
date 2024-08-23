"use client";

import SettingCard from "./setting-card";
import ImageSlider from "./slider";
import { I_FeaturesElements, I_Products } from "@/utils/Interfaces/Products";
import { useEffect, useState } from "react";
import Products from "@/services/firebase/products";
import LocationPick from "../../../public/svgs/location-pick";
import dynamic from "next/dynamic";
import StepDetails from "@/components/step-details";

const MaterialPreview = () => {
  const [products, setProducts] = useState<I_Products[]>([]);
  const [activeProducts, setActiveProducts] = useState<I_Products[]>([]);
  const [defaultProducts, setDefaultProducts] = useState<I_Products[]>([]);
  const [featuresElements, setFeaturesElements] = useState<
    I_FeaturesElements[]
  >([]);

  const MainSteppers = dynamic(() => import("@/components/steppers"), {
    ssr: false,
  });

  useEffect(() => {
    Products.fetchProducts("products")
      .then((data) => {
        const products: I_Products[] = data;
        setProducts(products);
      })
      .catch((err) => {
        console.log(err);
      });

    Products.fetchProducts("ActiveProducts")
      .then((data) => {
        const products: I_Products[] = data;
        setActiveProducts(products);
      })
      .catch((err) => {
        console.log(err);
      });

    Products.fetchProducts("DefaultProducts")
      .then((data) => {
        const products: I_Products[] = data;
        setDefaultProducts(products);
      })
      .catch((err) => {
        console.log(err);
      });

    Products.fetchProducts("FeaturesElements")
      .then((data) => {
        const products: I_FeaturesElements[] = data;
        setFeaturesElements(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const stepLabels = [{ label: "Exterior" }, { label: "1st Floor" }, { label: "2nd Floor" }, { label: "Review" }];
  const topStepLabels = [{ label: "" }, { label: "" }, { label: "" }, { label: "" }];

  return (
    <div className="material-preview bg-no-repeat bg-cover bg-center absolute h-full w-full object-center ">
      <MainSteppers stepLabels={stepLabels} activeStep={1}/>
      {/* <MainSteppers stepLabels={topStepLabels}/> */}
      <StepDetails />
      <SettingCard
        ActiveProducts={activeProducts}
        DefaultProducts={defaultProducts}
        FeaturesElements={featuresElements}
      />
      <ImageSlider products={products} />
      <button
        title="map"
        className="absolute flex p-2 justify-center items-center bottom-3 left-3 bg-white h-[50px] w-[50px] rounded-[10px]"
      >
        <LocationPick />
      </button>
    </div>
  );
};

export default MaterialPreview;
