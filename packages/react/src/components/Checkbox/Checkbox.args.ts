import { CheckboxProps } from "./Checkbox.props";

const basic: CheckboxProps = {
  callback: "",
  disabled: false,
  error: false,
  grouped: false,
  helper: false,
  label: "Checkbox Label",
  name: "checkbox",
  required: false,
  tooltip: false,
  type: "checkbox",
};

/**
 * Sample prop definitions Checkbox's enumerable properties (imported in stories and test)
 */
const CheckboxArgs = {
  basic,
};

export default CheckboxArgs;
