"use client";

import SettingCard from "./setting-card";
import ImageSlider from "./slider";
import { I_FeaturesElements, I_Products } from "@/utils/Interfaces/Products";
import { useEffect, useState } from "react";
import Products from "@/services/firebase/products";
import LocationPick from "../../../public/svgs/location-pick";

const MaterialPreview = () => {
  const [products, setProducts] = useState<I_Products[]>([]);
  const [activeProducts, setActiveProducts] = useState<I_Products[]>([]);
  const [defaultProducts, setDefaultProducts] = useState<I_Products[]>([]);
  const [featuresElements, setFeaturesElements] = useState<I_FeaturesElements[]>([]);

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

  return (
    <div className="material-preview bg-no-repeat bg-cover bg-center absolute h-full w-full object-center ">
      <SettingCard ActiveProducts={activeProducts} DefaultProducts={defaultProducts} FeaturesElements={featuresElements} />
      <ImageSlider products={products} />
      <button className="absolute flex p-2 justify-center items-center bottom-3 left-3 bg-white h-[50px] w-[50px] rounded-[10px]">
        <LocationPick />
      </button>
    </div>
  );
};

export default MaterialPreview;
