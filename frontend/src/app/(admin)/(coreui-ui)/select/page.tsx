"use client";

import { Select, MultiSelect } from "@/coreui/ui/select";
import { useState } from "react";

export default function Page() {
  const [role, setRole] = useState<string | undefined>(undefined);
  const [roles, setRoles] = useState<string[]>([]);

  console.log(role);
  console.log(roles);
  return (
    <>
      <Select
        value={role}
        onChange={setRole}
        options={[
          { label: "Admin", value: "admin" },
          { label: "Editor", value: "editor" },
          { label: "Visualizador", value: "viewer" },
        ]}
      />
      <hr className="m-2"></hr>

      <MultiSelect
        value={roles}
        onChange={setRoles}
        options={[
          { label: "Admin", value: "admin" },
          { label: "Editor", value: "editor" },
          { label: "Visualizador", value: "viewer" },
        ]}
      />
    </>
  );
}
