import {
  stepsWrapper,
  stepsHorizontal,
  stepsVertical,
  stepItem,
  stepCircle,
  stepLabelWrapper,
  stepLabel,
  stepDescription,
  stepLine,
  stepStates,
} from "./steps.styles";

type Step = {
  id: string;
  label: string;
  description?: string;
};

type StepsProps = {
  steps: Step[];
  current: string;
  onChange?: (id: string) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
};

export function Steps({
  steps,
  current,
  onChange,
  orientation = "horizontal",
  className,
}: StepsProps) {
  const currentIndex = steps.findIndex((s) => s.id === current);

  return (
    <div
      className={[
        stepsWrapper,
        orientation === "horizontal" ? stepsHorizontal : stepsVertical,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {steps.map((step, index) => {
        const state =
          index < currentIndex ? "completed" : index === currentIndex ? "active" : "pending";

        const styles = stepStates[state];

        return (
          <div key={step.id} className={stepItem} onClick={() => onChange?.(step.id)}>
            <div className={[stepCircle, styles.circle].join(" ")}>{index + 1}</div>

            <div className={stepLabelWrapper}>
              <span className={[stepLabel, styles.label].join(" ")}>{step.label}</span>

              {step.description && <span className={stepDescription}>{step.description}</span>}
            </div>

            {orientation === "horizontal" && index < steps.length - 1 && (
              <div className={stepLine} />
            )}
          </div>
        );
      })}
    </div>
  );
}
