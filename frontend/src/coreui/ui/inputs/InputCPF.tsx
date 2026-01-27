import { InputDefault } from "./InputDefault";
import { cpfMask } from "../mask/cpf.mask";

type InputCPFProps = Omit<React.ComponentProps<typeof InputDefault>, "type" | "mask">;

export function InputCPF(props: InputCPFProps) {
  return <InputDefault {...props} type="text" mask={cpfMask} />;
}
