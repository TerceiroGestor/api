import { InputDefault } from "./InputDefault";
import { currencyMask } from "../mask/currency.mask";

type InputMoneyProps = Omit<React.ComponentProps<typeof InputDefault>, "type" | "mask">;

export function InputMoney(props: InputMoneyProps) {
  return <InputDefault {...props} type="text" mask={currencyMask} />;
}
