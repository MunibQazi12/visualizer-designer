import { I_VisualizerDesign } from "@/utils/Interfaces/Products";
import DiningRoom from "@/components/step-details/dining-room";
import Card from "@/components/step-details/card";
import GreatRoom from "@/components/step-details/great-room";
import OwnerSuit from "@/components/step-details/owner-suit";
import OwnerBath from "@/components/step-details/owner-bath";
import MudRoom from "@/components/step-details/mud-room";
import Kitchen from "@/components/step-details/kitchen";
import ScrollDownSvg from "@/../public/svgs/scroll-down";
import { useState } from "react";
import { I_AccordionData } from "@/utils/Interfaces/Products";

interface I_Props {
  visualizerDesignElements: I_VisualizerDesign[];
  currentStep: number;
  setSelectedKitchenType: any;
  selectedKitchenType: any;
}



const accordionData = {
  dinningRoom: {
    label: "dinningRoom",
    value: true,
  },
  greatRoom: {
    label: "greatRoom",
    value: false,
  },
  kitchen: {
    label: "kitchen",
    value: false,
  },
  ownersSuit: {
    label: "ownersSuit",
    value: false,
  },
  ownersBath: {
    label: "ownersBath",
    value: false,
  },
  mudRoom: {
    label: "mudRoom",
    value: false,
  },
}

const StepDetails = (props: I_Props) => {
  const {
    visualizerDesignElements,
    currentStep,
    setSelectedKitchenType,
    selectedKitchenType,
  } = props;

  const [accordionToShow, setAccordionToShow] = useState<I_AccordionData>(accordionData);

  const selectDataToDisplay = () => {
    if (currentStep === 0) {
      return [visualizerDesignElements[0]?.exterior];
    } else if (currentStep === 1) {
      return [visualizerDesignElements[0]?.firstFloor];
    } else if (currentStep === 2) {
      return [visualizerDesignElements[0]?.secondFloor];
    } else {
      return [visualizerDesignElements[0]?.review];
    }
  };

  const setAccordionToShowHandler = (value: string) => {
    console.log('value: ', value);
    if(value === accordionData.dinningRoom.label) {
      setAccordionToShow((prev: I_AccordionData) => {
        return {
          ...prev,
          dinningRoom: {
            label: prev.dinningRoom.label,
            value: !prev.dinningRoom.value
          }
        }
      });
    } else  if(value === accordionData.greatRoom.label) {
      setAccordionToShow((prev: I_AccordionData) => {
        return {
          ...prev,
          greatRoom: {
            label: prev.greatRoom.label,
            value: !prev.greatRoom.value
          }
        }
      });
    } else  if(value === accordionData.kitchen.label) {
      setAccordionToShow((prev: I_AccordionData) => {
        return {
          ...prev,
          kitchen: {
            label: prev.kitchen.label,
            value: !prev.kitchen.value
          }
        }
      });
    } else  if(value === accordionData.ownersSuit.label) {
      setAccordionToShow((prev: I_AccordionData) => {
        return {
          ...prev,
          ownersSuit: {
            label: prev.ownersSuit.label,
            value: !prev.ownersSuit.value
          }
        }
      });
    } else  if(value === accordionData.ownersBath.label) {
      setAccordionToShow((prev: I_AccordionData) => {
        return {
          ...prev,
          ownersBath: {
            label: prev.ownersBath.label,
            value: !prev.ownersBath.value
          }
        }
      });
    } else  if(value === accordionData.mudRoom.label) {
      setAccordionToShow((prev: I_AccordionData) => {
        return {
          ...prev,
          mudRoom: {
            label: prev.mudRoom.label,
            value: !prev.mudRoom.value
          }
        }
      });
    } 

  }
  

  const visualizeElements: any = selectDataToDisplay();

  console.log("accordionToShow: ", accordionToShow);

  return visualizeElements.map((data: any, index: number) => {
    return (
      <div
        key={"visualizeElements" + index}
        className="w-full max-w-[348px] ml-9 relative step-detail-container"
      >
        {data.dinningRoom.dining_layout ? (
          <Card className="stepper-detail-dropdown-open completed">
            <DiningRoom dinningRoom={data.dinningRoom} accordion={accordionToShow} setAccordion={setAccordionToShowHandler}/>
          </Card>
        ) : null}

        {data.greatRoom.great_room_layout ? (
          <Card className="stepper-detail-dropdown-open completed">
            <GreatRoom greatRoom={data.greatRoom} accordion={accordionToShow} setAccordion={setAccordionToShowHandler}/>
          </Card>
        ) : null}

        {data.kitchen.kitchen_layout ? (
          <Card className="stepper-detail-dropdown-open completed">
            <Kitchen
              selectedKitchenType={selectedKitchenType}
              setSelectedKitchenType={setSelectedKitchenType}
              kitchen={data.kitchen}
              accordion={accordionToShow} 
              setAccordion={setAccordionToShowHandler}
            />
          </Card>
        ) : null}

        {data.ownersSuit.owner_suit_layout ? (
          <Card className="stepper-detail-dropdown-open completed">
            <OwnerSuit ownersSuit={data.ownersSuit} accordion={accordionToShow} setAccordion={setAccordionToShowHandler}/>
          </Card>
        ) : null}

        {data.ownersBath.owner_bath_layout ? (
          <Card className="stepper-detail-dropdown-open completed">
            <OwnerBath ownersBath={data.ownersBath} accordion={accordionToShow} setAccordion={setAccordionToShowHandler}/>
          </Card>
        ) : null}

        {data.mudRoom.mudroom_layout ? (
          <Card className="stepper-detail-dropdown-open completed">
            <MudRoom mudRoom={data.mudRoom} accordion={accordionToShow} setAccordion={setAccordionToShowHandler}/>
          </Card>
        ) : null}

        <ScrollDownSvg />
        <div className="more-data-scroll"></div>
      </div>
    );
  });
};
export default StepDetails;
