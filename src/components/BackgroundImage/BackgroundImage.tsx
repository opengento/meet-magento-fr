import { ReactNode } from "react";
import Image from "next/image";
import { BackgroundImageProps } from "./BackgroundImage.types";

interface BackgroundImageProps {
  children: ReactNode;
  imagePath: string;
  className?: string;
  overlayColor?: string;
  blurAmount?: "none" | "sm" | "md" | "lg";
  priority?: boolean;
}

const BackgroundImage = ({
  children,
  imagePath,
  className = "",
  overlayColor = "",
  blurAmount = "none",
  priority = false,
}: BackgroundImageProps) => {
  const blurValues = {
    none: "",
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
  };

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={imagePath}
          alt=""
          fill
          className="object-cover object-center"
          priority={priority}
          quality={90}
        />
      </div>
      <div
        className={`absolute inset-0 ${overlayColor} ${blurValues[blurAmount]}`}
      />
      <div className="relative">{children}</div>
    </div>
  );
};

export default BackgroundImage;
