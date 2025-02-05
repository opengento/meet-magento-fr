import { ReactNode } from "react";

export type ButtonLinkProps = {
  variant: "primary" | "secondary" | "secondary-invert" | "secondary-invert-w-border" | "soft-pink",
  href: string,
  target?: string,
  rel?: string,
  icon?: ReactNode,
  iconPosition?: "left" | "right",
  children?: ReactNode
};
