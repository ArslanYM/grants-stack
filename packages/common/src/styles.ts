import { FieldError } from "react-hook-form";
import tw from "tailwind-styled-components";

type ButtonProps = {
  $variant?: "solid" | "outline";
};

export const Button = tw.button`
  bg-violet-400 text-white
  py-1.5 px-4
  rounded
  transition-colors
  focus:shadow-outline
  hover:brightness-125
  disabled:bg-slate-100
  disabled:text-slate-500
  disabled:border-slate-200
  disabled:shadow-none
  ${(p: ButtonProps) =>
  p.$variant === "outline"
    ? "bg-white text-grey-500 border border-grey-100"
    : "bg-violet-400 text-white"}
`;

type InputProps = {
  $hasError?: boolean | FieldError;
  $disabled?: boolean;
};

export const Input = tw.input<InputProps>`
  block
  mt-1 mb-2 w-full sm:text-sm border-grey-100
  shadow-sm rounded-md
  ${(p: InputProps) =>
  p.$hasError
    ? "border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
    : "focus:ring-violet-400 focus:border-violet-400"}
  ${(p: InputProps) => (p.$disabled ? "bg-[#F1F1F1]" : "")}
`;
