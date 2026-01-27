import { useCallback, useMemo, useState } from "react";
import { FormStep } from "./types";

type UseFormEngineProps<T> = {
  steps: FormStep<T>[];
  initialData?: Partial<T>;
};

export function useFormEngine<T>({ steps, initialData = {} }: UseFormEngineProps<T>) {
  // ---------------------------
  // Estado do formulário
  // ---------------------------
  const [data, setData] = useState<Partial<T>>(initialData);

  // ---------------------------
  // Step atual
  // ---------------------------
  const [currentStep, setCurrentStep] = useState(steps[0]?.id);

  // ---------------------------
  // Helpers de campo
  // ---------------------------
  const setFieldValue = useCallback(<K extends keyof T>(name: K, value: T[K]) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const getFieldValue = useCallback(
    <K extends keyof T>(name: K): T[K] | undefined => {
      return data[name];
    },
    [data]
  );

  // ---------------------------
  // Helpers de navegação
  // ---------------------------
  const stepIndex = useMemo(
    () => steps.findIndex((s) => s.id === currentStep),
    [steps, currentStep]
  );

  const goToStep = useCallback(
    (id: string) => {
      if (steps.some((s) => s.id === id)) {
        setCurrentStep(id);
      }
    },
    [steps]
  );

  const nextStep = useCallback(() => {
    if (stepIndex < steps.length - 1) {
      setCurrentStep(steps[stepIndex + 1].id);
    }
  }, [stepIndex, steps]);

  const prevStep = useCallback(() => {
    if (stepIndex > 0) {
      setCurrentStep(steps[stepIndex - 1].id);
    }
  }, [stepIndex, steps]);

  // ---------------------------
  // Step atual (objeto)
  // ---------------------------
  const currentStepData = useMemo(() => steps[stepIndex], [steps, stepIndex]);

  return {
    data,
    setFieldValue,
    getFieldValue,

    currentStep,
    currentStepData,

    goToStep,
    nextStep,
    prevStep,
  };
}
