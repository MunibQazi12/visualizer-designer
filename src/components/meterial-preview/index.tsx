"use client";

import SettingCard from "./setting-card";
import ImageSlider from "./slider";
import { I_FeaturesElements, I_Products } from "@/utils/Interfaces/Products";
import { useEffect, useState } from "react";
import Products from "@/services/firebase/products";
import LocationPick from "../../../public/svgs/location-pick";
import dynamic from "next/dynamic";
import StepDetails from "@/components/step-details";

import { getUserPath } from "@/services/firebase/configuration";
import LocationMap from "../location-map";
// import ViewAllDetails from "../view-all-details";

const MainSteppers = dynamic(() => import("@/components/steppers"), {
  ssr: false,
});

interface Option {
  OPTION_NAME: string;
  OPTION_VALUE: string;
  LOCATION: string;
  CATEGORY: string;
  [key: string]: any;
}

export interface Options {
  [key: string]: Option;
}

export interface I_Categories {
  label: string;
}

const userId = getUserPath(); // Fetch the user path based on your config

const MaterialPreview = () => {
  const [products, setProducts] = useState<I_Products[]>([]);
  const [featuresElements, setFeaturesElements] = useState<
    I_FeaturesElements[]
  >([]);

  const [selectedDesignElements, setSelectedDesignElements] = useState<any>([]);
  const [selectedVarientElements, setSelectedVarientElements] = useState<any>(
    []
  );

  const [globalOptions, setGlobalOptions] = useState<Options>({});
  const [variants, setVariants] = useState<Options>({});

  const [categories, setCategories] = useState<I_Categories[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [currentStep, setCurrentStep] = useState<number>(0);

  const selectedStepsHandler = (step_number: number, step_name: string) => {
    setSelectedCategory(step_name);
    setCurrentStep(step_number);
  };

  const [mapToggle, setMapToggle] = useState<boolean>(true);

  useEffect(() => {
    Products.fetchProducts("FeaturesElements")
      .then((data) => {
        const products: I_FeaturesElements[] = data;
        setFeaturesElements(products);
      })
      .catch((err) => {
        console.log(err);
      });

    Products.fetchGlobalOptions("globalOptions")
      .then((data) => {
        const globalOptions: any = data;

        setGlobalOptions(globalOptions || {});
      })
      .catch((err) => {
        console.log(err);
      });

    Products.fetchaVariants("variants")
      .then((data) => {
        const variants: any = data;
        setVariants(variants);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const stepDetailsHeaderData = () => {
    const categories_inner = Object.keys(globalOptions).reduce(
      (acc: string[], uuid) => {
        const option = globalOptions[uuid];
        const category = option[" Category"];
        if (!acc.includes(category)) {
          acc.push(category);
        }
        return acc;
      },
      []
    );

    const tbo: I_Categories[] = categories_inner.map((categories) => ({
      label: categories,
    }));
    setCategories(tbo);

    !selectedCategory?.length && setSelectedCategory(tbo[0]?.label);
  };

  const stepDetailsHeaderBody = () => {
    if (!selectedCategory) return null;

    const locations = Object.keys(globalOptions).reduce(
      (acc: { [key: string]: { [optSelId: string]: Option[] } }, uuid) => {
        const option = { ...globalOptions[uuid] };
        const category = option[" Category"];
        const location = option[" Location"];
        const optSelId = option[" Opt Sel ID "];

        if (category === selectedCategory) {
          if (!acc[location]) acc[location] = {};
          if (!acc[location][optSelId]) acc[location][optSelId] = [];
          acc[location][optSelId].push(option);
        }

        return acc;
      },
      {}
    );

    setSelectedDesignElements(locations);
    return locations;
  };

  const grabAvailableOptionsByVariant = (
    variant_id: string = "205331d4-b89e-4174-acc8-8c548946be6e"
  ) => {
    return variants[variant_id];
  };

  useEffect(() => {
    stepDetailsHeaderData();
    stepDetailsHeaderBody();
  }, [globalOptions, selectedCategory]);

  return (
    <div className="material-preview bg-no-repeat bg-cover bg-center absolute h-full w-full object-center ">
      {categories.length > 0 ? (
        <MainSteppers
          activeStep={currentStep}
          selectedSteps={selectedStepsHandler}
          categories={categories}
          className="mainStepper"
          displayLabel={true}
        />
      ) : null}

      {/* Side stepper start */}
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-6 justify-between">
        {!!Object.keys(selectedDesignElements).length ? (
          <div className="flex pl-7 lg:w-1/2">
            <div>
              <MainSteppers
                activeStep={currentStep}
                selectedSteps={selectedStepsHandler}
                categories={categories}
                className="mainStepper stepper-left-sec"
                displayLabel={false}
              />
            </div>

            <StepDetails
              selectedDesignElements={selectedDesignElements}
              selectedCategory={selectedCategory}
              setSelectedVarientElements={setSelectedVarientElements}
            />
          </div>
        ) : null}

        {!!Object.keys(selectedVarientElements).length ? (
          <SettingCard
            FeaturesElements={featuresElements}
            selectedVarientElements={selectedVarientElements}
            selectedVariant={grabAvailableOptionsByVariant(
              "205331d4-b89e-4174-acc8-8c548946be6e"
            )}
          />
        ) : null}
      </div>

      <ImageSlider products={products} />

      {mapToggle ? (
        <button
          title="map"
          className="absolute flex p-2 justify-center items-center bottom-3 left-3 bg-white h-[50px] w-[50px] rounded-[10px]"
          onClick={() => {
            setMapToggle(false);
          }}
        >
          <LocationPick />
        </button>
      ) : (
        <LocationMap
          mapToggle={() => {
            setMapToggle(true);
          }}
        />
      )}

      {/* View all modal start */}
      {/* <ViewAllDetails /> */}
      {/* View all modal end */}
    </div>
  );
};

export default MaterialPreview;
