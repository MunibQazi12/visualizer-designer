"use client";

import SettingCard from "./setting-card";
import ImageSlider from "./slider";
import { I_FeaturesElements, I_Products } from "@/utils/Interfaces/Products";
import { useEffect, useState } from "react";
import Products from "@/services/firebase/products";

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
    </div>
  );
};

export default MaterialPreview;
