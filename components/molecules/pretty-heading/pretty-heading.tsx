import clsx from "clsx";
import { PropsWithChildren } from "react";

type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type PrettyHeadingProps = PropsWithChildren & {
  level?: HeadingLevels;
  className?: string;
};

export function PrettyHeading({
  level = "h1",
  className,
  children,
}: PrettyHeadingProps) {
  const Component = level;

  return (
    <Component
      className={clsx(
        "animate-gradient bg-300% font-bold text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-900 via-blue-500 to-pink-600",
        className
      )}
    >
      {children}
    </Component>
  );
}
