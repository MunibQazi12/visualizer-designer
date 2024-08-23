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

const MainSteppers = dynamic(() => import("@/components/steppers"), {
  ssr: false,
});

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

  const [currentStep, setCurrentStep] = useState<number>(0); // Start at step 1

  const [selectedKitchenType, setSelectedKitchenType] = useState<any>({
    kitchen_layout: false,
    cabinet_selection: false,
    counterTop_selection: false,
    plumbing_fixture: false,
  });

  const setSelectedKitchenTypeHandler = (selectedOption: string) => {
    if (selectedOption === "kitchen_layout") {
      setSelectedKitchenType({
        kitchen_layout: true,
        cabinet_selection: false,
        counterTop_selection: false,
        plumbing_fixture: false,
      });
    } else if (selectedOption === "cabinet_selection") {
      setSelectedKitchenType({
        cabinet_selection: true,
        counterTop_selection: false,
        plumbing_fixture: false,
        kitchen_layout: false,
      });
    } else if (selectedOption === "counterTop_selection") {
      setSelectedKitchenType({
        counterTop_selection: true,
        cabinet_selection: false,
        plumbing_fixture: false,
        kitchen_layout: false,
      });
    } else if (selectedOption === "plumbing_fixture") {
      setSelectedKitchenType({
        plumbing_fixture: true,
        cabinet_selection: false,
        counterTop_selection: false,
        kitchen_layout: false,
      });
    }
  };

  const selectedStepsHandler = (step: number) => {
    if (step >= 0 && step <= 3) {
      setCurrentStep(step);
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

  return (
    <div className="material-preview bg-no-repeat bg-cover bg-center absolute h-full w-full object-center ">
      <MainSteppers
        activeStep={currentStep}
        selectedSteps={selectedStepsHandler}
      />

      <div className="flex justify-between">
        {visualizerDesignElements.length ? (
          <StepDetails
            currentStep={currentStep}
            visualizerDesignElements={visualizerDesignElements}
            setSelectedKitchenType={setSelectedKitchenTypeHandler}
            selectedKitchenType={selectedKitchenType}
          />
        ) : null}

        {selectedKitchenType.cabinet_selection ? (
          <SettingCard
            ActiveProducts={activeProducts}
            DefaultProducts={defaultProducts}
            FeaturesElements={featuresElements}
            selectedKitchenType={selectedKitchenType}
          />
        ) : null}
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
