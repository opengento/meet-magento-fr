import Image from "next/image";
import React from "react";
import Typography from "../Typography/Typography";

interface ContentMediaProps {
  children?: React.ReactNode;
  imageUrl?: string;
  imagePosition?: "left" | "right";
  imageWidth?: "40%" | "50%" | "60%";
  title?: string;
  titleUnderlineColor?: string;
}

const ContentMedia = ({
  children,
  imageUrl,
  imagePosition = "left",
  imageWidth = "50%",
  title,
  titleUnderlineColor,
}: ContentMediaProps) => {
  return (
    <div className="content-media relative rounded-xl overflow-hidden">
      <div className="absolute inset-0 h-2.5 bg-[url(/images/pattern_top.svg)]" />
      <div className="flex flex-col gap-6 md:gap-12 bg-white py-6 px-4 md:p-12">
        {title && (
          <div className="content-media__title">
            <Typography
              variant="h3"
              color="dark"
              weight="semibold"
              underlineColor={titleUnderlineColor}
            >
              {title}
            </Typography>
          </div>
        )}
        <div
          className={`flex flex-col md:flex-row gap-7 md:gap-12 ${
            imagePosition === "right"
              ? "flex-col-reverse md:flex-row-reverse"
              : ""
          }`}
        >
          {imageUrl && (
            <div
              className="content-media__image rounded-xl overflow-hidden w-full"
              style={{ flex: `0 0 ${imageWidth}` }}
            >
              <div className="relative w-full aspect-[4/3] md: aspect-none md:h-full">
                <Image
                  src={imageUrl}
                  alt="Content Media"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
          {children && (
            <div className="content-media__content flex-1">{children}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentMedia;
