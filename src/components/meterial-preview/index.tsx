"use client";

import SettingCard from "./setting-card";
import ImageSlider from "./slider";
import {
  I_FeaturesElements,
  I_Products,
  I_VisualizerDesign,
} from "@/utils/Interfaces/Products";
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

  const [visualizerDesignElements, setVisualizerDesignElements] = useState<
    I_VisualizerDesign[]
  >([]);

  const [currentStep, setCurrentStep] = useState(0); // Start at step 1

  const MainSteppers = dynamic(() => import("@/components/steppers"), {
    ssr: false,
  });

  const selectedStepsHandler = (step: number) => {
    // if (step >= 0 && step <= 4) {
      setCurrentStep(step);
    // }
  };

  // Render different content based on the current step
  const renderStepContent = (step: number) => {
    switch (step) {
      case 1:
        return <div>Step 1: Personal Information</div>;
      case 2:
        return <div>Step 2: Address Details</div>;
      case 3:
        return <div>Step 3: Payment Information</div>;
      case 4:
        return <div>Step 4: Review and Submit</div>;
      default:
        return null;
    }
  };

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

    Products.fetchProducts("visualizerDesign")
      .then((data) => {
        const products: I_VisualizerDesign[] = data;
        setVisualizerDesignElements(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("currentStep: ", currentStep);
  

  return (
    <div className="material-preview bg-no-repeat bg-cover bg-center absolute h-full w-full object-center ">
      <MainSteppers activeStep={currentStep} selectedSteps={selectedStepsHandler} />
      {/* <MainSteppers stepLabels={topStepLabels}/> */}
      <div className="flex justify-between">
        <StepDetails />
        <SettingCard
          ActiveProducts={activeProducts}
          DefaultProducts={defaultProducts}
          FeaturesElements={featuresElements}
        />
      </div>
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
