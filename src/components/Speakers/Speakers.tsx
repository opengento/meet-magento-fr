import Container from "@/layouts/Container";
import React from "react";
import Typography from "../Typography/Typography";
import SpeakersList from "./SpeakersList";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { IoIosArrowForward } from "react-icons/io";
import { SpeakersProps } from "@/components/Speakers/SpeakersProps";

const Speakers = ({data}: SpeakersProps) => {
  return (
    <Container size="large">
      <div className="speakers flex flex-col py-8 md:py-12 gap-12">
        <SpeakersList speakers={data.speakers} />
        <div className="flex flex-col md:flex-row bg-secondary pt-3 md:pl-3 md:pt-0 rounded-xl overflow-hidden">
          <div className="bg-white flex-1 flex flex-col md:flex-row">
            <div className="flex flex-col gap-6 flex-1 py-8 px-6 md:py-12 md:px-16">
              <Typography
                variant="h3"
                color="dark"
                weight="semibold"
                underlineColor="secondary-100"
              >
                {data.title}
              </Typography>
              <div className="flex flex-col">
                <Typography variant="subtitle2" color="dark" weight="bold">
                  {data.subtitle}
                </Typography>
                <Typography variant="subtitle2" color="dark" weight="medium">
                  {data.description}
                </Typography>
              </div>
            </div>
            <div className="bg-[url(/images/pattern_speakers.svg)] bg-cover flex items-center justify-center w-full h-64 p-5 md:h-auto md:w-1/2">
              <ButtonLink
                variant="secondary"
                href={data.registrationFormUrl}
                target="_blank"
                rel="noopener"
                iconPosition="right"
                icon={<IoIosArrowForward />}
              >
                {data.registrationLabel}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Speakers;
