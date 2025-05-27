"use client";

import React from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import useWindowSize from "@/hooks/useWindowSize";
import ClientOnly from "@/helpers/ClientOnly";
import TopBanner from "@/components/TopBanner/TopBanner";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { useTranslation } from "react-i18next";
import Person from "@/components/Person/Person";
import { PersonProps } from "@/components/Person/PersonProps";
import SpeakerPopIn from "@/components/Speakers/Speaker/SpeakerPopIn";

const SpeakersList = ({ speakers }: { speakers: PersonProps[] }) => {
  const { width } = useWindowSize();
  const swiperRef = React.useRef<SwiperClass>(null);
  const [selectedSpeaker, setSelectedSpeaker] =
    React.useState<PersonProps | null>(null);
  const { t } = useTranslation(["speakers", "common", "edition"]);
  const actions = t("actions", { returnObjects: true });

  const handleSpeakerClick = (speaker: PersonProps) => {
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
          title={t("edition:isWaitingNextEdition") ? t("speakers:waitingListTitle", { year: t("edition:nextEditionYear") }) : t("speakers:listTitle")}
          backgroundImage="/images/pattern_top-banner_speakers.svg"
          onPrevClick={handlePrev}
          onNextClick={handleNext}
        >
          {"seeAllUrl" in actions && typeof actions.seeAllUrl === "string" && (
            <>
              <div className="md:hidden">
                <ButtonLink variant="secondary" href={actions.seeAllUrl}>
                  {t("common:seeAll")}
                </ButtonLink>
              </div>
              <div className="hidden md:block">
                <ButtonLink variant="secondary" href={actions.seeAllUrl}>
                  {t("edition:isWaitingNextEdition") ? t("speakers:waitingListLabel", { year: t("edition:nextEditionYear") }) : t("speakers:listLabel")}
                </ButtonLink>
              </div>
            </>
          )}
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
              slidesPerView: 1.1,
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
                <Person person={speaker} onClick={() => handleSpeakerClick(speaker)}/>
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
                          <Person
                            person={speaker}
                            onClick={() => handleSpeakerClick(speaker)}
                            key={speaker.id}
                          />
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
                          <Person
                            person={speaker}
                            onClick={() => handleSpeakerClick(speaker)}
                            key={speaker.id}
                          />
                        ))}
                    </div>
                  </SwiperSlide>
                )
              )}
        </Swiper>
      </ClientOnly>
      {selectedSpeaker && (
        <SpeakerPopIn
          selectedSpeaker={selectedSpeaker}
          isOpen={!!selectedSpeaker}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default SpeakersList;
