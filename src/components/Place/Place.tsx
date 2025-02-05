import React from "react";
import Typography from "@/components//Typography/Typography";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { PlaceProps } from "@/components/Place/PlaceProps";
import { IoIosArrowForward } from "react-icons/io";

const Place = ({ place }: { place: PlaceProps }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 md:py-6">
      <div className="flex flex-col gap-4 ">
        <Typography
          variant="h3"
          color="dark"
          weight="semibold"
          underlineColor="primary-100"
        >
          {place.title}
        </Typography>
        <div>
          <Typography variant="subtitle2" color="dark" weight="bold">
            {place.subtitle}
          </Typography>
          <Typography variant="subtitle2" color="dark" weight="medium">
            {place.address}
          </Typography>
        </div>
        <Typography variant="body1" color="dark" weight="normal">
          {place.description}
        </Typography>
        <ButtonLink
          variant="secondary-invert-w-border"
          href={place.url}
          target="_blank"
          rel="noopener"
          iconPosition="right"
          icon={<IoIosArrowForward />}
        >
          {place.label}
        </ButtonLink>
      </div>
    </div>
  );
};

export default Place;
