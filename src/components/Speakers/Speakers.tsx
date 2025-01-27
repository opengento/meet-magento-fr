import Container from "@/layouts/Container";
import React from "react";
import Typography from "../Typography/Typography";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import SpeakersList from "./SpeakersList";

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
            <BackgroundImage
              imagePath="/images/pattern_speakers.svg"
              className="w-full md:w-1/2"
            >
              <div></div>
            </BackgroundImage>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Speakers;
