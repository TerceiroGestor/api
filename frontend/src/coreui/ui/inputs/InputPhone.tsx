import { InputDefault } from "./InputDefault";
import { phoneMask } from "../mask/phone.mask";

type InputPhoneProps = Omit<React.ComponentProps<typeof InputDefault>, "type" | "mask">;

export function InputPhone(props: InputPhoneProps) {
  return <InputDefault {...props} type="text" mask={phoneMask} />;
}
