import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type ButtonProps = { children?: ReactNode } & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button type="button" {...rest}>
      {children}
    </button>
  );
}
