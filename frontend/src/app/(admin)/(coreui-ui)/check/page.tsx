"use client";

import { Check, Toggle, MultiCheck } from "@/coreui/ui/check";
import { useState } from "react";

export default function Page() {
  const [accepted, setAccepted] = useState(false);
  const [active, setActive] = useState(false);
  const [roles, setRoles] = useState<string[]>([]);

  return (
    <>
      <Check value={accepted} onChange={setAccepted} label="Aceito os termos" />
      <br />
      <Check value label="Confirmado" disabled />
      <br />
      <Toggle value={active} onChange={setActive} label="Ativo" />
      <br />
      <Toggle value={active} onChange={setActive} label="Ativo" variant="error" />
      <br />
      <Toggle value label="Ativo" disabled />
      <br />
      <MultiCheck
        value={roles}
        onChange={setRoles}
        options={[
          { label: "Admin", value: "admin" },
          { label: "Editor", value: "editor" },
          { label: "Visualizador", value: "viewer" },
        ]}
      />
      <br />
    </>
  );
}
