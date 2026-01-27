"use client";

import { useState } from "react";

import { RichText } from "@/coreui/ui/richtext/RichText";

import {
  InputDefault,
  InputPassword,
  InputEmail,
  InputPhone,
  InputTextarea,
  InputMoney,
  InputNumber,
  InputCEP,
  InputCPF,
  InputRG,
} from "@/coreui/ui/inputs";

export default function PageForms() {
  const [currency, setCurrency] = useState("");
  const [cpf, setcpf] = useState("");
  const [rg, setrg] = useState("");
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setcep] = useState("");
  const [password, setpassword] = useState("");
  const [description, setDescription] = useState("");
  const [observacao, setObservacao] = useState("");
  const [qty, setQty] = useState<number | undefined>(undefined);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {}
  console.log(currency);
  console.log(cpf);
  console.log(phone);
  return (
    <>
      <h1>Form Elements</h1>
      <hr className="m-5"></hr>

      <h1>Mask and Validation</h1>
      <InputCEP value={cep} onChange={setcep} placeholder="CEP" clearable />
      <InputCPF value={cpf} onChange={setcpf} placeholder="CPF" clearable className="my-2" />

      <InputRG value={rg} onChange={setrg} placeholder="RG" clearable className="my-2" />

      <InputMoney value={currency} onChange={setCurrency} placeholder="" className="my-2" />

      <InputPhone
        value={phone}
        onChange={setphone}
        placeholder="Telefone"
        message="Telefone inválido"
        clearable
        className="my-2"
      />

      <hr className="m-5"></hr>

      <InputEmail
        label={"Email"}
        value={email}
        onChange={setEmail}
        message="E-mail inválido"
        className="mb-2"
      />
      <InputPassword label={"Password"} clearable />
      <hr className="m-5"></hr>

      <h1>Text Area</h1>
      <InputTextarea
        value={observacao}
        onChange={(e) => setObservacao(e.target.value)}
        className="mb-2"
      />

      <hr className="m-5"></hr>
      <h1>Rich Text</h1>
      <RichText value={description} onChange={setDescription} />
    </>
  );
}
