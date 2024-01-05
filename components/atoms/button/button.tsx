import clsx from "clsx";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx("text-typography font-normal", className)}
    >
      {children}
    </button>
  );
}
