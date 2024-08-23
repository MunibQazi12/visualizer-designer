import { Stepper } from "react-form-stepper";

interface I_Props {
    stepLabels: any
}

const CustomStepper = (props: I_Props) => {
    const {stepLabels} = props;
  return (
    <Stepper
      steps={stepLabels}
      activeStep={1}
    />
  );
};

export default CustomStepper;
