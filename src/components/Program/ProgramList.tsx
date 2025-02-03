import React from "react";
import TopBanner from "../TopBanner/TopBanner";
import ButtonLink from "../ButtonLink/ButtonLink";
import { SwiperClass } from "swiper/react";

const ProgramList = () => {
  const swiperRef = React.useRef<SwiperClass>(null);

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
    <section className="program-list">
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
    </section>
  );
};

export default ProgramList;
