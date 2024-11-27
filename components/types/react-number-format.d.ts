// react-number-format.d.ts
declare module "react-number-format" {
  import { Component, InputHTMLAttributes } from "react";

  interface NumberFormatProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: string | number;
    displayType?: "input" | "text";
    format?: string;
    mask?: string;
    placeholder?: string;
    onValueChange?: (values: { formattedValue: string; value: string }) => void;
    className?: string; // Add className here
    // Add other props as needed
  }

  export default class NumberFormat extends Component<NumberFormatProps> {}
}
