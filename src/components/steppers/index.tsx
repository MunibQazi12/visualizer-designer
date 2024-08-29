import { Step, Stepper } from "react-form-stepper";
import "@/css/style.css";
import { I_Categories } from "../meterial-preview";

interface I_Props {
  activeStep: number;
  selectedSteps: any;
  categories: I_Categories[];
  className: string;
  displayLabel: boolean;
}

const CustomStepper = (props: I_Props) => {
  const { activeStep, selectedSteps, categories, className, displayLabel } =
    props;

  return (
    <>
      <Stepper activeStep={activeStep} className={`${className}`}>
        {categories.map((category, index) => {
          return (
            <Step
              key={category.label}
              index={index}
              disabled={false}
              label={displayLabel ? category.label : ""}
              className={`${activeStep === index ? "active-stepper" : ""}`}
              onClick={() => {
                selectedSteps(index, category.label);
              }}
            />
          );
        })}

        {/* <Step
          index={3}
          disabled={false}
          label={displayLabel ? "Review" : ""}
          className={`${activeStep === 3 ? "active-stepper" : ""}`}
          onClick={() => {
            selectedSteps(3, "Appliances");
          }}
        /> */}
      </Stepper>
    </>
  );
};

export default CustomStepper;
