import Container from "@/layouts/Container";
import React from "react";
import Typography from "../Typography/Typography";
import SpeakersList from "./SpeakersList";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { IoIosArrowForward } from "react-icons/io";

const Speakers = () => {
  return (
    <Container size="large">
      <div className="speakers flex flex-col py-8 md:py-12 gap-12">
        <SpeakersList />
        <div className="flex flex-col md:flex-row bg-secondary pt-3 md:pl-3 md:pt-0 rounded-xl overflow-hidden">
          <div className="bg-white flex-1 flex flex-col md:flex-row">
            <div className="flex flex-col gap-6 flex-1 py-8 px-6 md:py-12 md:px-16">
              <Typography
                variant="h3"
                color="dark"
                weight="semibold"
                underlineColor="secondary-100"
              >
                Appel à speakers
              </Typography>
              <div className="flex flex-col">
                <Typography variant="subtitle2" color="dark" weight="bold">
                  Vous êtes expert du E-Commerce ou passionné de Magento ?
                </Typography>
                <Typography variant="subtitle2" color="dark" weight="medium">
                  Partagez vos connaissances sur la scène de Meet Magento 2025
                  France, le 25 mars à Paris.
                </Typography>
              </div>
            </div>
            <div className="bg-[url(/images/pattern_speakers.svg)] bg-cover flex items-center justify-center w-full h-64 p-5 md:h-auto md:w-1/2">
              <ButtonLink
                variant="secondary"
                href="https://forms.gle/M6Y8V2xP7PGw5VD8A"
                target="_blank"
                rel="noopener"
                iconPosition="right"
                icon={<IoIosArrowForward />}
              >
                Rejoignez les conférenciers de MM25FR
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Speakers;
