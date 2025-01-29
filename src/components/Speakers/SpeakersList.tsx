"use client";

import React from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import useWindowSize from "@/hooks/useWindowSize";
import ClientOnly from "@/helpers/ClientOnly";
import TopBanner from "@/components/TopBanner/TopBanner";
import Speaker from "./Speaker/Speaker";
import SpeakerPopIn from "./Speaker/SpeakerPopIn";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { SpeakerProps } from "@/components/Speakers/Speaker/SpeakerProps";

const SpeakersList = ({ speakers }: { speakers: SpeakerProps[] }) => {
  const { width } = useWindowSize();
  const swiperRef = React.useRef<SwiperClass>(null);
  const [selectedSpeaker, setSelectedSpeaker] =
    React.useState<SpeakerProps | null>(null);

  const handleSpeakerClick = (speaker: SpeakerProps) => {
    setSelectedSpeaker(speaker);
  };

  const handleCloseModal = () => {
    setSelectedSpeaker(null);
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className="speakers-list">
      <div className="mb-12">
        <TopBanner
          title="Les speakers"
          backgroundImage="/images/pattern_top-banner_speakers.svg"
          onPrevClick={handlePrev}
          onNextClick={handleNext}
        >
          <div className="md:hidden">
            <ButtonLink variant="secondary" href="#speakers">
              Voir tout
            </ButtonLink>
          </div>
          <div className="hidden md:block">
            <ButtonLink variant="secondary" href="#speakers">
              Découvrir les speakers
            </ButtonLink>
          </div>
        </TopBanner>
      </div>
      <ClientOnly>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation]}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 1.05,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
          }}
          className="relative"
        >
          {width < 768
            ? speakers.map((speaker) => (
                <SwiperSlide key={speaker.id}>
                  <div onClick={() => handleSpeakerClick(speaker)}>
                    <Speaker speaker={speaker} />
                  </div>
                </SwiperSlide>
              ))
            : width < 1024
            ? Array.from({ length: Math.ceil(speakers.length / 4) }).map(
                (_, slideIndex) => (
                  <SwiperSlide key={slideIndex}>
                    <div className="grid grid-cols-2 gap-8 gap-y-12">
                      {speakers
                        .slice(slideIndex * 4, (slideIndex + 1) * 4)
                        .map((speaker) => (
                          <div
                            key={speaker.id}
                            className="flex flex-row gap-6 group hover:cursor-pointer"
                            onClick={() => handleSpeakerClick(speaker)}
                          >
                            <Speaker speaker={speaker} />
                          </div>
                        ))}
                    </div>
                  </SwiperSlide>
                )
              )
            : Array.from({ length: Math.ceil(speakers.length / 6) }).map(
                (_, slideIndex) => (
                  <SwiperSlide key={slideIndex}>
                    <div className="grid grid-cols-3 gap-8 gap-y-12">
                      {speakers
                        .slice(slideIndex * 6, (slideIndex + 1) * 6)
                        .map((speaker) => (
                          <div
                            key={speaker.id}
                            className="flex flex-row gap-6 group hover:cursor-pointer"
                            onClick={() => handleSpeakerClick(speaker)}
                          >
                            <Speaker speaker={speaker} />
                          </div>
                        ))}
                    </div>
                  </SwiperSlide>
                )
              )}
        </Swiper>
      </ClientOnly>

      {selectedSpeaker && (
        <SpeakerPopIn
          isOpen={!!selectedSpeaker}
          onClose={handleCloseModal}
          selectedSpeaker={selectedSpeaker}
        />
      )}
    </section>
  );
};

export default SpeakersList;
