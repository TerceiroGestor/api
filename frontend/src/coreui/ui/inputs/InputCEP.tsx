import { InputDefault } from "./InputDefault";
import { cepMask } from "../mask/cep.mask";

type InputCEPProps = Omit<React.ComponentProps<typeof InputDefault>, "type" | "mask">;

export function InputCEP(props: InputCEPProps) {
  return <InputDefault {...props} type="text" mask={cepMask} />;
}
