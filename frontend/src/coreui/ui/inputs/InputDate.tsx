// coreui/ui/inputs/InputDate.tsx
import { InputDefault } from "./InputDefault";

type InputDateProps = Omit<
  React.ComponentProps<typeof InputDefault>,
  "type"
>;

export function InputDate(props: InputDateProps) {
  return <InputDefault {...props} type="date" />;
}
