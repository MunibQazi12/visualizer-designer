import { Step, Stepper } from "react-form-stepper";
import "@/css/style.css";
import { useEffect, useState } from "react";

interface I_Props {
  activeStep: number;
  selectedSteps: any;
}

const CustomStepper = (props: I_Props) => {
  const { activeStep, selectedSteps } = props;
  const [currentStep, setCurrentStep] = useState(0); // Start at step 1

  console.log("currentStep: ", currentStep);
  return (
    <>
      <Stepper activeStep={activeStep} className="mainStepper">
        {/* <span > */}
        <Step index={0} label="Exterior" onClick={() => selectedSteps(0)} />
        {/* </span> */}

        {/* <span onClick={() => selectedSteps(1)}> */}
        <Step index={1} label="1st Floor" onClick={() => selectedSteps(1)} />
        {/* </span> */}

        {/* <span onClick={() => selectedSteps(2)}> */}
          <Step index={2} label="2nd Floor"onClick={() => selectedSteps(2)} />
        {/* </span> */}

        {/* <span onClick={() => selectedSteps(3)}> */}
          <Step index={3} label="Review" onClick={() => selectedSteps(3)}/>
        {/* </span> */}
      </Stepper>
      <button
        onClick={() => selectedSteps((prev: number) => Math.max(prev - 1, 0))}
        disabled={activeStep === 0}
      >
        Previous
      </button>
      <button
        onClick={() => selectedSteps((prev: number) => Math.min(prev + 1, 3))}
        disabled={activeStep === 3}
      >
        Next
      </button>
    </>
  );
};

export default CustomStepper;
