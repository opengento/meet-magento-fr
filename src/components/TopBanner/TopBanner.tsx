import React from "react";
import Typography from "../Typography/Typography";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useWindowSize from "@/hooks/useWindowSize";
import ClientOnly from "@/helpers/ClientOnly";

interface TopBannerProps {
  title: string;
  backgroundImage?: string;
  canSlide?: boolean;
  onPrevClick?: () => void;
  onNextClick?: () => void;
}

const TopBanner = ({
  title,
  backgroundImage,
  canSlide,
  onPrevClick,
  onNextClick,
}: TopBannerProps) => {
  const { width } = useWindowSize();
  const bannerContent = (
    <ClientOnly>
      <div className="top-banner-content flex flex-col md:flex-row justify-between">
        <Typography variant="h4" className="text-white" weight="normal">
          {title}
        </Typography>
        {canSlide && width > 768 && (
          <div className="flex gap-2">
            <button onClick={onPrevClick} className="p-2 rounded bg-white/20">
              <IoIosArrowBack className="text-white" size={24} />
            </button>
            <button onClick={onNextClick} className="p-2 rounded bg-white/20 ">
              <IoIosArrowForward className="text-white" size={24} />
            </button>
          </div>
        )}
      </div>
    </ClientOnly>
  );

  return (
    <div className="top-banner overflow-hidden rounded-xl">
      {backgroundImage ? (
        <BackgroundImage
          imagePath={backgroundImage}
          className="py-2 px-4 md:px-14"
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
