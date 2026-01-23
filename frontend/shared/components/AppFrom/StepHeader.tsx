// StepHeader.tsx
import { Stepper, Step, StepLabel } from "@mui/material";

export function StepHeader({
  steps,
  activeStep,
}: {
  steps: { label: string }[];
  activeStep: number;
}) {
  return (
    <Stepper activeStep={activeStep}>
      {steps.map(step => (
        <Step key={step.label}>
          <StepLabel>{step.label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
