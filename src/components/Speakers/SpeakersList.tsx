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

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Régis Quintin",
    title: "lorem ipsum",
    company: "Adobe",
    role: "Head of Commerce for Western Europe",
    image: "/images/speakers/speaker.png",
  },
  {
    id: 2,
    name: "Balvesh Rakkar",
    title: "lorem ipsum",
    company: "Scandiweb",
    role: "Responsable technique",
    image: "/images/speakers/speaker.png",
  },
  {
    id: 3,
    name: "Balvesh Rakkar",
    title: "lorem ipsum",
    company: "Scandiweb",
    role: "Responsable technique",
    image: "/images/speakers/speaker.png",
  },
  {
    id: 4,
    name: "Balvesh Rakkar",
    title: "lorem ipsum",
    company: "Scandiweb",
    role: "Responsable technique",
    image: "/images/speakers/speaker.png",
  },
  {
    id: 5,
    name: "Balvesh Rakkar",
    title: "lorem ipsum",
    company: "Scandiweb",
    role: "Responsable technique",
    image: "/images/speakers/speaker.png",
  },
  {
    id: 6,
    name: "Balvesh Rakkar",
    title: "lorem ipsum",
    company: "Scandiweb",
    role: "Responsable technique",
    image: "/images/speakers/speaker.png",
  },
  {
    id: 7,
    name: "Balvesh Rakkar",
    title: "lorem ipsum",
    company: "Scandiweb",
    role: "Responsable technique",
    image: "/images/speakers/speaker.png",
  },
];

const SpeakersList = () => {
  const { width } = useWindowSize();
  const swiperRef = React.useRef<SwiperClass>(null);
  const [selectedSpeaker, setSelectedSpeaker] = React.useState<Speaker | null>(
    null
  );

  const handleSpeakerClick = (speaker: Speaker) => {
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
          title="Appel à speakers"
          backgroundImage="/images/pattern_top-banner_speakers.svg"
          onPrevClick={handlePrev}
          onNextClick={handleNext}
        >
          <ButtonLink variant="secondary" href="#speakers">Découvrir les speakers</ButtonLink>
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
