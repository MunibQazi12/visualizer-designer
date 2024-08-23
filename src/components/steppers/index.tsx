import { Step, Stepper } from "react-form-stepper";
import "@/css/style.css";
import { useEffect, useState } from "react";

interface I_Props {
  activeStep: number;
  selectedSteps: any;
}

const CustomStepper = (props: I_Props) => {
  const { activeStep, selectedSteps } = props;

  return (
    <>
      <Stepper activeStep={activeStep} className="mainStepper">
        <Step
          index={0}
          disabled={false}
          label="Exterior"
          className={`${activeStep === 0 ? "active-stepper" : ""}`}
          onClick={() => {
            selectedSteps(0);
          }}
        />

        <Step
          index={1}
          disabled={false}
          label="1st Floor"
          className={`${activeStep === 1 ? "active-stepper" : ""}`}
          onClick={() => {
            selectedSteps(1);
          }}
        />

        <Step
          index={2}
          disabled={false}
          label="2nd Floor"
          className={`${activeStep === 2 ? "active-stepper" : ""}`}
          onClick={() => {
            selectedSteps(2);
          }}
        />

        <Step
          index={3}
          disabled={false}
          label="Review"
          className={`${activeStep === 3 ? "active-stepper" : ""}`}
          onClick={() => {
            selectedSteps(3);
          }}
        />
      </Stepper>
    </>
  );
};

export default CustomStepper;
