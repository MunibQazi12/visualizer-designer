import { I_VisualizerDesign } from "@/utils/Interfaces/Products";
import DiningRoom from "@/components/step-details/dining-room";
import Card from "@/components/step-details/card";
import GreatRoom from "@/components/step-details/great-room";
import OwnerSuit from "@/components/step-details/owner-suit";
import OwnerBath from "@/components/step-details/owner-bath";
import MudRoom from "@/components/step-details/mud-room";
import Kitchen from "@/components/step-details/kitchen";
import ScrollDownSvg from "@/../public/svgs/scroll-down";

interface I_Props {
  visualizerDesignElements: I_VisualizerDesign[];
  currentStep: number;
  setSelectedKitchenType: any;
  selectedKitchenType: any;
}

const StepDetails = (props: I_Props) => {
  const {
    visualizerDesignElements,
    currentStep,
    setSelectedKitchenType,
    selectedKitchenType,
  } = props;

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

  const visualizeElements: any = selectDataToDisplay();

  console.log("visualizeElements: ", visualizeElements);

  return visualizeElements.map((data: any, index: number) => {
    return (
      <div
        key={"visualizeElements" + index}
        className="w-full max-w-[348px] ml-9 relative step-detail-container"
      >
        {data.dinningRoom.diningTable ? (
          <Card className="stepper-detail-dropdown-open completed">
            <DiningRoom />
          </Card>
        ) : null}

        {data.greatRoom.sideTables ? (
          <Card className="stepper-detail-dropdown-open completed">
            <GreatRoom />
          </Card>
        ) : null}

        <Card className="stepper-detail-dropdown-open completed">
          <Kitchen 
            selectedKitchenType={selectedKitchenType}
            setSelectedKitchenType={setSelectedKitchenType}
          />
        </Card>

        <Card className="stepper-detail-dropdown-open completed">
          <GreatRoom />
        </Card>

        <Card className="stepper-detail-dropdown-open completed">
          <OwnerSuit />
        </Card>

        {data.ownersBath.shampooHolder ? (
          <Card className="stepper-detail-dropdown-open completed">
            <OwnerBath />
          </Card>
        ) : null}

        <Card className="stepper-detail-dropdown-open completed">
          <MudRoom />
        </Card>

        <ScrollDownSvg />
        <div className="more-data-scroll"></div>
      </div>
    );
  });
};
export default StepDetails;
