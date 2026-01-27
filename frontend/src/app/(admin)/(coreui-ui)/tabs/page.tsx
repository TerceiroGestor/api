"use client";

import { Tabs } from "@/coreui/ui/tabs";
import { useState } from "react";
import PageButton from "../buttons/page";
import PageForms from "../forms/page";

export default function Page() {
  const [tab, setTab] = useState("dados");
  return (
    <>
      <Tabs
        value={tab}
        onChange={setTab}
        items={[
          { id: "Buttons", label: "Botões" },
          { id: "Forms", label: "Formulários" },
          { id: "historico", label: "Histórico", disabled: true },
        ]}
      />

      {tab === "Buttons" && <PageButton />}
      {tab === "Forms" && <PageForms />}
    </>
  );
}
