"use client";

import { useMemo, useState } from "react";
import { FormEngineProps, FormField } from "./types";
import { FieldRenderer } from "./fieldRenderers";

export function FormEngine<T>({
  fields,
  steps,
  initialValues,
  onSubmit,
  renderFooter,
  disabled,
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
    onSubmit(values);
  }

  /* ======================================================
   * STEP RESOLUTION
   * ====================================================== */

  const visibleFields = useMemo(() => {
    if (!steps) return fields;

    const step = steps[currentStep];
    return fields.filter((field) => step.fields.includes(field.name));
  }, [fields, steps, currentStep]);

  /* ======================================================
   * RENDER
   * ====================================================== */

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {steps && (
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{steps[currentStep].title}</h2>

          <span className="text-sm text-gray-500">
            {currentStep + 1} / {steps.length}
          </span>
        </div>
      )}

      {visibleFields.map((field) => (
        <FieldRenderer
          key={field.name}
          field={field}
          value={values[field.name]}
          disabled={disabled}
          onChange={(value) => handleChange(field.name, value)}
        />
      ))}

      <div className="flex justify-between pt-4">
        {steps && currentStep > 0 && (
          <button type="button" onClick={() => setCurrentStep((s) => s - 1)}>
            Voltar
          </button>
        )}

        {steps && currentStep < steps.length - 1 ? (
          <button type="button" onClick={() => setCurrentStep((s) => s + 1)}>
            Próximo
          </button>
        ) : (
          <button type="submit">Salvar</button>
        )}
      </div>

      {renderFooter}
    </form>
  );
}
