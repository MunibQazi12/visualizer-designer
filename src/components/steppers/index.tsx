import { Step, Stepper } from "react-form-stepper";
import "@/css/style.css";
import { useEffect, useState } from "react";
import { I_Categories } from "../meterial-preview";

interface I_Props {
  activeStep: number;
  selectedSteps: any;
  categories: I_Categories[];
}

const CustomStepper = (props: I_Props) => {
  const { activeStep, selectedSteps, categories } = props;

  return (
    <>
      <Stepper activeStep={activeStep} className="mainStepper">
        {categories.map((category, index) => {
          return (
            <Step
              key={category.label}
              index={index}
              disabled={false}
              label={category.label}
              className={`${activeStep === index ? "active-stepper" : ""}`}
              onClick={() => {
                selectedSteps(index);
              }}
            />
          );
        })}

        {/* <Step
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
        /> */}

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
