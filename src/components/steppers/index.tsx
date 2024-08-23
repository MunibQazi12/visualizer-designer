import { Stepper } from "react-form-stepper";

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
    />
  );
};

export default CustomStepper;
