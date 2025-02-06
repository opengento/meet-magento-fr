import React, { ReactNode } from "react";
import Typography from "../Typography/Typography";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useWindowSize from "@/hooks/useWindowSize";
import ClientOnly from "@/helpers/ClientOnly";

interface TopBannerProps {
  title: ReactNode;
  backgroundImage?: string;
  children?: ReactNode;
  onPrevClick?: () => void;
  onNextClick?: () => void;
}

const TopBanner = ({
  title,
  backgroundImage,
  children,
  onPrevClick,
  onNextClick,
}: TopBannerProps) => {
  const { width } = useWindowSize();
  const bannerContent = (
    <ClientOnly>
      <div className="top-banner-content flex flex-wrap flex-row justify-between items-center gap-2">
        <Typography variant="h4" className="text-white" weight="normal">
          {title}
        </Typography>
        <div className="flex gap-2">
          {children}
          {onPrevClick && onNextClick && width > 1024 && (
            <div className="flex gap-2 ml-4">
              <button
                onClick={onPrevClick}
                className="p-2 rounded bg-white/20 hover:bg-white/40"
              >
                <IoIosArrowBack className="text-white" size={24} />
              </button>
              <button
                onClick={onNextClick}
                className="p-2 rounded bg-white/20 hover:bg-white/40"
              >
                <IoIosArrowForward className="text-white" size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </ClientOnly>
  );

  return (
    <div className="top-banner">
      {backgroundImage ? (
        <BackgroundImage
          imagePath={backgroundImage}
          className="py-3 px-4 md:px-14 overflow-hidden rounded-xl"
        >
          {bannerContent}
        </BackgroundImage>
      ) : (
        bannerContent
      )}
    </div>
  );
};

export default TopBanner;
