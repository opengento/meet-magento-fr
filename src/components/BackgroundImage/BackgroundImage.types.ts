import {ReactNode} from "react";

export type BackgroundImageProps = {
  children: ReactNode;
  imagePath: string;
  className?: string;
  overlayColor?: string;
  blurAmount?: "none" | "sm" | "md" | "lg";
  priority?: boolean;
}
