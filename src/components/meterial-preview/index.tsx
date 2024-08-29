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

import { getUserPath, grabAllData } from "@/services/firebase/configuration";
import LocationMap from "../location-map";

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

interface Options {
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
  const [categories, setCategories] = useState<I_Categories[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [currentStep, setCurrentStep] = useState<number>(0); 

  const selectedStepsHandler = (step_number: number, step_name: string) => {
    setSelectedCategory(step_name);
    setCurrentStep(step_number);
  };

  const [mapToggle, setMapToggle] = useState<boolean>(true);

  useEffect(() => {
    // Products.fetchProducts("products")
    //   .then((data) => {
    //     const products: I_Products[] = data;
    //     setProducts(products);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // Products.fetchProducts("ActiveProducts")
    //   .then((data) => {
    //     const products: I_Products[] = data;
    //     setActiveProducts(products);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // Products.fetchProducts("DefaultProducts")
    //   .then((data) => {
    //     const products: I_Products[] = data;
    //     setDefaultProducts(products);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    Products.fetchProducts("FeaturesElements")
      .then((data) => {
        const products: I_FeaturesElements[] = data;
        setFeaturesElements(products);
      })
      .catch((err) => {
        console.log(err);
      });

    // Products.fetchProducts("visualizerDesign")
    //   .then((data) => {
    //     const products: I_VisualizerDesign[] = data;
    //     setVisualizerDesignElements(products);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    Products.fetchGlobalOptions("globalOptions")
      .then((data) => {
        const globalOptions: any = data;

        setGlobalOptions(globalOptions || {});
      })
      .catch((err) => {
        console.log(err);
      });

    // const completeData: any = grabAllData();
    // console.log("completeData: ", completeData);
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
        {Object.keys(selectedDesignElements).length ? (
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
          />
        ) : null}
      </div>

      {/* Side stepper end */}
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
      {/* <div className="w-full max-w-[1177px] h-screen px-2.5 mx-auto rounded-xl absolute top-0 left-0 right-0 flex justify-center items-center">
          <div className="w-full bg-white rounded-2xl h-full max-h-[802px]">
            <div className="flex justify-between items-center sm:pt-[35px] pt-7 sm:pr-[37px] pr-6 sm:pb-11 pb-7 sm:pl-[55px] pl-8">
              <h1 className="text-2xl font-semibold leading-[29px] text-primary-100 mb-0">Kitchen Countertop</h1>
              <button type="button" name="Close" className="w-6 h-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.01006 0.000934334C1.61311 0.00144475 1.22531 0.120319 0.896192 0.342379C0.567074 0.564438 0.311571 0.879605 0.162308 1.24763C0.0130445 1.61566 -0.0232038 2.01985 0.0581906 2.40859C0.139585 2.79733 0.334928 3.15297 0.619277 3.43011L9.1766 11.9923L0.62903 20.5448C0.434212 20.728 0.278167 20.9486 0.170154 21.1933C0.0621405 21.4381 0.0043589 21.7021 0.000237237 21.9696C-0.00388443 22.2371 0.0457378 22.5027 0.14616 22.7507C0.246582 22.9986 0.395758 23.2239 0.584838 23.4131C0.773918 23.6023 0.999049 23.7515 1.24688 23.852C1.4947 23.9525 1.76018 24.0022 2.02755 23.998C2.29491 23.9939 2.55873 23.9361 2.80335 23.828C3.04797 23.72 3.2684 23.5638 3.45156 23.3689L11.9991 14.8165L20.5467 23.3689C20.7298 23.5642 20.9502 23.7207 21.1949 23.829C21.4397 23.9374 21.7036 23.9955 21.9712 23.9997C22.2388 24.004 22.5045 23.9544 22.7525 23.854C23.0006 23.7535 23.2259 23.6041 23.4151 23.4148C23.6044 23.2255 23.7536 23 23.854 22.7518C23.9545 22.5036 24.004 22.2378 23.9997 21.9701C23.9955 21.7023 23.9374 21.4382 23.8291 21.1934C23.7208 20.9485 23.5644 20.7279 23.3692 20.5448L14.8217 11.9923L23.379 3.43206C23.6681 3.15152 23.8656 2.79006 23.9457 2.39515C24.0258 2.00025 23.9846 1.59034 23.8277 1.21925C23.6707 0.848154 23.4053 0.533223 23.0662 0.315798C22.7271 0.098372 22.3303 -0.0113855 21.9277 0.000934334C21.4088 0.0163203 20.9162 0.233336 20.5545 0.605968L11.9991 9.16818L3.44181 0.605968C3.2557 0.414484 3.0331 0.262281 2.78718 0.15836C2.54126 0.0544384 2.27701 0.000908181 2.01006 0.000934334Z" fill="#495057"/>
                </svg>
              </button>
            </div>
            <div className="h-auto max-h-[calc(100%-108px)] sm:px-[55px] px-8 pb-5 overflow-auto scrollBar-hidden">
              <div className="mb-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-medium leading-[30px] text-primary-100 mb-[22px]">Selected Option</h2>
                </div>
                <div className="flex flex-wrap sm:justify-start justify-center sm:gap-8 gap-4">
                  <div className="w-[180px]">
                    <div className="w-full h-[180px] overflow-hidden border-4 border-[#3ce342] rounded-2xl mb-[5px]">
                      <Image src={Product} alt="tiles" />
                    </div>
                    <p className="text-xs font-medium leading-5 text-primary-100 text-center mb-0 font-roboto">Granite: Santa Cecilia</p>
                    <p className="text-xs font-medium leading-5 text-primary-100 text-center mb-0 font-roboto">Tier 1 Kitchen Granite</p>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-medium leading-[30px] text-primary-100 mb-[22px]">Available Options</h2>
                  <div className="flex items-center gap-2.5">
                    <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.83304 3.42842C5.83304 2.79737 6.35586 2.28632 7.00008 2.28632C7.6443 2.28632 8.16711 2.79737 8.16711 3.42842C8.16711 4.05947 7.6443 4.57159 7.00008 4.57159C6.35586 4.57159 5.83304 4.05947 5.83304 3.42842ZM10.301 2.28632C9.82084 0.954582 8.52363 0 7.00008 0C5.46994 0 4.16957 0.962097 3.69357 2.30132C3.63014 2.29168 3.56561 2.28632 3.49998 2.28632H1.16703C0.522813 2.28632 0 2.79737 0 3.42842C0 4.05947 0.522813 4.5716 1.16703 4.5716H3.49998C3.56561 4.5716 3.63014 4.56624 3.69357 4.55553C4.16935 5.89582 5.46983 6.85685 7.00008 6.85685C8.52366 6.85685 9.82078 5.90331 10.301 4.5716H19.833C20.4772 4.5716 21 4.05947 21 3.42843C21 2.79738 20.4772 2.28632 19.833 2.28632L10.301 2.28632ZM12.833 12.5716C12.833 11.9405 13.3558 11.4284 14 11.4284C14.6443 11.4284 15.1671 11.9405 15.1671 12.5716C15.1671 13.2026 14.6443 13.7137 14 13.7137C13.3558 13.7137 12.833 13.2026 12.833 12.5716ZM14 9.14316C15.5236 9.14316 16.8207 10.0967 17.3009 11.4284H19.833C20.4772 11.4284 21 11.9405 21 12.5716C21 13.2026 20.4772 13.7137 19.833 13.7137H17.3009C16.8208 15.0454 15.5236 16 14 16C12.4765 16 11.1793 15.0454 10.6991 13.7137H1.16715C0.522928 13.7137 0.000114822 13.2026 0.000114822 12.5716C0.000114822 11.9405 0.522928 11.4284 1.16715 11.4284H10.6991C11.1793 10.0967 12.4765 9.14316 14 9.14316Z" fill="#495057"/>
                    </svg>
                    <p className="text-lg font-medium leading-[27px] text-primary-100 mb-0">Show Filter</p>
                  </div>
                </div>
                <div className="flex flex-wrap sm:justify-start justify-center sm:gap-8 gap-4">
                  <div className="w-[180px]">
                    <div className="w-full h-[180px] overflow-hidden border-4 border-gray-500 rounded-2xl mb-[5px]">
                      <Image src={Product} alt="tiles" />
                    </div>
                    <p className="text-xs font-medium leading-5 text-primary-100 text-center mb-0 font-roboto">Granite: Santa Cecilia</p>
                    <p className="text-xs font-medium leading-5 text-primary-100 text-center mb-0 font-roboto">Tier 1 Kitchen Granite</p>
                  </div>
                  <div className="w-[180px]">
                    <div className="w-full h-[180px] overflow-hidden border-4 border-gray-500 rounded-2xl mb-[5px]">
                      <Image src={Product} alt="tiles" />
                    </div>
                    <p className="text-xs font-medium leading-5 text-primary-100 text-center mb-0 font-roboto">Granite: Santa Cecilia</p>
                    <p className="text-xs font-medium leading-5 text-primary-100 text-center mb-0 font-roboto">Tier 1 Kitchen Granite</p>
                  </div>
                  <div className="w-[180px]">
                    <div className="w-full h-[180px] overflow-hidden border-4 border-gray-500 rounded-2xl mb-[5px]">
                      <Image src={Product} alt="tiles" />
                    </div>
                    <p className="text-xs font-medium leading-5 text-primary-100 text-center mb-0 font-roboto">Granite: Santa Cecilia</p>
                    <p className="text-xs font-medium leading-5 text-primary-100 text-center mb-0 font-roboto">Tier 1 Kitchen Granite</p>
                  </div>
                  <div className="w-[180px]">
                    <div className="w-full h-[180px] overflow-hidden border-4 border-gray-500 rounded-2xl mb-[5px]">
                      <Image src={Product} alt="tiles" />
                    </div>
                    <p className="text-xs font-medium leading-5 text-primary-100 text-center mb-0 font-roboto">Granite: Santa Cecilia</p>
                    <p className="text-xs font-medium leading-5 text-primary-100 text-center mb-0 font-roboto">Tier 1 Kitchen Granite</p>
                  </div>
                  <div className="w-[180px]">
                    <div className="w-full h-[180px] overflow-hidden border-4 border-gray-500 rounded-2xl mb-[5px]">
                      <Image src={Product} alt="tiles" />
                    </div>
                    <p className="text-xs font-medium leading-5 text-primary-100 text-center mb-0 font-roboto">Granite: Santa Cecilia</p>
                    <p className="text-xs font-medium leading-5 text-primary-100 text-center mb-0 font-roboto">Tier 1 Kitchen Granite</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* View all modal end */}
    </div>
  );
};

export default MaterialPreview;
