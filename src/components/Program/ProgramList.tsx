import React from "react";
import TopBanner from "../TopBanner/TopBanner";
import ButtonLink from "../ButtonLink/ButtonLink";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import useDataProvider from "@/hooks/useDataProvider";
import ClientOnly from "@/helpers/ClientOnly";

const ProgramList = () => {
  const swiperRef = React.useRef<SwiperClass>(null);
  const sessions = useDataProvider().useSessions();

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
    <section className="program-list flex flex-col gap-8">
      <TopBanner
        title="Extrait du Programme"
        onNextClick={handleNext}
        onPrevClick={handlePrev}
      >
        <>
          <div className="md:hidden">
            <ButtonLink variant="secondary-invert" href={"/program"}>
              Voir tout
            </ButtonLink>
          </div>
          <div className="hidden md:block">
            <ButtonLink variant="secondary-invert" href={"/program"}>
              Découvrir le Programme
            </ButtonLink>
          </div>
        </>
      </TopBanner>
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
              slidesPerView: 3,
            },
          }}
          className="relative"
        >
          {sessions.map((session) => (
            <SwiperSlide key={session.id}>
              <div className="text-white">{session.title}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ClientOnly>
    </section>
  );
};

export default ProgramList;
