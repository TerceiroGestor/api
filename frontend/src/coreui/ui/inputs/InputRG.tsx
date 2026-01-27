import { InputDefault } from "./InputDefault";
import { rgMask } from "../mask/rg.mask";

type InputRGProps = Omit<React.ComponentProps<typeof InputDefault>, "type" | "mask">;

export function InputRG(props: InputRGProps) {
  return <InputDefault {...props} type="text" mask={rgMask} />;
}
