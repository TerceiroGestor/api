"use client";
import { Button } from "@coreui/ui/button";
import { Plus, Edit, Trash, RefreshCcw, AlertTriangle } from "lucide-react";

<Button label="Novo" icon={<Plus />} variant="primary" />;

export default function PageButton() {
  function deleteUser() {
    alert("Teste");
  }

  return (
    <>
      <h1>Default</h1>
      <Button label="Salvar" />
      <Button label="Primary" variant="primary" />
      <Button label="Secondary" variant="secondary" />
      <Button label="Ghost" variant="ghost" />
      <Button label="Excluir" variant="danger" />

      <hr className="m-5"></hr>
      <h1>Size</h1>

      <Button label="Pequeno" size="sm" />
      <Button label="Grande" size="lg" />

      <hr className="m-5"></hr>
      <h1>Icon</h1>

      <Button label="Novo" icon={<Plus />} variant="primary" />
      <Button label="Editar" icon={<Edit />} variant="ghost" size="sm" />
      <Button mode="icon" icon={<Trash />} variant="ghost" size="sm" aria-label="Excluir" />

      <hr className="m-5"></hr>
      <h1>Loading</h1>
      <Button label="Salvando..." loading />
      <Button mode="icon" icon={<RefreshCcw />} loading aria-label="Atualizando" />

      <hr className="m-5"></hr>
      <h1>Disable</h1>
      <Button label="Indisponível" disabled />

      <hr className="m-5"></hr>
      <h1>Actions</h1>

      <Button label="Enviar" action={{ type: "submit" }} />
      <Button label="Limpar" action={{ type: "reset" }} variant="secondary" />
      <Button
        label="Ir para Dashboard"
        action={{
          type: "navigate",
          href: "/",
        }}
      />
      <Button
        label="Custom"
        variant="danger"
        size="lg"
        icon={<AlertTriangle />}
        loading={false}
        disabled={false}
        action={{
          type: "callback",
          onClick: () => alert("🔥"),
        }}
      />
    </>
  );
}
