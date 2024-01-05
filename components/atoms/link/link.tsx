import {
  forwardRef,
  type AnchorHTMLAttributes,
  type DetailedHTMLProps,
} from "react";
import NextLink from "next/link";
import clsx from "clsx";

type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & { external?: boolean; href: string };

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { external, className, children, ...props },
  ref
) {
  const Component = external ? "a" : NextLink;

  return (
    <Component
      {...props}
      className={clsx(
        "text-typography font-light hover:opacity-70 transition-opacity block",
        className
      )}
      ref={ref}
    >
      {children}
    </Component>
  );
});
