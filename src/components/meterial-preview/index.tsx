"use client";

import SettingCard from "./setting-card";
import ImageSlider from "./slider";
import { I_Products } from "@/utils/Interfaces/Products";
import { useEffect, useState } from "react";
import Products from "@/services/firebase/products";

const MaterialPreview = () => {
  const [products, setProducts] = useState<I_Products[]>([]);

  useEffect(() => {
    Products.fetchProducts("products")
      .then((data) => {
        const products: I_Products[] = data;
        setProducts(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="material-preview bg-no-repeat bg-cover bg-center absolute h-full w-full object-center ">
      <SettingCard products={products} />
      <ImageSlider products={products} />
    </div>
  );
};

export default MaterialPreview;
