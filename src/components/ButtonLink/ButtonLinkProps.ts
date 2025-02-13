import { ReactNode } from "react";

export type ButtonLinkProps = {
  variant: "primary" | "secondary" | "secondary-invert" | "secondary-invert-w-border" | "soft-pink",
  href: string,
  target?: string | undefined,
  rel?: string | undefined,
  icon?: ReactNode | undefined,
  iconPosition?: "left" | "right" | undefined,
  children?: ReactNode,
};
