import { Stepper } from "react-form-stepper";
import "@/css/style.css";

interface I_Props {
    stepLabels: any;
    activeStep: number;
}

const CustomStepper = (props: I_Props) => {
    const {stepLabels, activeStep} = props;
  return (
    <Stepper
      steps={stepLabels}
      activeStep={activeStep}
      className="mainStepper"
    />
  );
};

export default CustomStepper;
