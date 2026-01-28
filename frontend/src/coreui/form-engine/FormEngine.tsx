"use client";

import { useMemo, useState } from "react";
import { FormEngineProps, FormField } from "./types";
import { FieldRenderer } from "./fieldRenderers";
import { Button } from "@/coreui/ui/button";
import { Steps } from "@/coreui/ui/steps";

export function FormEngine<T>({
  id,
  fields,
  steps,
  initialValues,
  onSubmit,
  disabled,
  actions,
}: FormEngineProps<T>) {
  /* ======================================================
   * INITIAL STATE
   * ====================================================== */

  const initialState = useMemo(() => {
    const state: any = {};

    fields.forEach((field) => {
      const key = field.name as keyof T;

      if (initialValues && key in initialValues) {
        state[key] = initialValues[key];
      } else if (field.defaultValue !== undefined) {
        state[key] = field.defaultValue;
      } else {
        state[key] = getEmptyValue(field);
      }
    });

    return state as T;
  }, [fields, initialValues]);

  const [values, setValues] = useState<T>(initialState);
  const [currentStep, setCurrentStep] = useState(0);

  /* ======================================================
   * HELPERS
   * ====================================================== */

  function getEmptyValue(field: FormField<T>) {
    switch (field.type) {
      case "boolean":
        return false;
      case "multiselect":
        return [];
      default:
        return "";
    }
  }

  function handleChange(name: keyof T, value: any) {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log("submit", { currentStep, steps });

    if (steps) {
      const isLastStep = currentStep === steps.length - 1;

      if (!isLastStep) {
        setCurrentStep((s) => s + 1);
        return;
      }
    }

    onSubmit(values);
  }

  /* ======================================================
   * STEPS RESOLUTION
   * ====================================================== */

  const visibleFields = useMemo(() => {
    if (!steps) return fields;

    const step = steps[currentStep];
    return fields.filter((field) => step.fields.includes(field.name));
  }, [fields, steps, currentStep]);

  const stepItems = useMemo(() => {
    if (!steps) return [];

    return steps.map((step, index) => ({
      id: String(index),
      label: step.title,
      description: typeof step.description === "string" ? step.description : undefined,
    }));
  }, [steps]);

  const currentStepId = String(currentStep);

  /* ======================================================
   * RENDER
   * ====================================================== */

  return (
    <form id={id} onSubmit={handleSubmit} className="space-y-6">
      {/* STEPS */}
      {steps && (
        <Steps
          steps={stepItems}
          current={currentStepId}
          onChange={(id) => {
            const index = Number(id);
            if (!Number.isNaN(index)) {
              setCurrentStep(index);
            }
          }}
          className="mb-6"
        />
      )}

      {/* FIELDS */}
      {visibleFields.map((field) => (
        <FieldRenderer
          key={field.name}
          field={field}
          value={values[field.name]}
          disabled={disabled}
          onChange={(value) => handleChange(field.name, value)}
        />
      ))}

      {/* FOOTER */}
      <div className="border-t pt-4">
        {steps ? (
          /* FORM COM STEPS */
          <div className="flex justify-between">
            {/* VOLTAR */}
            {currentStep > 0 && (
              <Button
                label="Voltar"
                variant="secondary"
                action={{
                  type: "callback",
                  onClick: () => setCurrentStep((s) => s - 1),
                }}
              />
            )}

            {/* PRÓXIMO / SALVAR */}
            <Button
              label={
                currentStep < steps.length - 1 ? "Próximo" : (actions?.submit?.label ?? "Salvar")
              }
              variant={
                currentStep < steps.length - 1
                  ? "secondary"
                  : (actions?.submit?.variant ?? "primary")
              }
              action={{ type: "submit" }} // 🔥 SEMPRE submit
            />
          </div>
        ) : (
          /* FORM SEM STEPS */
          actions && (
            <div className="flex justify-end gap-3">
              {actions.cancel && (
                <Button
                  label={actions.cancel.label ?? "Cancelar"}
                  variant={actions.cancel.variant ?? "secondary"}
                  action={{
                    type: "callback",
                    onClick: actions.cancel.onClick!,
                  }}
                />
              )}

              {actions.submit && (
                <Button
                  label={actions.submit.label ?? "Salvar"}
                  variant={actions.submit.variant ?? "primary"}
                  action={{ type: "submit" }}
                />
              )}
            </div>
          )
        )}
      </div>
    </form>
  );
}
