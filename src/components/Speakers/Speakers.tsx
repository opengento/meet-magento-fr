import Container from "@/layouts/Container";
import React from "react";
import SpeakersList from "./SpeakersList";
import { SpeakersProps } from "@/components/Speakers/SpeakersProps";

const Speakers = ({ data }: { data: SpeakersProps }) => {
  return (
    <Container size="large">
      <div className="speakers flex flex-col py-8 md:py-12 gap-12">
        <SpeakersList speakers={data.speakers} />
      </div>
    </Container>
  );
};

export default Speakers;
