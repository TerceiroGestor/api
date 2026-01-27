"use client";

import { Steps } from "@/coreui/ui/steps";
import { useState } from "react";
import PageButton from "../buttons/page";
import PageForms from "../forms/page";
import { PageIcon } from "@/icons";

export default function PageSteps() {
  const [step, setStep] = useState("dados");
  const [steps, setSteps] = useState("dados");
  return (
    <>
      <h1>Steps</h1>
      <hr className="m-2"></hr>
      <Steps
        current={step}
        onChange={setStep}
        steps={[
          { id: "button", label: "Bottões" },
          { id: "forms", label: "Formulário" },
        ]}
      />
      <br />

      <h1>Página</h1>
      <hr className="m-2"></hr>

      {step === "button" && <PageButton />}
      {step === "forms" && <PageForms />}
    </>
  );
}
